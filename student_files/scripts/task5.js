/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
var todayDate;
todayDate = new Date();
// Step 2: Declare another variable to hold the day of the week
var dayNow;
let dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayNow = dayIndex[todayDate.getDay() -1];
// Step 4: Declare a variable to hold a message that will be displayed
var infoDisplay;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayNow == ("Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday")) {
    infoDisplay = "Hang in there!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    infoDisplay = "Woohoo!  It is the weekend!";
};
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var newInfo;
dayNow = String(todayDate.getDay());
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayNow) {
    case "1": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
    case "2": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
    case "3": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
    case "4": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
    case "5": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
    case "6": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
    case "7": newInfo = String(dayIndex[todayDate.getDay() -1]); break;
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").textContent = infoDisplay;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").textContent = newInfo;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
var templesList;
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
    temples.forEach((temples) => {
        let article = document.createElement("article");
        
        let hof3 = document.createElement("h3");
        hof3.textContent = temples.templeName;
        
        let hof4 = document.createElement("h4");
        hof4.textContent = temples.location;
        
        let hOf4v2 = document.createElement("h4");
        hOf4v2.textContent = temples.dedicated;
        
        let img = document.createElement("img");
        img.setAttribute("src", temples.imageUrl);
        img.setAttribute("alt", temples.templeName);
        
        article.appendChild(hof3);
        article.appendChild(hof4);
        article.appendChild(hOf4v2);
        article.appendChild(img);
        
        document.querySelector("#temples").appendChild(article);
    });
}
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
async function getTemples() {
    let theList = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
    let response = await theList.json();
    output(response)
}
getTemples();
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    document.querySelector("#temples").innerHTML = '';
};

function sortBy() {
    reset()

    let filter = document.querySelector("#sortBy").value;

    switch (filter) {
        case "templeNameAscending" : 
            output(templesList.sort((temple1, temple2) => {
                let templesName1 = temple1.templeName.toLowerCase();
                let templesName2 = temple2.templeName.toLowerCase();
                if (templesName1 < templesName2) return -1;
                else if (templesName1 > templesName2) return 1;
                else return 0;
        }));
            break;
        case "templeNameDescending":
            output(
              templesList.sort((temple1, temple2) => {
                let templesName1 = temple1.templeName.toLowerCase();
                let templesName2 = temple2.templeName.toLowerCase();
                if (templesName1 > templesName2) return -1;
                else if (templesName1 < templesName2) return 1;
                else return 0;
        }));
            break;
        
    }
}
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
