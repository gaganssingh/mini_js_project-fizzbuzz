// **************
// DOM SELECTORS
// **************
const submitBtn = document.getElementById("submitBtn");
const alertBox = document.getElementById("alertBox");
const alertHeading = document.getElementById("alertHeading");
const alertMsg = document.getElementById("alertMsg");
const resultsTable = document.getElementById("results");

// **************
// FUNCTIONS
// **************
const showAlerts = (heading, message) => {
  alertBox.classList.add("alert-danger");
  alertBox.classList.remove("invisible");
  alertHeading.innerText = heading;
  alertMsg.innerText = message;
};

// Clear any previous alerts
const resetAlerts = () => {
  alertBox.classList.remove("alert-danger");
  alertBox.classList.add("invisible");
  alertHeading.innerText = "";
  alertMsg.innerText = "";
};

//
const generateResultsList = (startValue, endValue) => {
  const results = [];

  for (let i = startValue; i <= endValue; i++) {
    if (i === 0) {
      results.push(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else {
      results.push(i);
    }
  }
  return results;
};

// Display the results on the screen
const displayResultsList = (results) => {
  let tableRows = "";

  results.forEach((result) => {
    let className = "";
    if (result === "Fizz") {
      className = "fizz";
    } else if (result === "Buzz") {
      className = "buzz";
    } else if (result === "FizzBuzz") {
      className = "fizzbuzz";
    }

    tableRows += `
      <tr>
        <td class="${className}">${result}</td>
      </tr>
    `;
  });

  // Append the constructed table to the tbody tag with id="results"
  resultsTable.innerHTML = tableRows;
};

// Capture user input, then generate results list, and display results on page
const getUserInput = () => {
  // Clear any previous alerts
  resetAlerts();

  // Capture user inputs
  const startingValue = document.getElementById("startingValue").value;
  const endingValue = document.getElementById("endingValue").value;

  if (!startingValue || !endingValue) {
    // Show Error Message inside the alert box
    showAlerts(
      "Are you forgetting something?",
      "Range inputs must not be empty. Please enter a starting and an ending value."
    );
  }

  // Convert user inputs to numbers from the default of string
  const startingValueNumber = +startingValue;
  const endingValueNumber = +endingValue;

  if (
    typeof startingValueNumber !== "number" ||
    typeof endingValueNumber !== "number"
  ) {
    // Show error message inside the alert box
    // Show Error Message inside the alert box
    showAlerts(
      "Looks like there's a problem.",
      "Please enter valid integers in the input boxes above. Fractional & decimal numbers are not valid inputs."
    );
  } else {
    // If there are no errors, then generate the results list
    const resultsArray = generateResultsList(
      startingValueNumber,
      endingValueNumber
    );

    // Populate the DOM with the results from the resultsArray
    displayResultsList(resultsArray);
  }
};

// **************
// EVENT LISTENERS
// **************
submitBtn.addEventListener("click", getUserInput);
