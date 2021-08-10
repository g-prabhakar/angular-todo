import { TodoItem } from "./todoItem";

export class TodoList {
    constructor(public user: string, private todoItems: TodoItem[] = []) {
        //no statement as of now
    }

    get items(): readonly TodoItem[] {
        return this.todoItems;
    }

    addItem(task: string) {
        this.todoItems.push(new TodoItem(task))
    }
}