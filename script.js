
const clearForm = (e) => {
    e.target.value = '';
};


let todoList = [];

const displayTodos = () => {
    if (todoList.length === 0) {
        console.log('no todos!');
    } else {
        todoList.forEach(todo => {
            console.log(`Todo: ${todo.todoText} Completed? ${todo.completed}`);
        })
    }
};
const addTodo = () => {
    let todoTextInput = document.getElementById('js-add-todo-text');
    todoList.push({'todoText': todoTextInput.value, 'completed': false});
    displayTodos();
    todoTextInput.value = 'Add Todo';
};
const changeTodo = () => {
    let newTodoTextInput = document.getElementById('js-change-todo-text');
    let newTodoPositionInput = document.getElementById('js-change-todo-position');
    todoList[newTodoPositionInput.value].todoText = newTodoTextInput.value;
    newTodoTextInput.value = '';
    newTodoPositionInput.value = '0';
    displayTodos();
};
const deleteTodo = () => {
    let todoDeletePosition = document.getElementById('js-delete-todo-position').value;
    todoList.splice(todoDeletePosition, 1);
    displayTodos();
};
const toggleCompleted = () => {
    let togglePosition = document.getElementById('js-toggle-completed-position').value;
    let todo = todoList[togglePosition];
    todo.completed = !todo.completed;
    // let todo = todoList[position];
    // todo.completed = !todo.completed;
    displayTodos();
};
const toggleAll = () => {
    let  completedTodos = todoList.filter(todo => todo.completed === true);
    console.log(completedTodos);
    if (completedTodos.length === todoList.length) {
        todoList.forEach(todo => {
            todo.completed = false;
        })
    } else {
        todoList.forEach(todo => {
            todo.completed = true;
        })
    }
    displayTodos();
};


const displayTodosBtn = document.getElementById('js-display-todos');
const toggleAllBtn = document.getElementById('js-toggle-all');
const addTodoBtn = document.getElementById('js-add-todo');
const changeTodoBtn = document.getElementById('js-change-todo');
const deleteTodoBtn = document.getElementById('js-delete-todo');
const toggleCompletedBtn = document.getElementById('js-toggle-completed');
const forms = document.getElementsByClassName('form');

displayTodosBtn.addEventListener('click', displayTodos);
toggleAllBtn.addEventListener('click', toggleAll);
addTodoBtn.addEventListener('click', addTodo);
changeTodoBtn.addEventListener('click', changeTodo);
deleteTodoBtn.addEventListener('click', deleteTodo);
toggleCompletedBtn.addEventListener('click', toggleCompleted);

for (let form of forms) {
    form.addEventListener('click', clearForm)
}


