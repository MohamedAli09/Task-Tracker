const fs = require('fs');
const path = './taskTracker.json';

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify([]));
}

const tasks = JSON.parse(fs.readFileSync(path, 'utf8'));

function addTask(args) {
  const newTask = {
    id: tasks.length + 1,
    description: args[0] || 'No title',
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

function listTasks(args) {
  const status = args[0];
  let filteredTasks = tasks;
  if (status) {
    filteredTasks = tasks.filter((task) => task.status === status);
  }
  if (filteredTasks.length === 0) {
    console.log('No tasks found.');
  } else {
    filteredTasks.forEach((task) => {
      console.log(`Task ID: ${task.id}`);
      console.log(`Title: ${task.description}`);
      console.log(`Status: ${task.status}`);
      console.log('-------------------');
    });
  }
}

function markTaskStatus(args) {
  const id = Number(args[0]);
  const status = args[1];
  const validStatuses = ['todo', 'in-progress', 'done'];

  if (tasks.length < id || id < 1) {
    console.log('Task not found');
    return;
  }
  if (!validStatuses.includes(status)) {
    console.log('Invalid status');
    return;
  }

  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, status, updatedAt: new Date().toISOString() };
    }
    return task;
  });

  fs.writeFileSync(path, JSON.stringify(updatedTasks, null, 2));
  console.log('Task status changed');
}
function updateTask(args) {
  const id = Number(args[0]);
  const description = args[1];

  if (tasks.length < id || id < 1) {
    console.log('Task not found');
    return;
  }

  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, description, updatedAt: new Date().toISOString() };
    }
    return task;
  });

  fs.writeFileSync(path, JSON.stringify(updatedTasks, null, 2));
  console.log('Task updated successfully');
}

function deleteTask(args) {
  const id = Number(args[0]);

  if (tasks.length < id || id < 1) {
    console.log('Task not found');
    return;
  }

  const updatedTasks = tasks.filter((task) => task.id !== id);

  fs.writeFileSync(path, JSON.stringify(updatedTasks, null, 2));
  console.log('Task deleted successfully');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const [, , command, ...args] = process.argv;

switch (command) {
  case 'add':
    addTask(args);
    break;
  case 'list':
    listTasks(args);
    break;
  case 'mark':
    markTaskStatus(args);
    break;
  case 'update':
    updateTask(args);
    break;

  case 'delete':
    deleteTask(args);
    break;
  default:
    console.log('Unknown command');
}

rl.close();
