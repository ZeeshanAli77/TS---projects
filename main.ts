#!  /usr/bin/env node 



import inquirer from "inquirer";

const answers : {numberOne : number,numberTwo : number, operator :string} = await inquirer.prompt([

    {
        type : "number",
        name :"numberOne",
        message :" enter your first number",
    },
    {
        type : "number",
        name : "numberTwo",
        message : " enter your second number",
    },
    {
        type : "list",
        name : "operator",
        choices : ["+","-","*","/"],
        message :"enter the operation"
            
        },
    
] ) ;

const {numberOne,numberTwo,operator} = answers;

if ( numberOne && numberTwo && operator) {
   let  result:number = 0;
   if (operator === "+") {
    result = numberOne + numberTwo }
      if (operator === "-") {
        result = numberOne- numberTwo;}
      if (operator === "*") {
            result = numberOne * numberTwo};
            if (operator === "/") {
                result = numberOne / numberTwo }
      

      console.log (`your result is ${result}` )
 }

        
    

   



