// Day 5
//  Question No 13

let transports :string[]= ["Honda Civic", "Tesla Car", "Ferrari Car","Rolls Royce"]
for(let i =0; i<transports.length ; i++  ){
    let pre:string ="I would like to own a" 
    console.log(`${pre} ${transports[i]}`)
}
// What we did in this program just used iteration to print in a Sequence

// Question No 14

let guestList:String[] = ["Imran Khan Sahab","Tariq Jameel Sahab","Sir Zia"]
for(let i = 0; i<guestList.length; i++){
    let invitation:string ="I would like you to invite on Dinner"
    console.log(guestList[i] + " "+ invitation);
}

// What we did in this code/Program just follow the basic of iteration



// Question 15: 

// Changing Guest List
// One guest can't make it, so replacing them with a new guest
let unavailableGuest: string = "Tariq Jameel Sahab";
let newGuest: string = "Shehroz Hanif";

// Updating the list of guests
let index = guestList.indexOf(unavailableGuest);
if (index !== -1) {
    guestList[index] = newGuest;
}

// Printing updated invitation messages
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to dinner. We've invited ${newGuest} instead.\n`);
guestList.forEach(guest => {
    console.log(`Dear ${guest},\nI would like to invite you to dinner at my place. Your presence would make the evening delightful.
    \nPlease let me know if you can make it.\nBest regards,\n[Your Name]`);
});