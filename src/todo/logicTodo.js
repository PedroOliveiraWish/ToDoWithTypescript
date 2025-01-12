"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewTask = addNewTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.displayTodos = displayTodos;
// I need to declare the array's type here, I used the imported interface
// I am saying that the array will contain objects of type Todo
let todos = [];
// Now, I can push objects of type Todo into the array
// TypeScript will check if the objects are of the correct type
// I make a function to add a new Todo
function addNewTask(task) {
    const newTodo = {
        id: todos.length + 1,
        task: task,
        completed: false
    };
    todos.push(newTodo);
}
// Now, i will create a function to update a task for true completely
function updateTask(id) {
    // I need to itered the array to find the task with the id
    // If i find the task, I will update the completed property to true
    todos = todos.map((todo) => todo.id === id ? Object.assign(Object.assign({}, todo), { completed: true }) : todo);
}
// Now, i will create a function to delete a task
function deleteTask(id) {
    // I can use the filter method to remove the task with the id
    todos = todos.filter((todo) => todo.id !== id);
}
function displayTodos() {
    console.log('Your todos: \n');
    // I wiil the forEach method to display each task
    todos.forEach((todo) => {
        console.log(`${todo.id}. Task: ${todo.task}, Completed: ${todo.completed}`);
    });
}
