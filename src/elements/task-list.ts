import html from '../lib/html';
import { taskListSchema } from '../lib/api-schemas';

import type { TaskItem } from './task-item';
import type { TaskInput } from '../pages/api/tasks';

export class TaskList extends HTMLElement {
	dataName;
	listNodes;
	userId;
	template(name: string) {
		return html`
			<section>
				<h2>${name}</h2>
				<ul></ul>
				<form method="post" action="/api/task">
					<input name="userId" type="text" hidden />
					<input name="titleText" type="text" required />
					<button type="submit">Submit</button>
				</form>
			</section>
		`;
	}

	constructor() {
		super();
		this.dataName = this.dataset.name!;
		this.userId = '';
		fetch(`/api/userId?name=${this.dataName}`).then((res) =>
			res.text().then((body) => {
				this.userId = body;
			})
		);
		const section = this.template(this.dataName);
		this.listNodes = section.querySelector('ul')!;
		this.appendChild(section);
	}

	connectedCallback() {
		const form = this.querySelector('form')!;
		form.onsubmit = async (e) => {
			e.preventDefault();
			const text = form.titleText.value;

			const input: TaskInput = {
				userId: this.userId,
				title: text,
			};

			this.listNodes.appendChild(this.childTemplate(text, false));
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

	childTemplate(data: {
		text: string;
		completed: boolean;
		id: string;
		name: string;
	}) {
		const { text, completed, id, name } = data;
		return html`
			<li>
				<task-item
					data-title="${text}"
					data-id="${id}"
					data-name="${name}"
					data-completed="${completed}"></task-item>
			</li>
		`;
	}

	async refresh() {
		const response = await fetch(`/api/tasks?name=${this.dataName}`);
		if (!response.ok) {
			throw new Error("Couldn't fetch tasks");
		}
		const data = JSON.parse(await response.text());
		const parsed = taskListSchema.safeParse(data);

		if (!parsed.success) {
			console.error(parsed.error.issues);
			throw new Error("Couldn't parse tasks");
		}

		this.listNodes.innerHTML = '';
		parsed.data.forEach((task) => {
			this.listNodes.appendChild(
				this.childTemplate({
					text: task.title,
					completed: task.completed,
					id: task.id,
					name: this.dataName,
				})
			);
		});
	}
}

if (!import.meta.env.SSR) customElements.define('task-list', TaskList);
