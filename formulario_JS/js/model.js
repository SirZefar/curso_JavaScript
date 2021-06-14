export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [{
                id: 0,
                title: 'Ejemplo  de Tarea',
                description: 'Aquí va una descripción',
                completed: false
            }]
            this.currentId = 1
        } else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }

    }

    setView(view) {
        this.view = view;
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    getTodos() {
        return this.todos;
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {
        console.log(id);
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }


    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title: title,
            description: description,
            completed: false,
        }

        this.todos.push(todo);
        console.log(this.todos);

        return {
            ...todo
        };
    }

    removeTodo(id) {
        const index = this.findTodo(id);
        /*console.log(this.todos[index]);*/
        this.todos.splice(index, 1);
    }
}