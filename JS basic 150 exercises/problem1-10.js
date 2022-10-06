// 1. Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 : 30 : 38
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let weekday = date.getDay();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let output1= `Today is : ${daylist[weekday]}`;
let output2 = `Current time is : ${hour} : ${minute} : ${second}`
console.log(output1);
console.log(output2);

//2. Write a JavaScript program to print the contents of the current window.

//Solution
function print_current_page()
{
window.print();
}

//3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output : mm-dd-yyyy, mm/dd/yyyy
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let output = `${day}/${month}/${year}`;
console.log(output);

//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
function areaOfTriangle(a,b,c){
    let s =( a + b+ c)/2;
    let area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    return console.log(area)
    
}

areaOfTriangle(5,6,7);


