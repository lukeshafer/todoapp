import html from '../lib/html';

const menuTemplate = document.createElement('template');
menuTemplate.innerHTML = html`
	<button id="open-options" aria-pressed="false">Options</button>
	<menu hidden>
		<ul>
			<li>
				<form name="identity">
					<h3>Who are you?</h3>
					<button id="is-luke-button">Luke</button>
					<button id="is-anahita-button">Anahita</button>
				</form>
			</li>
		</ul>
	</menu>
`;

class OptionsMenu extends HTMLElement {
	$menu?: HTMLMenuElement;
	constructor() {
		super();
	}

	connectedCallback() {
		const button = document.createElement('button');
		button.innerText = 'Options';
		button.ariaPressed = 'false';
		this.appendChild(button);

		this.$menu = document.createElement('menu');
		this.$menu.innerHTML = html`
			<menu>
				<ul>
					<li>
						<form name="identity">
							<h3>Who are you?</h3>
							<button id="is-luke-button">Luke</button>
							<button id="is-anahita-button">Anahita</button>
						</form>
					</li>
				</ul>
			</menu>
		`;
	}
}

export const tagName = 'options-menu';
customElements.define(tagName, OptionsMenu);
