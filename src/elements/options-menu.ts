import html from "../lib/html";
const css = html;

// get name cookie
const cookies = new Map(
	document.cookie
		.split("; ")
		.map((cookie) => cookie.split("=") as [string, string])
);
const name = cookies.get("name");
const otherName = name === "luke" ? "anahita" : "luke";

// capitalize name
const capitalizeName = (name: string) =>
	name.charAt(0).toUpperCase() + name.slice(1);

const menuTemplate = document.createElement("template");
menuTemplate.innerHTML = html`
    <button id="open-options" aria-pressed="false">Options</button>
    <menu hidden>
        <ul>
            <li>
                <form name="identity" method="POST">
                    <h3>Who are you?</h3>
                    <button
                        name=${name}
                        type="submit"
                        formaction="/api/name?name=${name}"
                    >
                        ${capitalizeName(name ?? "")}
                    </button>
                    <button
                        name=${otherName}
                        type="submit"
                        formaction="/api/name?name=${otherName}"
                    >
                        ${capitalizeName(otherName ?? "")}
                    </button>
                </form>
            </li>
        </ul>
    </menu>
`;

class OptionsMenu extends HTMLElement {
	$menu: HTMLMenuElement;
	$button: HTMLButtonElement;
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.innerHTML = this.styles;
		this.shadowRoot!.appendChild(style);

		this.shadowRoot!.appendChild(menuTemplate.content.cloneNode(true));
		this.$menu = this.shadowRoot!.querySelector("menu")!;
		this.$button = this.shadowRoot!.querySelector("#open-options")!;
		this.$button.addEventListener("click", this.toggleMenu());
	}

	connectedCallback() { }

	toggleMenu() {
		return () => {
			this.$menu!.hidden = !this.$menu!.hidden;
			this.$button!.setAttribute(
				"aria-pressed",
				this.$menu!.hidden ? "false" : "true"
			);
		};
	}

	styles = css`
        @import url("./style.css");

        :host {
            display: grid;
            gap: 0.5rem;
        }

        button {
            padding: 0.5rem;
            border: none;
            border-radius: 0.7rem;
            max-width: max-content;
        }

        #open-options {
            color: white;
            background: var(--violet-12);
        }

        menu {
            background: var(--violet-12);
            border-radius: 0.7rem;
            padding: 0.5rem;
            max-width: max-content;
        }

        menu > button {
            background: var(--violet-12);
            border: none;
        }

        form {
            display: grid;
            gap: 0.5rem;
            grid-template-columns: auto auto;
        }

        form[name="identity"] h3 {
            text-align: center;
            grid-column: span 2;
        }
    `;
}

export const tagName = "options-menu";
customElements.define(tagName, OptionsMenu);
