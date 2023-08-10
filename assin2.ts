// assinment 2
// question not 1
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// f = celcius / 5 * 9 + 32
// c =  f - 32 / 9 * 5
var celius:number = 20;
var farhenhight:number = 68;
var cliusToFar:number = celius / 5 * 9 + 32
var farToCl:number = (farhenhight - 32) / 9 * 5;
console.log(cliusToFar)
console.log(farToCl)
// Write a program that calculates the percentage
var amount:number = 10000;
var percentage:number = 25;
var result:number = (amount * percentage) / 100
console.log(result)
//Write a program that converts given number of days in to weeks and days such as 17
//days = 2 weeks and 3 days.
var daysOfWeek = 17;
var a:number  =Math.floor( daysOfWeek / 7);
var b:number =daysOfWeek % 7;
console.log(`${a} week and ${b} days`)
// Write a program that calculates the discount for a product based on its price.
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price:number = 200;
var discount:number = (price*10) / 100;
var discount2:number = (price*5) / 100;
if (price >= 100){
    console.log(price - discount)
}
else {
    console.log(price - discount2)
}
// Create a program that determines the category of a user-provided age. If the age is between
// 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age:number = 19;
if (age <= 12){
    console.log("child")   
}
else if ( age <= 19){
    console.log("teenager")
}
else {
    console.log("adult")
}
//Write a program that takes temperature and check it. If it is cold then suggest the
// user to wear warm clothes and so on according to the weather
var temperature:number = 47;
if (temperature <=15){
    console.log("wear warm clothes")
}
else if ( temperature <=30){
    console.log("normal")
}
else if (temperature >=30 && temperature <= 45){
    console.log(" hot")
}
else {
    console.log("to much hot")
}
// Write a program that checks if the given number is  divisible by 3 or 5 or both
// or not divisible by anyone show output accordingly. 
var num1:number = 35;
if (num1%3 == 0 || num1%5 == 0){
    console.log("number is divisble")
}
else {
    console.log("number is not divisble")
}
//Write a program that checks if the given year is leap year or not.
var year = 23;
if (year%4 == 0){
    console.log("leap year")
}
else {
    console.log("not leap year")
}
// Develop a program that determines the day of the week. Ask the user for a number (1-7)
// and use nested if statements to print the corresponding day's name.
var daysOfWeek:number =5;
if(daysOfWeek <= 7){
    if(daysOfWeek==1){
        console.log("saturday")}
        else if(daysOfWeek==2){
            console.log("sunday")}
        else if(daysOfWeek==3){
        console.log("monday")}
        else if(daysOfWeek==4){
            console.log("tuseday")}
        else if(daysOfWeek==5){
            console.log("wendsday")}
        else if(daysOfWeek==6){
            console.log("thursday")}
        else if(daysOfWeek==7){
            console.log("fariday")}               
}
//Write a program that takes the number of units consumed by a user if it is greater than 100
// then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 
//then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
var consumedUnit:number = 450;
var unitPrice:number = 20;
var amount:number =consumedUnit*unitPrice;
if(consumedUnit>100 && consumedUnit<200){
    console.log((amount*10)/100+amount)}
else if(consumedUnit>200 && consumedUnit<500){
    console.log((amount*15)/100+amount)}  
else{
    console.log((amount*25)/100+amount)}


