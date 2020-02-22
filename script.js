
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
const addTodo = todoText => {
    todoList.push({'todoText': todoText, 'completed': false});
    displayTodos();
};
const changeTodo = (newTodoText, position) => {
    todoList[position].todoText = newTodoText;
    displayTodos();
};
const deleteTodo = position => {
    todoList.splice(position, 1);
    displayTodos();
};
const toggleCompleted = position => {
    let todo = todoList[position];
    todo.completed = !todo.completed;
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