const tasks = [];

function addTask(callback, task) {
  setTimeout(() => {
    if (typeof task !== "string" || task === null) {
      callback(new Error("Task must be a non-empty string"), null);
    } else {
      tasks.push(task);
      callback(null, "Task added successfully");
      console.log(tasks);
    }
  }, 2000);
}

function checkTask(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

addTask(checkTask, "ciao");
taskManagementSystem.js