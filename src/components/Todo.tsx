import { createEffect, onMount } from "solid-js";
import type { Todo } from "../lib/state";

export default function Todo({
	todo,
	completeTodo,
}: {
	/** DO NOT DESTRUCTURE */
	todo: Todo;
	completeTodo: () => void;
}) {
	createEffect(() => {
		fetch("/api/completeTask", {
			method: "post",
			body: new URLSearchParams(
				Object.entries({
					id: todo.id,
					completed: todo.completed ? "true" : "false",
				})
			),
		}).then((res) => {
			if (!res.ok) {
				console.error("Unable to change status");
				throw new Error();
			}
		});
	});

	return (
		<li>
			<button
				aria-pressed={`${todo.completed}`}
				name="completed"
				value={`${todo.completed}`}
				onclick={completeTodo}
			>
				<span>
					{todo.completed ? "Mark not completed" : "Mark completed"}
				</span>
			</button>
			<p>{todo.text}</p>
			<button class="delete" onclick={() => todo.delete()}>
				Delete
			</button>
		</li>
	);
}
