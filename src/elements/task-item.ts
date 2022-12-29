import html from '../lib/html';
import type { TaskList } from './task-list';

const getTemplate = () => {
	const taskItemTemplate = document.createElement('template');
	taskItemTemplate.innerHTML = html`
		<input type="checkbox" name="completed" />
		<label></label>
		<button class="delete">Delete</button>
	`;
	return taskItemTemplate;
};

export type TaskItem = TaskItemElement;
class TaskItemElement extends HTMLElement {
	text: string;
	$checkbox?: HTMLInputElement;
	$deleteButton?: HTMLButtonElement;
	$parentList?: TaskList;

	constructor() {
		super();
		this.appendChild(getTemplate().content.cloneNode(true));

		this.text = '';
	}

	static get observedAttributes() {
		return ['id', 'completed'];
	}

	async attributeChangedCallback(
		name: string,
		oldValue: string,
		newValue: string
	) {
		switch (name) {
			case 'id':
				if (this.$checkbox) this.$checkbox.id = newValue;
				break;
			case 'completed':
				const isCompleted = newValue === 'true';
				if (this.$checkbox && this.$checkbox.checked !== isCompleted)
					this.$checkbox.checked = isCompleted;
				if (oldValue == null) return;
				const response = await fetch('/api/completeTask', {
					method: 'post',
					body: new URLSearchParams(
						Object.entries({
							id: this.id,
							completed: String(isCompleted),
						})
					),
				});
				if (!response.ok) {
					console.error('Unable to change status');
					throw new Error();
				}
				this.$parentList?.refresh();
				break;
		}
	}

	connectedCallback() {
		if (!this.dataset.text) throw new Error('data-title is required');
		this.text = this.dataset.text;

		this.$checkbox = this.querySelector('input')!;
		this.$checkbox.id = `checkbox-${this.id}`;
		this.$checkbox.checked = this.getAttribute('completed') === 'true';
		this.$checkbox.onchange = () =>
			this.setAttribute('completed', String(this.$checkbox!.checked));

		const label = this.querySelector('label')!;
		label.htmlFor = this.$checkbox.id;
		label.textContent = this.text;

		this.$deleteButton = this.querySelector('button.delete')!;
		this.$deleteButton.onclick = () => {
			this.delete();
		};

		this.$parentList = document.querySelector(
			`task-list[data-name="${this.getAttribute('name')}"]`
		)!;
	}

	async delete() {
		const response = await fetch('/api/deleteTask', {
			method: 'post',
			body: new URLSearchParams(
				Object.entries({
					id: this.id,
				})
			),
		});
		if (!response.ok) {
			console.error('delete failed');
			throw new Error();
		}
		this.$parentList!.refresh();
	}
}

export const tagName = 'task-item';
customElements.define(tagName, TaskItemElement);
