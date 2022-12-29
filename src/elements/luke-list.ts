import html from '../lib/html';

class LukeList extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = html`<task-list data-name="Luke"></task-list>`;
	}
}

export const tagName = 'luke-list';
customElements.define(tagName, LukeList);
