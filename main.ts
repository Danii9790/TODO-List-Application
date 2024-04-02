#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
let todolist=[];
let condition =true
console.log(chalk.redBright.bold("\n\tWelcome tO Todo_list Application\n"));
while(condition){
let addTodos = await inquirer.prompt([
{
name:"task",
type:"input",
message:"Enter your new Todos"
}
]);
todolist.push(addTodos.task)
console.log(`${addTodos.task} Your Todos list add sucessfully.`);
let addMoreTodos =await inquirer.prompt([{
    name:"addMore",
    type:"confirm",
    message:"Do you want to add more Todos",
    default:"false"
}
]);
condition = addMoreTodos.addMore;
}
console.log("Your Updated Todos list: " , todolist);

