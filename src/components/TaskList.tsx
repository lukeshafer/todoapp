import autoAnimate from "@formkit/auto-animate";
import { createSignal, For, onMount, Signal } from "solid-js";
import type { TaskInput } from "../lib/api-schemas";
import { todoListStore } from "../lib/state";

interface Props {
    name: string;
    userId: string;
}

export default function TaskList({ name: userName, userId }: Props) {
    let ulist: HTMLUListElement;
    const inputId = `input-${userId}`;

    onMount(() => {
        autoAnimate(ulist);
    });

    async function handleFormSubmit(e: SubmitEvent) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;

        const text = form.taskTitle.value as string;
        form.taskTitle.value = "";

        const input: TaskInput = {
            userId,
            title: text,
        };

        const tempId = Symbol();
        todoListStore.push({
            text,
            completed: false,
            id: tempId,
            name: userName,
        });

        const response = await fetch("/api/tasks", {
            method: "post",
            body: new URLSearchParams(Object.entries(input)),
        });

        if (!response.ok) {
            todoListStore.remove(tempId);
            throw new Error();
        }

        const id = await response.text();
        todoListStore.updateId(tempId, id);
    }

    return (
        <section>
            <h2>{userName}</h2>
            <ul ref={ulist!}>
                <For each={todoListStore.values}>
                    {(todo) => (
                        <li>
                            <task-item
                                id={todo.id}
                                data-text={todo.text}
                                name={todo.name}
                                completed={todo.completed}
                            ></task-item>
                        </li>
                    )}
                </For>
            </ul>
            <form method="post" action="/api/task" onSubmit={handleFormSubmit}>
                <input name="userId" type="text" value={userId} hidden />
                <label for={inputId} class="visually-hidden">
                    Add Task
                </label>
                <input
                    name="taskTitle"
                    type="text"
                    id={inputId}
                    required
                    placeholder="Add Task"
                />
                <button type="submit" class="form-button">
                    Add
                </button>
                {/* @ts-expect-error - will be auto fixed once everything is solid*/}
                <task-options></task-options>
            </form>
        </section>
    );
}