import html from '../lib/html';
import type { TaskList } from './task-list';

export class TaskItem extends HTMLElement {
	dataTitle;
	dataId;
	completed;
	dataName;
	template = (data: { title: string; completed: boolean; id: string }) =>
		html`
			<input
				type="checkbox"
				name="completed"
				id="${data.id}"
				${data.completed ? 'checked' : ''} />
			<label for="${data.id}">${data.title}</label>
		`;

	constructor() {
		super();

		if (!this.dataset.title) {
			throw new Error('data-title is required');
		}
		this.dataTitle = this.dataset.title ?? '';
		this.completed = this.dataset.completed === 'true';
		this.dataName = this.dataset.name ?? '';

		if (!this.dataset.id) {
			throw new Error('data-id is required');
		}
		this.dataId = this.dataset.id ?? Symbol().toString();

		this.appendChild(
			this.template({
				title: this.dataTitle,
				completed: this.completed,
				id: this.dataId,
			})
		);

		this.querySelector('input')!.onchange = (e) => {
			const target = e.target as HTMLInputElement;
			this.updateCompletedStatus(target.checked);
		};
	}

	async updateCompletedStatus(isCompleted: boolean) {
		this.completed = isCompleted;
		this.querySelector('input')!.checked = isCompleted;

		const response = await fetch('/api/completeTask', {
			method: 'post',
			body: new URLSearchParams(
				Object.entries({
					id: this.dataId,
					completed: String(isCompleted),
				})
			),
		});
		if (!response.ok) {
			console.error('updateCompletedStatus failed');
			throw new Error();
		}
		const parentList = document.querySelector(
			`task-list[data-name="${this.dataName}"]`
		)! as TaskList;
		parentList.refresh();
	}
}

if (!import.meta.env.SSR) customElements.define('task-item', TaskItem);
