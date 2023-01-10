import { createStore, produce } from "solid-js/store";

interface Todo {
    text: string;
    completed: boolean;
    id: string | symbol;
    name: string;
}

const [todoListValues, setTodoList] = createStore<Todo[]>([]);

type TodoList = typeof todoListStore;
export const todoListStore = {
    values: todoListValues,
    /** Toggles the completed status on a Todo item **/
    toggleCompleted(id: string) {
        setTodoList(
            (todo) => todo.id === id,
            "completed",
            (completed) => !completed
        );
    },
    /**
     * Adds item to end of Todo List
     * @returns {number} Index of new item in the array
     */
    push(todo: Todo) {
        setTodoList([...todoListValues, todo]);
        //const index = todoListValues.length - 1;
    },
    /** Removes an item from the list by ID. */
    remove(id: string | symbol) {
        setTodoList(
            produce((list) => {
                const index = list.findIndex((todo) => todo.id === id);
                list.splice(index, 1);
            })
        );
    },
    updateId(oldId: Todo["id"], newId: Todo["id"]) {
        setTodoList((todo) => todo.id === oldId, "id", newId);
    },
};
