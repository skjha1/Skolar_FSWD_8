```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Enhanced To-Do App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <div class="input-section">
      <input type="text" id="todo-input" placeholder="Add a new task...">
      <button id="add-btn">Add</button>
    </div>

    <div class="filters">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="active">Active</button>
      <button class="filter-btn" data-filter="completed">Completed</button>
    </div>

    <ul id="todo-list"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>


```


```css
/* styles.css */

* {
    box-sizing: border-box;
  }
  
  body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 600px;
    margin: 50px auto;
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  .input-section {
    display: flex;
    margin-bottom: 20px;
  }
  
  #todo-input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
  }
  
  #add-btn {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #5cb85c;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 4px;
  }
  
  #add-btn:hover {
    background-color: #4cae4c;
  }
  
  .filters {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .filter-btn {
    padding: 8px 16px;
    margin: 0 5px;
    border: none;
    background-color: #e7e7e7;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .filter-btn.active,
  .filter-btn:hover {
    background-color: #5cb85c;
    color: #fff;
  }
  
  #todo-list {
    list-style-type: none;
    padding: 0;
  }
  
  .todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: #fafafa;
    cursor: grab;
  }
  
  .todo-item.dragging {
    opacity: 0.5;
  }
  
  .todo-item.completed .task {
    text-decoration: line-through;
    color: #999;
  }
  
  .task {
    flex: 1;
    cursor: pointer;
  }
  
  .task.editing {
    border: 1px solid #ccc;
    padding: 5px;
  }
  
  .delete-btn {
    background-color: #d9534f;
    border: none;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 10px;
  }
  
  .delete-btn:hover {
    background-color: #c9302c;
  }
  
  @media (max-width: 600px) {
    .input-section {
      flex-direction: column;
    }
  
    #add-btn {
      margin-left: 0;
      margin-top: 10px;
      width: 100%;
    }
  
    .filters {
      flex-direction: column;
    }
  
    .filter-btn {
      margin: 5px 0;
      width: 100%;
    }
  }
  

```



```js
document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const filterButtons = document.querySelectorAll('.filter-btn');
  
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let currentFilter = 'all';
  
    // Variables for Drag and Drop
    let draggedItem = null;
  
    // Function to render the to-do list based on the current filter
    function renderTodos() {
      todoList.innerHTML = '';
  
      const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
      });
  
      filteredTodos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.setAttribute('draggable', 'true');
        li.dataset.index = index;
  
        if (todo.completed) {
          li.classList.add('completed');
        }
  
        // Task Span
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task';
        taskSpan.textContent = todo.text;
        taskSpan.addEventListener('click', () => toggleComplete(index));
        taskSpan.addEventListener('dblclick', () => editTodo(index, taskSpan));
  
        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(index));
  
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
  
        // Drag and Drop Event Listeners
        li.addEventListener('dragstart', handleDragStart);
        li.addEventListener('dragover', handleDragOver);
        li.addEventListener('drop', handleDrop);
        li.addEventListener('dragend', handleDragEnd);
      });
    }
  
    // Function to add a new to-do
    function addTodo() {
      const text = todoInput.value.trim();
      if (text !== '') {
        todos.push({ text, completed: false });
        todoInput.value = '';
        updateLocalStorage();
        renderTodos();
      } else
      {
        console.log("NA");
      }
    }
  
    // Function to delete a to-do
    function deleteTodo(index) {
      todos.splice(index, 1);
      updateLocalStorage();
      renderTodos();
    }
  
    // Function to toggle completion status
    function toggleComplete(index) {
      todos[index].completed = !todos[index].completed;
      updateLocalStorage();
      renderTodos();
    }
  
    // Function to edit a to-do
    function editTodo(index, taskSpan) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = todos[index].text;
      input.className = 'edit-input';
      taskSpan.replaceWith(input);
      input.focus();
      taskSpan.classList.add('editing');
  
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          saveEdit(index, input);
        }
      });
  
      input.addEventListener('blur', () => {
        saveEdit(index, input);
      });
    }
  
    // Function to save the edited to-do
    function saveEdit(index, input) {
      const newText = input.value.trim();
      if (newText !== '') {
        todos[index].text = newText;
        updateLocalStorage();
        renderTodos();
      } else {
        // If empty, delete the to-do
        deleteTodo(index);
      }
    }
  
    // Function to filter tasks
    function setFilter(filter) {
      currentFilter = filter;
      filterButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelector(`.filter-btn[data-filter="${filter}"]`).classList.add('active');
      renderTodos();
    }
  
    // Function to update localStorage
    function updateLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  
    // Drag and Drop Handlers
    function handleDragStart(e) {
      draggedItem = this;
      this.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const target = e.currentTarget;
      if (target && target !== draggedItem) {
        const bounding = target.getBoundingClientRect();
        const offset = bounding.y + (bounding.height / 2);
        if (e.clientY - bounding.y > bounding.height / 2) {
          todoList.insertBefore(draggedItem, target.nextSibling);
        } else {
          todoList.insertBefore(draggedItem, target);
        }
      }
    }
  
    function handleDrop(e) {
      e.stopPropagation();
      if (draggedItem !== this) {
        const draggedIndex = parseInt(draggedItem.dataset.index);
        const targetIndex = parseInt(this.dataset.index);
        // Swap the todos
        const temp = todos[draggedIndex];
        todos.splice(draggedIndex, 1);
        todos.splice(targetIndex, 0, temp);
        updateLocalStorage();
        renderTodos();
      }
      return false;
    }
  
    function handleDragEnd() {
      this.classList.remove('dragging');
      draggedItem = null;
    }
  
    // Event Listeners
    addBtn.addEventListener('click', addTodo);
  
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        setFilter(btn.dataset.filter);
      });
    });
  
    // Initial render
    renderTodos();
  });
  


```
