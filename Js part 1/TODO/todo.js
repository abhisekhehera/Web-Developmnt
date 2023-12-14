let todo = [];

let request = prompt("Enter your request");

while (true) {
    if (request == "quit") {
        console.log("You quit the app");
        break;
    }
    if (request == "list") {
        console.log("______________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("______________");
    }
    else if (request == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } else if (request == "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");

    } else {
        console.log("Enter a valid request");
    }
    request = prompt("Please enter your request");
}

