import { Todo } from "./todo.js";

let toDoList = [];

if (localStorage.getItem('todos')) {
   toDoList = JSON.parse(localStorage.getItem('todos'));
   console.log(toDoList);
}

displayTodos(toDoList);

function displayTodos(todos) {
   let total = 0;
   let ul = document.querySelector("ul");
   ul.innerHTML = '';

   todos.forEach((todoItem) => {
      ul.innerHTML += `<li>
          <input type="checkbox" data-id="${todoItem.Id}" ${todoItem.Completed ? 'checked' : ''}>
          <span>${todoItem.Content}</span>
          <button data-id="${todoItem.Id}" class="delete-buttons">X</button>
          </li>`;
      total += 1;
   });

   let toDoCheckboxes = document.querySelectorAll('input[type="checkbox"]');

   toDoCheckboxes.forEach((toDoCheckbox) => {
      toDoCheckbox.addEventListener("click", (e) => {
         let selectedId = e.target.dataset.id;
         let selectedTodo = toDoList.find(todo => todo.Id === parseInt(selectedId));
         selectedTodo.Completed = !selectedTodo.Completed;

         localStorage.setItem("todos", JSON.stringify(toDoList));
      });
   });

   let toDoDeleteButtons = document.querySelectorAll('.delete-buttons');

   toDoDeleteButtons.forEach((toDoDeleteButton) => {
      toDoDeleteButton.addEventListener("click", (e) => {
         let selectedId = e.target.dataset.id;
         let selectedToDoIndex = toDoList.findIndex(todo => todo.Id === parseInt(selectedId));

         toDoList.splice(selectedToDoIndex, 1);

         localStorage.setItem("todos", JSON.stringify(toDoList));

         total -= 1;

         displayTodos(toDoList);
      });
   });

   document.querySelector("#count").innerHTML = total + ' tasks left.';
}


document.querySelector('input[type="button"]').addEventListener("click", (e) => {
   let content = document.querySelector("#content");
   let todo = new Todo(content.value);
   toDoList.push(todo);

   localStorage.setItem('todos', JSON.stringify(toDoList));

   content.value = '';

   displayTodos(toDoList);
});

document.querySelector('#all').addEventListener("click", (e) => {
   displayTodos(toDoList);
});

document.querySelector('#active-filter').addEventListener("click", (e) => {
   displayTodos(toDoList.filter(todo => todo.Completed === false));
});

document.querySelector('#completed-filter').addEventListener("click", (e) => {
   displayTodos(toDoList.filter(todo => todo.Completed === true));
});