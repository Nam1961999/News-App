'use strict'

class User {
    constructor(firstName, lastName, username, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.todoList = [];
    };

    addTodo(title) {
        let task = new TodoTask(title);
        this.todoList.push(task);
    }

    checkTodo(index) {
        this.todoList[index].check();
    }

    removeTodo(index) {
        this.todoList.splice(index, 1);
    }

}