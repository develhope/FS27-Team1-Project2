const tasks = [];

function addTask(callback, task) {
  setTimeout(() => {
    if (typeof task !== "string" || task === "") {
      callback(new Error("Task must be a non-empty string"), null);
    } else {
      tasks.push(task);
      callback(null, "Task added successfully");
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
      callback(new Error("Invalid task index"), null);
    } else {
      tasks.splice(index, 1);
      callback(null, "Task completed successfully");
    }
  }, 2000);
}

function listTask() {
  tasks.forEach((task, index) => console.log(task, index));
}

// async function testingAdd() {
//   await completeTask(checkTask, string);
//   listTask();
// }

async function testingAddPrint(callback, string) {
  try {
    await new Promise((resolve) =>
      callback((error, data) => {
        if (error) {
          checkTask(error);
        } else {
          checkTask(null, data);
        }
        resolve();
      }, string)
    );

    listTask();
  } catch (error) {
    checkTask(error);
  }
}

async function testingCompletedPrint(index, callback) {
  try {
    await new Promise((resolve) =>
      callback(index, (error, data) => {
        if (error) {
          checkTask(error);
        } else {
          checkTask(null, data);
        }
        resolve();
      })
    );

    listTask();
  } catch (error) {
    checkTask(error);
  }
}

async function testing() {
  await testingAddPrint(addTask, "Go to the Barber Shop");
  await testingAddPrint(addTask, "Buying Concert Ticket");
  await testingAddPrint(addTask, "Study");
  await testingAddPrint(addTask, "");
  await testingAddPrint(addTask, 3);
  await testingAddPrint(addTask, "Do the Laundry");

  await testingCompletedPrint(1, completeTask);
  await testingCompletedPrint(3, completeTask);
  await testingCompletedPrint(-1, completeTask);
  await testingCompletedPrint(0, completeTask);
}

testing();
