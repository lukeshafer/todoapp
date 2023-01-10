import html from "../lib/html";
import { TaskInput, taskListSchema } from "../lib/api-schemas";
import autoAnimate from "@formkit/auto-animate";

import type { TaskItem } from "../elements/task-item";

const taskListTemplateString = html`
    <section>
        <h2></h2>
        <ul></ul>
        <form method="post" action="/api/task">
            <input name="userId" type="text" hidden />
            <label class="visually-hidden">Add Task</label>
            <input
                name="titleText"
                type="text"
                required
                placeholder="Add Task"
            />
            <button type="submit" class="form-button">Add</button>
            <task-options></task-options>
        </form>
    </section>
`;

export const listItemTemplateString = (data: {
    text: string;
    completed: boolean;
    id: string;
    name: string;
}) => html`
    <li>
        <task-item
            id="${data.id}"
            data-text="${data.text}"
            name="${data.name}"
            completed="${data.completed}"
        >
        </task-item>
    </li>
`;

const getTemplate = () => {
    const taskListTemplate = document.createElement("template");
    taskListTemplate.innerHTML = taskListTemplateString;
    return taskListTemplate;
};

export type TaskList = TaskListElement;
class TaskListElement extends HTMLElement {
    _name;
    // @ts-ignore
    _list: HTMLUListElement;
    _userId;

    constructor() {
        super();
        this._name = "";
        this._userId = "";
    }

    async connectedCallback() {
        this.appendChild(getTemplate().content.cloneNode(true));
        this._name = this.dataset.name ?? "";
        this.querySelector("h2")!.textContent = this._name;
        this._list = this.querySelector("ul")!;
        autoAnimate(this._list);

        this._userId = await fetch(`/api/userId?name=${this._name}`).then(
            (res) => res.text()
        );

        this.querySelector<HTMLInputElement>('input[name="userId"]')!.value =
            this._userId;

        this.querySelector<HTMLInputElement>(
            'input[name="titleText"]'
        )!.id = `input-${this._userId}`;
        this.querySelector("label")!.htmlFor = `input-${this._userId}`;

        const form = this.querySelector("form")!;
        form.onsubmit = async (e) => {
            e.preventDefault();
            const text = form.titleText.value;

            const input: TaskInput = {
                userId: this._userId,
                title: text,
            };

            const tempId = Symbol().toString();
            const item = this.addNewListItem({
                text,
                completed: false,
                id: tempId,
                name: this._name,
            });
            console.log(item);
            form.titleText.value = "";

            const response = await fetch("/api/tasks", {
                method: "post",
                body: new URLSearchParams(Object.entries(input)),
            });

            if (!response.ok) {
                throw new Error();
            }
            const id = await response.text();
            //item.dataset.id = id;
            item.setAttribute("id", id);

            this.refresh();
        };
        this.refresh();
        window.addEventListener("focus", () => this.refresh());
    }

    addNewListItem(data: {
        text: string;
        completed: boolean;
        id: string;
        name: string;
    }) {
        const { text, completed, id, name } = data;
        const listItemTemplate = document.createElement("template");
        listItemTemplate.innerHTML = listItemTemplateString({
            text,
            completed,
            id,
            name,
        });
        //console.log(listItemTemplate.innerHTML);
        const node = listItemTemplate.content.cloneNode(
            true
        ) as DocumentFragment;
        const testEl = node.firstElementChild;
        this._list.appendChild(node);
        return testEl!.querySelector("task-item")!;
    }

    async refresh() {
        const response = await fetch(`/api/tasks?name=${this._name}`);
        if (!response.ok) {
            throw new Error("Couldn't fetch tasks");
        }
        const data = JSON.parse(await response.text());
        const parsed = taskListSchema.safeParse(data);

        if (!parsed.success) {
            console.error(parsed.error.issues);
            throw new Error("Couldn't parse tasks");
        }

        const tasks = parsed.data;

        const currentListItems = [...this._list.children] as HTMLLIElement[];

        const completedItems = currentListItems.filter((el) => {
            const item = el.firstElementChild as TaskItem;
            const result = tasks.findIndex(({ id }) => item.id === id);
            if (result >= 0) {
                tasks.splice(result, 1);
                if (item.getAttribute("completed") === "true") return true;
            } else this._list.removeChild(el);
            return false;
        });

        //this._list.innerHTML = '';
        parsed.data.forEach((task) => {
            this.addNewListItem({
                text: task.title,
                completed: task.completed,
                id: task.id,
                name: this._name,
            });
        });

        completedItems.forEach((item) => this._list.appendChild(item));
    }
}

export const tagName = "task-list";
customElements.define(tagName, TaskListElement);
