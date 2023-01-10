import taggedTemplate from "./html";
type TaggedTemplate = typeof taggedTemplate;

const css = taggedTemplate;

let globalStylePaths = new Set<string>();

interface ObservedAttribute {
	name: string;
	attributeChangedCallback: (oldValue: string, newValue: string) => void;
}

interface ElementOptions<T extends string> {
	elementName: T;
	observedAttributes?: ObservedAttribute[];
	connectedCallback?: (element: HTMLElement) => void;
	disconnectedCallback?: (element: HTMLElement) => void;
	template: (html: TaggedTemplate) => string;
	style: (css: TaggedTemplate) => string;
}

export function createElement<T extends string>({
	elementName,
	observedAttributes,
	connectedCallback,
	disconnectedCallback,
	template: templateString,
	style: styleString,
}: ElementOptions<T>) {
	const templateEl = document.createElement("template");
	templateEl.innerHTML = templateString(taggedTemplate);

	const attributes = observedAttributes?.map(({ name }) => name) ?? [];
	const attributeCallbackMap = new Map(
		observedAttributes?.map(({ name, attributeChangedCallback }) => [
			name,
			attributeChangedCallback,
		]) ?? []
	);

	const element = class extends HTMLElement {
		constructor() {
			super();
			this.attachShadow({ mode: "open" });
			const styleEl = document.createElement("style");
			[...globalStylePaths].map(
				(path) => `@import url(${path}) layer(base);`
			);
			styleEl.innerHTML = css`
                @layer base, component;

                ${[...globalStylePaths]
					.map((path) => `@import url(${path});`)
					.join("\n")}

                @layer base {
                    ${styleString(taggedTemplate)}
                }
            `;
			this.shadowRoot!.appendChild(styleEl);
			this.shadowRoot!.appendChild(templateEl.content.cloneNode(true));
		}

		static get observedAttributes() {
			return attributes;
		}

		attributeChangedCallback(
			name: string,
			oldValue: string,
			newValue: string
		) {
			const callback = attributeCallbackMap.get(name);
			if (callback) callback(oldValue, newValue);
		}

		connectedCallback() {
			if (connectedCallback) connectedCallback(this);
		}

		disconnectedCallback() {
			if (disconnectedCallback) disconnectedCallback(this);
		}
	};

	customElements.define(elementName, element);
	return element;
}

export function importGlobalStyles(path: string) {
	globalStylePaths.add(path);
}
