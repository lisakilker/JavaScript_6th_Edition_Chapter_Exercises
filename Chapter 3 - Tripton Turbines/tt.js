/* JavaScript 6th Edition
Chapter 3
Chapter case
Tiptom Turnbines
Variables and functions
Author:  Lisa Kilker
Date:  April 15, 2018
Filename:  tt.js
*/

//global variables.
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdsay", "Friday", "Saturday"];
var opponents = ["Lightning", "Combines", "Combines", "Combines",
"Lightning", "Lightning", "Lightning", "Lightning", "Barn Raisers", "Barn Raisers", "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters", "Sodbusters", "(off)", "River Riders",
"River Riders", "River Riders", "Big Dippers", "Big Dippers", "Big Dippers", "(off)", "Sodbusters", "Sodbusters", "Sodbusters", "Combines", "Combines", "Combines", "(off)", "(off)"];
var gameLocation = ["away", "away", "away", "away", "home", "home","home", "home", "home", "home", "home", 
"away","away", "away", "away", "", "away", "away", "away","away", "away", "away", "", "home", "home", "home","home", "home", "home", "", ""];

function addColumnHeaders() { //function places daysOfWeek values in header row cells
	var i = 0; //creates a counter variable called i and sets the value to 0.

	while (i < 7) {
		document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i]; //fetches the value from daysOfWeek array that has the index value equal to the counter variable i.  The getElementsByTagName method will identify the first 'th' element representing the column heading for the first column and set the first value to "Sunday".
		i++; //increments the counter variable.
	}
}

function addCalendarDates() { //function to place day of month value in the first <p> element.
	var i = 1;
	var paragraphs = ""; 

	do {
	var tableCell = document.getElementById("08-" + i); //creates a variable called "tableCell" and uses the getElementById() method to set its value to the element with an id valud that starts with 08- and is followed by the value of i.
		paragraphs = tableCell.getElementsByTagName("p"); //gets the getElementsByTagName method to look up all the p elements within the current cell and stores the values as an array in the paragraph variable.
		paragraphs[0].innerHTML = i; //assigns the value of the counter variable (i), as the content of the first paragraph (which is 0) in the current cell.  When the loop starts, places the value of 1 in the cell for the first day of the month.
		i++; //increments the counter variable.
	} 
	while (i <= 31); //determines whether the 'do' command block is repeated for another iteration.
}

function addGameInfo() {
	var paragraphs = "";

	for (var i = 0; i < 31; i++) { 
	var date = i + 1; //creates a variabled called 'date' and assigns the value equal to the value of the counter variable i plus 1.
	var tableCell = document.getElementById("08-" + date); //creates a variable called 'tableCell' and uses the getElementById method to set its value to the element with an id value that starts with 08- followed by the value of i.
		paragraphs = tableCell.getElementsByTagName("p"); //creates a method to look up all the 'p' elements within the current cell and stores the values as an array in the paragraphs variable.

	if (gameLocation[i] === "away") { //if the game location is "away" adds an @ before the array element.
		paragraphs[1].innerHTML = "@";	
	} 
	else {
		paragraphs[1].innerHTML = "vs "; //if the game location is "home" adds a "vs" before the array element.
	}
		paragraphs[1].innerHTML += opponents[i]; //displays the opponents information.
	}
}

function setUpPage() { //calls the functions created above.
		addColumnHeaders();
		addCalendarDates();
		addGameInfo();
}
		window.addEventListener("load", setUpPage, false); //runs addColumnHeaders function when page loads.
		window.addEventListener("load", addColumnHeaders, false);








