#! /usr/bin/evn/ node

import inquirer from "inquirer";

const random = Math.floor(Math.random()*10 + 1)

const answer = await inquirer.prompt([
    {message : "please guess a number between 1 to 10 ", name : "yourguessnumber" , type : "number"}
])
console.log(answer)
if(answer.yourguessnumber === random){
    console.log("congtratulation you win the game")
}else{
    console.log("try again")
}
