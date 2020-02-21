

let todoList = [];

const displayTodos = () => {
    console.log(todoList);
};

const addTodo = todoText => {
    todoList.push({'todoText': todoText, 'completed': false});
    displayTodos();
};
//way to change a todo
const changeTodo = (newTodoText, position) => {
    todoList[position].todoText = newTodoText;
    displayTodos();
};

//way to delete a todo
const deleteTodo = position => {
    todoList.splice(position, 1);
    displayTodos();
};

const toggleCompleted = position => {
    let todo = todoList[position];
    todo.completed = !todo.completed;
    displayTodos();
};