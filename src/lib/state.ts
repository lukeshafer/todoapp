import { createEffect, createResource } from "solid-js";
import { createStore, produce, SetStoreFunction } from "solid-js/store";
import { taskListSchema } from "./api-schemas";

export interface Todo {
    text: string;
    completed: boolean;
    id: string;
    name: string;
    /** Deletes this todo item */
    delete: () => Promise<void>;
}

export function getTodoListFor(userName: string) {
    const [todoListValues, setTodoList] = createStore<Todo[]>([]);

    const [todoListFetchedData, { refetch: refetchTodos }] = createResource(
        () => fetchTodoList(userName)
    );

    createEffect(() => {
        const todoListDataTransformed: Todo[] =
            todoListFetchedData()?.map((todo) => ({
                text: todo.title,
                completed: todo.completed,
                name: userName,
                id: todo.id,
                delete: () =>
                    removeTodoItem(todo.id, setTodoList, refetchTodos),
            })) ?? [];
        setTodoList(todoListDataTransformed);
    });

    type TodoList = typeof todoListStore;
    const todoListStore = {
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
            refetchTodos();
        },
        /** Removes an item from the list by ID. */
        remove(id: string) {
            removeTodoItem(id, setTodoList, refetchTodos);
        },
        updateId(oldId: Todo["id"], newId: Todo["id"]) {
            setTodoList((todo) => todo.id === oldId, "id", newId);
        },
    };

    return todoListStore as TodoList;
}

async function fetchTodoList(name: string) {
    const data = await fetch(`/api/tasks?name=${name}`)
        .then(async (res) => JSON.parse(await res.text()))
        .catch((err) => {
            console.error(err);
            throw new Error("Couldn't parse tasks");
        });

    const parsed = taskListSchema.safeParse(data);

    if (!parsed.success) {
        console.error(parsed.error.issues);
        throw new Error("Couldn't parse tasks");
    }

    return parsed.data;
}

async function removeTodoItem(
    id: string,
    setter: SetStoreFunction<Todo[]>,
    refetch: () => any
) {
    setter(
        produce((list) => {
            const index = list.findIndex((todo) => todo.id === id);
            list.splice(index, 1);
        })
    );
    const response = await fetch("/api/deleteTask", {
        method: "post",
        body: new URLSearchParams({ id }),
    });
    if (!response.ok) {
        console.error("delete failed");
        throw new Error();
    }
    refetch();
}

//async function toggleCompleted(id: string) {}
