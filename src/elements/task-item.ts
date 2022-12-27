import html from '../lib/html';
import type { TaskList } from './task-list';

const taskItemTemplate = document.createElement('template');
taskItemTemplate.innerHTML = html`
	<input type="checkbox" name="completed" />
	<label></label>
	<button class="delete">Delete</button>
`;

export class TaskItem extends HTMLElement {
	_text: string;
	_id: string;
	_completed: boolean;
	_name: string;
	$checkbox: HTMLInputElement;
	$deleteButton: HTMLButtonElement;
	$parentList: TaskList;

	constructor() {
		super();
		this.appendChild(taskItemTemplate.content.cloneNode(true));

		this._text = '';
		this._id = '';
		this._completed = false;
		this._name = '';
	}

	connectedCallback() {
		if (!this.dataset.text) throw new Error('data-title is required');
		this._text = this.dataset.text;

		this._id = this.dataset.id ?? '';

		this._completed = this.dataset.completed === 'true';
		this._name = this.dataset.name ?? '';

		this.$checkbox = this.querySelector('input')!;
		this.$checkbox.checked = this._completed;
		this.$checkbox.id = this._id;
		this.$checkbox.onchange = () => {
			this.updateCompletedStatus(this.$checkbox.checked);
		};

		const label = this.querySelector('label')!;
		label.htmlFor = this._id;
		label.textContent = this._text;

		this.$deleteButton = this.querySelector('button.delete')!;
		this.$deleteButton.onclick = () => {
			this.delete();
		};

		this.$parentList = document.querySelector(
			`task-list[data-name="${this._name}"]`
		)!;
	}

	async updateCompletedStatus(isCompleted: boolean) {
		this._completed = isCompleted;
		this.querySelector('input')!.checked = isCompleted;

		const response = await fetch('/api/completeTask', {
			method: 'post',
			body: new URLSearchParams(
				Object.entries({
					id: this._id,
					completed: String(isCompleted),
				})
			),
		});
		if (!response.ok) {
			console.error('updateCompletedStatus failed');
			throw new Error();
		}
		this.$parentList.refresh();
	}

	async delete() {
		const response = await fetch('/api/deleteTask', {
			method: 'post',
			body: new URLSearchParams(
				Object.entries({
					id: this._id,
				})
			),
		});
		if (!response.ok) {
			console.error('delete failed');
			throw new Error();
		}
		this.$parentList.refresh();
	}
}

if (!import.meta.env.SSR) customElements.define('task-item', TaskItem);
