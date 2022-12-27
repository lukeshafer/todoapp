import html from '../lib/html';
import { taskListSchema } from '../lib/api-schemas';

//import type { TaskItem } from './task-item';
import type { TaskInput } from '../pages/api/tasks';

const taskListTemplate = document.createElement('template');
taskListTemplate.innerHTML = html`
	<section>
		<h2></h2>
		<ul></ul>
		<form method="post" action="/api/task">
			<input name="userId" type="text" hidden />
			<input name="titleText" type="text" required />
			<button type="submit">Submit</button>
		</form>
	</section>
`;

export class TaskList extends HTMLElement {
	_name;
	// @ts-ignore
	_list: HTMLUListElement;
	_userId;

	constructor() {
		super();
		this._name = '';
		this._userId = '';
	}

	async connectedCallback() {
		this.appendChild(taskListTemplate.content.cloneNode(true));
		this._name = this.dataset.name ?? '';
		this.querySelector('h2')!.textContent = this._name;
		this._list = this.querySelector('ul')!;

		this._userId = await fetch(`/api/userId?name=${this._name}`).then(
			(res) => res.text()
		);

		this.querySelector<HTMLInputElement>('input[name="userId"]')!.value =
			this._userId;

		const form = this.querySelector('form')!;
		form.onsubmit = async (e) => {
			e.preventDefault();
			const text = form.titleText.value;

			const input: TaskInput = {
				userId: this._userId,
				title: text,
			};

			this.addNewListItem({
				text,
				completed: false,
				id: '',
				name: this._name,
			});
			form.titleText.value = '';

			const response = await fetch('/api/tasks', {
				method: 'post',
				body: new URLSearchParams(Object.entries(input)),
			});

			if (!response.ok) {
				throw new Error();
			}
			this.refresh();
		};
		this.refresh();
		window.addEventListener('focus', () => this.refresh());
	}

	addNewListItem(data: {
		text: string;
		completed: boolean;
		id: string;
		name: string;
	}) {
		const { text, completed, id, name } = data;
		const li = document.createElement('li');
		li.innerHTML = html`
			<task-item
				data-id="${id}"
				data-text="${text}"
				data-name="${name}"
				data-completed="${completed}">
			</task-item>
		`;
		this._list.appendChild(li);
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

		this._list.innerHTML = '';
		parsed.data.forEach((task) => {
			this.addNewListItem({
				text: task.title,
				completed: task.completed,
				id: task.id,
				name: this._name,
			});
		});
	}
}

if (!import.meta.env.SSR) customElements.define('task-list', TaskList);
