export interface TodoState {
    id: string | number;
    name: string;
    completed: boolean;
}

export interface TodoSliceState{
    status: "idle" | "succeed" | "loading" | "error";
    todos: TodoState[];
    isChange: boolean;
    nextId: number | 0
}