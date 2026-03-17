// ===========================
// DOM Elements
// ===========================
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const emptyState = document.getElementById('empty-state');
const filterButtons = document.querySelectorAll('.btn-filter');
const validationMsg = document.getElementById('validation-msg');

// ===========================
// State
// ===========================
let tasks = [];           // Array of task objects
let currentFilter = 'all'; // 'all' | 'active' | 'completed'

// ===========================
// localStorage Helpers
// ===========================

// Load tasks from localStorage
function loadTasks() {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    tasks = JSON.parse(saved);
  }
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ===========================
// Render the Task List
// ===========================
function renderTasks() {
  // Clear the list
  taskList.innerHTML = '';

  // Filter tasks based on current filter
  const filtered = tasks.filter(function (task) {
    if (currentFilter === 'active') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true; // 'all'
  });

  // Show or hide the empty state
  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }

  // Update task count
  const activeCount = tasks.filter(function (t) { return !t.completed; }).length;
  taskCount.textContent = activeCount + ' task' + (activeCount !== 1 ? 's' : '') + ' remaining';

  // Create a list item for each filtered task
  filtered.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.completed ? ' completed' : '');
    li.setAttribute('data-id', task.id);

    // Checkbox button
    const checkbox = document.createElement('button');
    checkbox.className = 'task-checkbox';
    checkbox.title = task.completed ? 'Mark as active' : 'Mark as completed';
    checkbox.addEventListener('click', function () {
      toggleTask(task.id);
    });

    // Task text
    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = '✕';
    deleteBtn.title = 'Delete task';
    deleteBtn.addEventListener('click', function () {
      deleteTask(task.id);
    });

    // Put it all together
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// ===========================
// Add a New Task
// ===========================
function addTask(text) {
  const task = {
    id: Date.now(),        // unique id based on timestamp
    text: text,
    completed: false
  };
  tasks.push(task);
  saveTasks();
  renderTasks();
}

// ===========================
// Toggle Task Completed
// ===========================
function toggleTask(id) {
  tasks = tasks.map(function (task) {
    if (task.id === id) {
      return { id: task.id, text: task.text, completed: !task.completed };
    }
    return task;
  });
  saveTasks();
  renderTasks();
}

// ===========================
// Delete a Task
// ===========================
function deleteTask(id) {
  tasks = tasks.filter(function (task) {
    return task.id !== id;
  });
  saveTasks();
  renderTasks();
}

// ===========================
// Set the Active Filter
// ===========================
function setFilter(filter) {
  currentFilter = filter;

  // Update the active class on filter buttons
  filterButtons.forEach(function (btn) {
    if (btn.getAttribute('data-filter') === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderTasks();
}


