const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('.todo-form input');
const toDoList = document.querySelector('#study-todo-list');

function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintTodo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
