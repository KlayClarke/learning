// loop while user hasn't entered quit
// use array to store todo's
// if user enters new, ask them what the todo text is
// if user enters list, iterate todos and print them out
// if user enters delete, slice selection from todo list
// if user enters quit, quit the application completely

const list = [];

let userInput = prompt("What would you like to do?");

while (
  userInput.toLowerCase().trim() !== "quit" &&
  userInput.toLowerCase().trim() !== "q"
) {
  if (userInput.toLowerCase().trim() === "new") {
    const newTodo = prompt("enter a todo");
    console.log(`${newTodo} added to list.`);
    list.push(newTodo);
  } else if (userInput.toLowerCase().trim() === "list") {
    console.log("*****************");
    for (const entry of list) {
      console.log(`${list.indexOf(entry)}: ${entry}`);
    }
    console.log("*****************");
  } else if (userInput.toLowerCase().trim() === "delete") {
    const index = parseInt(prompt("enter the index of todo you want deleted"));
    if (!Number.isNaN(index)) {
      list.splice(index, 1);
      console.log(`TODO removed from list`);
    } else {
      console.log("unknown index. please try again.");
    }
  } else {
    console.log("Unrecognizable input. Please try again!");
  }
  userInput = prompt("What would you like to do?");
}
console.log("You've quit the app. Goodbye, User!");
