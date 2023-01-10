import html from "../lib/html";
const css = html;

const optionsTemplate = document.createElement("template");
optionsTemplate.innerHTML = html`
    <button name="open-options" aria-pressed="false" class="form-button">
        Options
    </button>
    <dialog id="options-dialog">
        <form method="post" action="/api/task">
            <input name="userId" type="text" hidden />
            <label class="visually-hidden">Add Task</label>
            <input name="titleText" type="text" required placeholder="Task" />
            <label for="priority-select">Priority</label>
            <select name="priority" id="priority-select">
                <option value="normal">Normal</option>
                <option value="low">High</option>
                <option value="high">Low</option>
            </select>
            <label for="due-date">Due date</label>
            <input name="due-date" id="due-date" type="date" />
            <button type="submit" class="form-button">Add</button>
        </form>
    </dialog>
`;

class TaskOptions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.innerHTML = this.styles;
        this.shadowRoot!.appendChild(style);

        this.shadowRoot!.appendChild(optionsTemplate.content.cloneNode(true));
    }

    connectedCallback() {
        const $button = this.shadowRoot!.querySelector(
            "button[name=open-options]"
        )!;
        $button.addEventListener("click", this.openModal());
    }

    openModal() {
        return () => {
            const $dialog = this.shadowRoot!.querySelector(
                "#options-dialog"
            )! as HTMLDialogElement;
            $dialog.showModal();
            this.setAttribute("aria-pressed", "true");
        };
    }

    styles = css`
        @import url("./style.css");

        dialog {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        dialog::backdrop {
            background-color: rgba(0, 0, 0, 0.1);
        }

        form {
            display: grid;
            align-items: center;
            background-color: var(--blue-1);
            padding: 1rem;
        }

        input {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
    `;
}

customElements.define("task-options", TaskOptions);
