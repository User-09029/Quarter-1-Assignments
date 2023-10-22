import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        type: "number", 
        name: "num1",
        message: "Enter the First Number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter the Second Number",
    },
    {
        type: "list",
        name: "operator",
        message: "Select the Operation to be performed",
        choices: ["Add","Subtract","Multiply","Divide"]
    }
]);
let result: number ;
switch(answer.operator){
    case "Add":
        result= answer.num1 + answer.num2;
        console.log("The answer for Addition is: "+ result);
        break;
    case "Subtract":
        result= answer.num1 - answer.num2;
        console.log("The answer for Subtraction is: "+ result);
        break;

    case "Multiply":
        result= answer.num1 * answer.num2;
        console.log("The answer for Multiply is: "+ result);
        break;

    case "Divide":
        result= answer.num1 / answer.num2;
        console.log("The answer for Divide is: "+ result);
    break;
    }
