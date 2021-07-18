const countTodo = document.getElementById('count-todo');
const inputTodo = document.getElementById('todo-text');
const listTodo = document.getElementById('list-todo');
const btnAddTodo = document.getElementById('add-todo');
const todoList = [];

btnAddTodo.addEventListener('click', () => {
    const inputTodo = document.getElementById('todo-text');
    const countTodo = document.getElementById('count-todo');
    todoList.push(inputTodo.value);
    addTodoList()
    // Delete input todo value
    inputTodo.value = '';
    countTodo.innerText = todoList.length;
})

function addTodoList() {
    renderHTML()
}

function deleteTodoList(key) {
    todoList.splice(key, 1);
    renderHTML()
    const countTodo = document.getElementById('count-todo');
    countTodo.innerText = todoList.length;
}

function renderHTML() {
    const listTodo = document.getElementById('list--todo');
    let html = '';

    todoList.forEach((todo, key) => {

        html += `<div class="col-8 mt-3">${todo}</div>`
        html += '<div class="col-4 mt-3">';
            html += `<button type="button" class="btn btn-danger" onclick="deleteTodoList(${key})">Eliminar</button>`;
        html += '</div>';

    })

    listTodo.innerHTML = html;
}
