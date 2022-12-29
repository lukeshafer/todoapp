import html from '../lib/html';

class AnahitaList extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = html`<task-list data-name="Anahita"></task-list>`;
	}
}

export const tagName = 'anahita-list';
customElements.define(tagName, AnahitaList);
