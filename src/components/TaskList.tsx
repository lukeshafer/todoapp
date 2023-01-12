import autoAnimate from "@formkit/auto-animate";
import { For, Index, onMount } from "solid-js";
import type { TaskInput } from "../lib/api-schemas";
import { getTodoListFor } from "../lib/state";
import styles from "./TaskList.module.css";
import Todo from "./Todo";

interface Props {
	name: string;
	userId: string;
}

export default function TaskList({ name: userName, userId }: Props) {
	let ulist: HTMLUListElement;
	const inputId = `input-${userId}`;
	const todoListStore = getTodoListFor(userName);

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

		const tempId = `${Math.floor(Math.random() * 99999 + 100000)}`;
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
		<section
			class={`
				${styles.taskList} 
				${userName === "luke" ? styles.lukeList : styles.anahitaList}`}
		>
			<h2>{userName}</h2>
			<ul ref={ulist!}>
				<Index each={todoListStore.values}>
					{(todo) => (
						<Todo
							todo={todo()}
							completeTodo={() => {
								todoListStore.toggleCompleted(todo().id);
								fetch("/api/completeTask", {
									method: "post",
									body: new URLSearchParams(
										Object.entries({
											id: todo().id,
											completed: todo().completed
												? "true"
												: "false",
										})
									),
								}).then((res) => {
									if (!res.ok) {
										console.error(
											"Unable to change status"
										);
										throw new Error();
									}
								});
							}}
						/>
					)}
				</Index>
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
