export class Modal {
    title;
    user;
    items;

    constructor(){
        this.title = 'todoApp';
        this.user = "Umut Polat";
        this.items = [
            new TodoItem("Spor", false),
            new TodoItem("Kahvaltı", true),
            new TodoItem("Gezme", false),
            new TodoItem("Yuzme", true),
        ];
    }
}

export class TodoItem {
    description: string;
    action: boolean;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}