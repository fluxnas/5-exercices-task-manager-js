const prompt = require("prompt-sync")();



	var num = prompt("Welcome to your task manager, \
	Press: 1. to see all your tasks \
	2. to add a task \
	3. to delete a task \
	4. to mark a task as done \
	5. to Exit the task manager");
	var tab = [];
	var nbrTask = 0;
		
		if (num === "1") {
			if (nbrTask = 0) {
				const noTask = prompt("No task. Do you want to add a task ? tape Y or N");
				if (noTask === "Y") {
					const tasks = prompt("What is your task ?");
					tab.push(tasks)
					console.log(tasks)
					nbrTask++
				}
				else {
					console.log ("ok bye")
				}
			}
			else { console.log(tab) }
		}

		if (num === "2") {
			if (nbrTask = 0) {
				const tasks = prompt("What is your task ?");
				tab.push(tasks)
				console.log(nbrTask)
				nbrTask++
			}
			else {
				console.log(nbrTask)
			}
		}
		if (num === "3") {
			
		}
		if (num === "4") {
			
		}
		if (num === "5") {
			
		}
		else {
			console.log("Sorry cette commande n'existe pas")
		}



// else if (num == 2) {
// 	let newTask = prompt("Enter a new task to do :");
// 	var lenght = tabTasks.push(newTask);
// 	console.log(tabTasks);p
// }
// else if (num == 3) {
// 	console.log(tabTasks);
// 	let deleteTask = prompt("which task do you wanna delete ?");
// 		// assigné un nombre a une valeur de tableau
// 		// if ce nombre delete cette task
// }
// else if (num == 4) {
// 	console.log(tabTasks);
// 	let doneTask = prompt("which task is done ?");
// 	// if nombre marque comme realisée
// }
// else (num == 5) {
// }





