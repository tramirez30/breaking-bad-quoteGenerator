// Quote Function

// Targets dropdown input
let icon = document.querySelector(".fas.fa-angle-down");

// Fetches Author + Quote
// returns html + string template

let quote = () => {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes/3")
    .then((res) => res.json())
    .then((data) => {
      // Clears existing cards, and returns new data
      let output = "";
      data.forEach((item) => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => card.remove());
        // Appends quotes + author to card using string literal
        output += `
            <div class="card">
                <div class="card-content">
                    <p class="title is-4 mb-4">${item.quote}</p>
                    <p class="subtitle">${item.author}</p>
                </div>
            </div>
        `;
        document.querySelector("#content").innerHTML += output;
      });
    })
    .catch((err) => {
      console.log(`Error is: ${err}`);
    });
};

// Clear Quote Button functionality

let clearQuote = () => {
  document.querySelector("#content").innerHTML = "";
};

// Toggle dropdown state
// TODO:
// List dropdown in Alphabet order(11/20)
// Flip arrow when dropdown is active(11/20)
// Function - Click on name and display tag with value

let isActive = (e) => {
  let dropDown = document.querySelector(".dropdown");
  //Check to see if dropdown was selected
  if (dropDown.contains(e.target)) {
    // Toggles dropdown + Update icon to switch from up to down and vice versa
    dropDown.classList.toggle("is-active");
    let options = document.querySelector(".dropdown-item");
    if (options.contains(e.target)) {
      console.log(options.text);
      icon.classList = "fas fa-angle-down";
    }
    icon.classList = "fas fa-angle-up";
    displayTag();
  } else if (options) {
    console.log("clicked");
  } else {
    closeDropdown();
  }
};

let displayTag = () => {
  if (dropdown.classList === "is-active" && options.contains(e.target)) {
    console.log(e.target.value);
  }
};

// document.querySelector(".dropdown-item").addEventListener("click", displayTag);

// Option function selected

// let optionSelected = (e) => {
//   // Checks to see if dropdown-item is clicked
//   // Needs to be updated
//   // Update 12/23: No update
//   if (e.target.classList.contains(option)) {
//     console.log("Clicked");
//   }
// };

// Close dropdown function

let closeDropdown = () => {
  dropDown.classList.remove("is-active");
  icon.classList = "fas fa-angle-down";
};

// If there is no value in the input field, don't display card

// Storing data from API call into an array

// Create function that grabs the author's name
// Add author's name to the dropdown options
// Add dropdown functionality (hide/expand)
// Add filter functionality that will display a tag and only show quotes of that author
// The tags will display an "X" where user can remove filter

let characters = [];

// Loads list of authors to dropdown options
let getAuthor = () => {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes/100")
    .then((response) => response.json())
    .then((data) => {
      for (let item of data) {
        // If character is not in array then push author to characters array
        if (!characters.includes(item.author)) {
          characters.push(item.author);
        }
      }
      // Calls selectAuthor and stores author name into dropdown
      selectAuthor(characters);
    })
    .catch((error) => console.log("error", error));
};

// Stores author's name into dropdown
let selectAuthor = (arr) => {
  for (let author of arr) {
    let authorContent = "";
    // Grabbing author-content where author's name will be added to dropdown
    let dropdownEl = document.querySelector("#author-content");
    // Appends css to dropdown
    authorContent += `
      <a class="dropdown-item"> ${author}</a>
      `;
    // Appends list of authors to id selector
    dropdownEl.innerHTML += authorContent;
  }
};

getAuthor();

// Display tags

/* 

 <div class="tags">
          <span class="tag is-medium">
            Walter White
            <button class="delete is-small"></button>
          </span>
          <span class="tag is-medium">
            Saul Goodman
            <button class="delete is-small"></button>
          </span>
          <span class="tag is-medium">
            Gustavo Fring
            <button class="delete is-small"></button>
          </span>
        </div>
*/

// Event Listener, runs Quote() after click
document.querySelector("#getQuote-btn").addEventListener("click", quote);

// Clears quote
document.querySelector("#clear-btn").addEventListener("click", clearQuote);

// Toggle dropdown state
window.addEventListener("click", isActive);

// Reading assignment:
// https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
