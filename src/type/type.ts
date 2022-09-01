export interface TodoItemInterface {
    text:string
    id:number;
    isComplete?:boolean
}

export interface TodoListInterface  {
    todos: TodoItemInterface
}