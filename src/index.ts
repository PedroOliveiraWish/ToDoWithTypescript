import { addNewTask, deleteTask, updateTask, displayTodos } from "./todo/logicTodo";

addNewTask("Learn React");
addNewTask("Learn Redux");
addNewTask("Learn Node");

displayTodos()

updateTask(1)
console.log('\nafter update')
displayTodos()

deleteTask(2)
console.log('\nafter delete')
displayTodos()