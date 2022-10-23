import { fetchJSON } from "./apiToDoList.js";
import { createElement } from "./dom.js";
import { TodoList } from "./ToDoListClass.js";

try {
    //const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todosInStorage = localStorage.getItem("todos")?.toString()
    let todos = []
    if (todosInStorage) {
        todos = JSON.parse(todosInStorage)
        .sort( (a,b) => b.id - a.id)
    }
    const list = new TodoList(todos)
    const todoList = document.querySelector('#todolist')
    list.appendTo(todoList)

} catch (error) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = "Impossible de charger les données"
    document.body.prepend(alertElement)
    console.error(error)
}