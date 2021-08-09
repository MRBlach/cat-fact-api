// Cat Facts API returns an array
// For example a request for 3 facts will return the following:
// 
// data: Array(3)
//   0: {fact: "The silks created by..."}
//   1: {fact: "The first true..."}
//   2: {fact: "A cat's hearing..."}



// Init Card Class from card.js file
const card = new Card

// Init Modal Class from modal.js file
const modal = new Modal
modal.makeModal();

// Init Footer Class from footer.js files
const footer = new Footer
footer.makeFooter();

// Display UI
function showCard() {
  card.makeCard()
}
showCard();

// Grab submit button from UI 
const submitBtn = document.querySelector('.submitBtn');
// Listen for user click of submit button
submitBtn.addEventListener('click', showFacts);
// Store the number of facts user selected in array
const numFacts = document.querySelector('#numberInput');

// Function to output facts to UI
async function showFacts(e) {
  document.querySelector('.output').hidden = true;
  document.querySelector('.factList').hidden = false;

// Handle user input errors
  // Alert if user selected fatcs over 500
  if(numFacts.value >500) {
    alert('You have exceeded the maximum of 500')
    // Reset the page after alert is dismissed
    window.location.reload();
  }
  // Alert if user selected facts less than 1
  if(numFacts.value <1) {
    alert('The minimum is 1')
    // Reset the page after alert is dismissed
    window.location.reload();
  }
  
  // Get Request the user input value for number of facts from Cat Fact API
  const response = await fetch (`https://catfact.ninja/facts?limit=${numFacts.value}`);
  // Parse response to produce JavaScript object in this case it's an array of cat facts. Then store the array in a variable called 'data'
  const data = await response.json();
  // Log the data array to the console for dev test purposes
  console.log(data);
  // Set output to an empty string
  let output = '';
  
  // Traverse through each fact within the data array index
  data.data.forEach(function(fact) {
    // Log each fact to the console for dev test purposes
    console.log(fact)
    // Print a new list item for each fact stored in the data array
    output += `<li class='p-2' >${fact.fact}</li>`;
  });
  // Output each fact from the data array to the UI
  document.querySelector('.facts').innerHTML = output;
}



