// Day 4
//  Question 10

// Author: Shehroz Hanif
// Date: March 24, 2024
// Description: This program calculates the average of three numbers and prints the result.

function calculateAverage(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3; // Calculate the average of three numbers
}

// Example usage:
let average = calculateAverage(10, 20, 30);
console.log("The average is:", average);

// program 2

// Author: Shehroz Hanif
// Date: March 24, 2024
// Description: This program checks if a given number is even or odd and prints the result.

function checkEvenOrOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even"; // Return "Even" if the number is even
    } else {
        return "Odd"; // Return "Odd" if the number is odd
    }
}

// Example usage:
let number = 5;
console.log("Number", number, "is:", checkEvenOrOdd(number));

// Question 11

 let friendList:string[] = ["nabil","akbar","huzaifa","yazdani"]
 
// // Store a friend names in an Array[]

for (let i =0;  i < friendList.length ; i++){
    console.log(friendList[i]);
}
// // we use iteration so array name display line by line


// Question No 12

// what we do in the code to add add a variable in iteration let me show you

let name1:string[] = ["nabil","akbar","huzaifa","yazdani"]
for (let i =0;  i < name1.length ; i++){
    let greeting = "Would you like to learn Some TypeScript Today? "
    
//     // see this is th variable greeting we add in this 
    
    console.log(`Hi ${name1[i]}  ${greeting}`);
}
// So what we did in this program we add we are not just calling friend name line by line but we also give greetings to them


