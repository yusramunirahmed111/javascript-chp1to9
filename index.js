//CHAPTER NO 1 
// Q1 What does the alert function do in JavaScript?
// alert is a pop up messege 
//Q2 Write the code to display an alert with the message "Welcome to my website!".
alert("Welcome to my website!");
// Q3 What happens if you capitalize the alert keyword?
//If you capitalize the alert keyword in JavaScript (e.g., writing Alert), 
//it will result in a reference error because JavaScript is case-sensitive.
//Q4 Write the correct JavaScript syntax to display "Hello, world!" in an alert box.
alert("Hello, world!");
//Q5 Write a JavaScript alert statement with proper formatting and explain each part of the code
alert("Welcome to my website!");
//alert
//This is the function name. It is a built-in JavaScript function used to display a modal dialog box with a specified message. The dialog will have an "OK" button.
//( and ):
//These are parentheses used to enclose the arguments passed to the function. In this case, we're passing a single argument: a string.
//"Welcome to my website!":
//This is the argument being passed to the alert function. It is a string that contains the message that will be displayed in the alert dialog. Strings in JavaScript can be enclosed in either double quotes (" "), single quotes (' '), or backticks (` ` for template literals).

//CHAPTER NO 2 
//Q1 Write code that declares a variable message, assigns the value "Hello, world!" to
//it, and then displays an alert with that message
var message = "Hello, world!";
alert(message);
//Q2 Declare a variable named age, leave it undefined, then assign the value 25 to it in a
//later statement. Display an alert showing the value of age.
var age = 
age = 25
alert(age);
//Q3  Declare a variable named greeting, assign it the value "Good morning!", and then
//display it in an alert. Afterwards, change the value of greeting to "Good evening!"
//and display the new value in another alert.
var greeting = "Good morning!";
alert(greeting);
greeting = "Good evening!";
alert(greeting);
//Q4 Create a variable called favoriteColor and assign it the value "blue". Then display
//an alert that says "My favorite color is blue" using the variable.
var favoriteColor ="blue";
alert(`my favorite clolor is ${favoriteColor}`);
//CHAPTER NO 3 
//Q1 Declare a variable height and assign the value 170 to it. Then, add 10 to height and
//store the result in a new variable newHeight. Display an alert with the new value.
var height = 170
var newHeight = height + 10
alert(newHeight);
//Q2 Declare two variables, num1 and num2, and assign them values of 50 and 30, respectively.
//Create a new variable sum that stores the sum of num1 and num2, and display the sum in an
//alert.
var num1 = 50
var num2 = 30 
var sum = num1 + num2
alert(sum);
//Q3 Declare a variable numToBeAdded with the value 20. Then use the following code:Display
//total in an alert. What is the value of total?
var numToBeAdded = 20 
// Q4 Declare a variable price with the value 120. Now add tax (10%) to price and display the total
//price in an alert.
var price = 120
var tax = 10
var totalPrice = price + tax
alert(totalPrice);
// CHAPTER NO 4 
//Q1 Write code to create a variable myAddress and assign it your city name. Ensure your variable
//name follows camelCase naming convention, and then display the value in an alert
var myAddress = "karachi"
// CHAPTER N0 5 
// Q1 Write a JavaScript statement that adds two numbers, 25 and 30, and assigns the result
//to a variable called sum. Then display the value in an alert.
var twoNumber = 25 + 30
var sum = twoNumber
alert(sum);
// Q2 Create a variable num1 and assign it the value 25. Create another variable num2 and assign it
//the value 5. Add both variables and store the result in a new variable called sum. Display the
//result in an alert.
var num1 = 25
var num2 = 5
var sum = num1 + num2
alert(sum);
//Q3 Write a statement that assigns the remainder of 27 divided by 4 to a variable called
//modulusResult. Then display the value in an alert.
var modulusResult = 27/2
alert(modulusResult);
// CHAPTER N0 6
// Q1 Initialize a variable num with the value 3. Use the post-increment (num++) operator and
//assign the result to a new variable newNum. Display both num and newNum in alerts.
var num = 3 
var newNum = num++
alert(newNum)