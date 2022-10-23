import { cloneTemplate, createElement } from "./dom.js"
/**
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */


export class TodoList {

    /**@type {Todo[]} */
    #todos = []

    /**@type {HTMLUListElement} */
    #listElement = []

    /**
     * @param {Todo[]} todos 
     */
    constructor(todos) {
        this.#todos = todos
    }

    /**
     * @param {HTMLElement} element 
     */
    appendTo(element){
        element.append(
            cloneTemplate('todolist-layout')
        )
        this.#listElement = element.querySelector('.list-group')
        for (let todo of this.#todos){
            const tache = new TodoListItem(todo)
            this.#listElement.append(tache.element)
        }
        element.querySelector('form').addEventListener('submit', e => this.#onSubmit(e))

        element.querySelectorAll('.btn-group button')
        .forEach(button => {
            button.addEventListener('click', e => this.#toggleFilter(e))
        })

        this.#listElement.addEventListener('custom:delete',({detail : todo}) => {
            console.log(todo);
            this.#todos = this.#todos.filter( tache => tache !== todo)
            console.log(this.#todos);
            this.#onUpdate()

        })
        
        this.#listElement.addEventListener('custom:toggle',({detail : todo}) => {
            todo.completed = !todo.completed
            console.log(this.#todos);
            this.#onUpdate()

        })
    }

    /**
     * @param {SubmitEvent} e 
     */
    #onSubmit(e){
        e.preventDefault()
        const form = e.currentTarget
        const title = new FormData(form)
        .get("title")
        .toString()
        .trim()
        if(title === ''){
            return
        }
        const todo = {
            id : Date.now(),
            title,
            completed: false
        }
        const item = new TodoListItem(todo)

        this.#listElement.prepend(item.element)
        this.#todos.push(todo)
        this.#onUpdate()
        form.reset()
    }

    #onUpdate() {
        localStorage.setItem("todos", JSON.stringify(this.#todos))
    }

    /**
     * @param {PointerEvent} e 
     */
    #toggleFilter(e){
        e.preventDefault()
        const filter = e.currentTarget.getAttribute('data-filter')
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active')
        e.currentTarget.classList.add('active')
        if(filter === 'todo'){
            this.#listElement.classList.add('hide-completed')
            this.#listElement.classList.remove('hide-todo')
        }else if (filter === 'done'){
            this.#listElement.classList.add('hide-todo')
            this.#listElement.classList.remove('hide-completed')
        } else {
            this.#listElement.classList.remove('hide-completed')
            this.#listElement.classList.remove('hide-todo')

        }

    }
}

class TodoListItem{

    #element
    #todo

    /** @type {Todo} */
    constructor(todo){

        this.#todo = todo
        const idTodo = `todo-${todo.id}`
        const li = cloneTemplate('todolist-item').firstElementChild

        this.#element = li
        const checkbox = li.querySelector('input')
        checkbox.setAttribute('id', idTodo)
        if (todo.completed){
            checkbox.setAttribute('checked', '')
        }

        const label = li.querySelector('label')
        label.setAttribute('for', idTodo)
        label.innerText = todo.title
        const button = li.querySelector('button')
        this.toggle(checkbox)

        button.addEventListener('click', e => this.remove(e))
        checkbox.addEventListener('change', e => this.toggle(e.currentTarget))

        this.#element.addEventListener('custom:delete', e => {
            //console.log(e)
            //e.preventDefault()
        })

    }

    /**
     * @return {HTMLElement} 
     */
    get element(){
        return this.#element
    }

    /**
     * @param {PointerEvent} e 
     */
    remove(e){
        e.preventDefault();
        const event = new CustomEvent('custom:delete', {
            detail: this.#todo,
            bubbles: true,
            cancelable : true
        })
        this.#element.dispatchEvent(event)
        if (event.defaultPrevented){
            return
        }
        this.#element.remove()
    }

    /**
     * change l'état (à fait / fait) de la tâche
     * 
     * @param {HTMLInputElement} checkbox 
     */
    toggle(checkbox){
        if(checkbox.checked){
            this.#element.classList.add('is-completed')
        }else {
            this.#element.classList.remove('is-completed')
        }
        const event = new CustomEvent('custom:toggle', {
            detail: this.#todo,
            bubbles: true
            //cancelable : true
        })
        this.#element.dispatchEvent(event)
    }
    
    
}