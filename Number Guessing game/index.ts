import inquirer from "inquirer";
type ansType ={
    userGuess:Number
}
const systemGeneratedNumber = Math.floor(Math.random()*10);

const answers : ansType = await inquirer.prompt([
    {
        type:"number",
        name: "userGuess",
        message: "Guess The Number from 1 to 10."
    }
])
const {userGuess} = answers;
if(userGuess === systemGeneratedNumber){
    console.log(userGuess,"userGuess" , systemGeneratedNumber,'Sys')
    console.log("YEaaaaaah Your Number is Correct  !!!!! \n You Winnnnnn!!!!!!")
}else{"Try Again ! \n Better Luck next time !"}

console.log(systemGeneratedNumber)