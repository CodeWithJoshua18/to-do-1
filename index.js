// Task class
class Task {
  constructor(title, description, priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}

// Store tasks
const tasks = [];

// Get DOM elements
const form = document.getElementById("add-todo-form");
const taskList = document.getElementById("todo-list");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent the page from refreshing

  const title = document.getElementById("todo-title").value;
  const description = document.getElementById("todo-description").value;
  const priority = document.getElementById("todo-priority").value;

//   create a new task
  const newTask = new Task(title, description, priority);

//   add new task to the tasks array
  tasks.push(newTask);

  displayTasks();
  form.reset(); // clear form after submit
});

// Display tasks
function displayTasks() {
  taskList.innerHTML = ""; // clear previous tasks

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");

    taskDiv.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.description}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
    `;

    taskList.appendChild(taskDiv);
  });
}
