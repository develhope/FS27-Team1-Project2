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

function completeTask(index, callback) {
  setTimeout(() => {
    if (index < 0 || index >= tasks.length) {
      callback(new Error("Invalid task index"), null)
    } else {
      tasks.splice(index, 1)
      callback(null, "Task completed successfully")
    }
  }, 2000)
}

function listTask(){
  (tasks.forEach((task,index) => console.log(task,index)))
}

