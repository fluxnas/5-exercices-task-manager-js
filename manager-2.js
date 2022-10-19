const prompt = require("prompt-sync")();


var num = prompt("Welcome to your task manager, \
Press: 1. to see all your tasks \
2. to add a task \
3. to delete a task \
4. to mark a task as done \
5. to Exit the task manager");
let tasks = ["task1", "task2", "task3"];

	if (num === "1") {
		console.log(tasks)
	}

	if (num === "2") {
		console.log(tasks);
		let newTask = prompt("Enter a new task to do :");
		tasks.push(newTask);
		console.log("here is the new tasks list :" + tasks);
	}

	if (num === "3") {
		console.log(tasks);
		var deleteTask = tasks.splice(parseInt(prompt("Which task to delete ?")) + 1);	
		console.log(tasks)

	}

	if (num === "4") {
			
	}

	if (num === "5") {
			
	}

	if (num != 1 && num != 2 && num != 3 && num != 4 && num != 5) {
		console.log("Sorry cette commande n'existe pas")
	}
