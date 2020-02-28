
const clearForm = (e) => {
    e.target.value = '';
};


let todoList = [];

const displayTodos = () => {
    todosUl.innerHTML = ' ';
    todoList.forEach((todo, position) => {
        const todosLi = document.createElement('li');
        todosUl.appendChild(todosLi);
        todosUl.appendChild(addDeleteButton());
        todosLi.id = position;
        todo.completed ? todosLi.textContent = `${todo.todoText} (x)` : todosLi.textContent = `${todo.todoText} ( )`
    }, this)
};
const addDeleteButton = () => {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('delete-button');
    return deleteButton;
}
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
const deleteTodo = (position) => {
    todoList.splice(position, 1);
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

const toggleAllBtn = document.getElementById('js-toggle-all');
const addTodoBtn = document.getElementById('js-add-todo');
const changeTodoBtn = document.getElementById('js-change-todo');
const deleteTodoBtn = document.getElementById('js-delete-todo');
const toggleCompletedBtn = document.getElementById('js-toggle-completed');
const forms = document.getElementsByClassName('form');
const todosUl = document.getElementById('js-todos-ul');

toggleAllBtn.addEventListener('click', toggleAll);
addTodoBtn.addEventListener('click', addTodo);
changeTodoBtn.addEventListener('click', changeTodo);
deleteTodoBtn.addEventListener('click', deleteTodo);
toggleCompletedBtn.addEventListener('click', toggleCompleted);
todosUl.addEventListener(('click'), function(e) {
//get element clicked on
    let elementClicked = event.target;

   if (elementClicked.classList.contains('delete-button')) {
       deleteTodo(parseInt(elementClicked.parentNode.id));
   }

    //check if element is delete button
});

for (let form of forms) {
    form.addEventListener('click', clearForm)
}


