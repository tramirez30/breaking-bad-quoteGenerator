// // Quote Function

// // Targets dropdown input
// let icon = document.querySelector(".fas.fa-angle-down");

// // Fetches Author + Quote
// // returns html + string template

// let quote = () => {
//   fetch("https://api.breakingbadquotes.xyz/v1/quotes/3")
//     .then((res) => res.json())
//     .then((data) => {
//       // Clears existing cards, and returns new data
//       let output = "";
//       data.forEach((item) => {
//         const cards = document.querySelectorAll(".card");
//         cards.forEach((card) => card.remove());
//         // Appends quotes + author to card using string literal
//         output += `
//             <div class="card">
//                 <div class="card-content">
//                     <p class="title is-4 mb-4">${item.quote}</p>
//                     <p class="subtitle">${item.author}</p>
//                 </div>
//             </div>
//         `;
//         document.querySelector("#content").innerHTML += output;
//       });
//     })
//     .catch((err) => {
//       console.log(`Error is: ${err}`);
//     });
// };

// // Clear Quote Button functionality

// let clearQuote = () => {
//   document.querySelector("#content").innerHTML = "";
// };

// // Toggle dropdown state
// // TODO:
// // List dropdown in Alphabet order(11/20)
// // Flip arrow when dropdown is active(11/20)
// // Function - Click on name and display tag with value

// let isActive = (e) => {
//   let dropDown = document.querySelector(".dropdown");
//   //Check to see if dropdown was selected
//   if (dropDown.contains(e.target)) {
//     // Toggles dropdown + Update icon to switch from up to down and vice versa
//     dropDown.classList.toggle("is-active");
//     let options = document.querySelector(".dropdown-item");
//     if (options.contains(e.target)) {
//       // Returns selected dropdown option's value and adds it to displayTag function
//       let text = options.text;
//       console.log(displayTag(text));
//     }
//     icon.classList = "fas fa-angle-up";
//   } else {
//     closeDropdown();
//   }
// };

// let displayTag = (val) => {
//   let output = "";
//   output += ` <div class="tags">
//                 <span class="tag is-medium">${val}<button class="delete is-small"></button></span>
//               </div>
//         `;
//   return (document.querySelector("#tag").innerHTML += output);
// };

// // document.querySelector(".dropdown-item").addEventListener("click", displayTag);

// // Option function selected

// // let optionSelected = (e) => {
// //   // Checks to see if dropdown-item is clicked
// //   // Needs to be updated
// //   // Update 12/23: No update
// //   if (e.target.classList.contains(option)) {
// //     console.log("Clicked");
// //   }
// // };

// // Close dropdown function

// let closeDropdown = () => {
//   dropDown.classList.remove("is-active");
//   icon.classList = "fas fa-angle-down";
// };

// // If there is no value in the input field, don't display card

// // Storing data from API call into an array

// // Create function that grabs the author's name
// // Add author's name to the dropdown options
// // Add dropdown functionality (hide/expand)
// // Add filter functionality that will display a tag and only show quotes of that author
// // The tags will display an "X" where user can remove filter

// let characters = [];

// // Loads list of authors to dropdown options
// let getAuthor = () => {
//   fetch("https://api.breakingbadquotes.xyz/v1/quotes/100")
//     .then((response) => response.json())
//     .then((data) => {
//       for (let item of data) {
//         // If character is not in array then push author to characters array
//         if (!characters.includes(item.author)) {
//           characters.push(item.author);
//         }
//       }
//       // Calls selectAuthor and stores author name into dropdown
//       selectAuthor(characters);
//     })
//     .catch((error) => console.log("error", error));
// };

// // Stores author's name into dropdown
// let selectAuthor = (arr) => {
//   for (let author of arr) {
//     let authorContent = "";
//     // Grabbing author-content where author's name will be added to dropdown
//     let dropdownEl = document.querySelector("#author-content");
//     // Appends css to dropdown
//     authorContent += `
//       <a class="dropdown-item"> ${author}</a>
//       `;
//     // Appends list of authors to id selector
//     dropdownEl.innerHTML += authorContent;
//   }
// };

// getAuthor();

// // Event Listener, runs Quote() after click
// document.querySelector("#getQuote-btn").addEventListener("click", quote);

// // Clears quote
// document.querySelector("#clear-btn").addEventListener("click", clearQuote);

// // Toggle dropdown state
// window.addEventListener("click", isActive);

// // Reading assignment:
// // https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

// Select DOM elements once
const icon = document.querySelector(".fas.fa-angle-down");
const contentEl = document.querySelector("#content");
const tagContainer = document.querySelector("#tag");
const dropdownEl = document.querySelector("#author-content");
const dropDown = document.querySelector(".dropdown");
const quoteBtn = document.querySelector("#getQuote-btn");
const clearBtn = document.querySelector("#clear-btn");

// Fetch Quotes and Display
const fetchQuotes = async () => {
  try {
    const response = await fetch(
      "https://api.breakingbadquotes.xyz/v1/quotes/3"
    );
    const data = await response.json();
    renderQuotes(data);
  } catch (error) {
    console.error(`Error fetching quotes: ${error}`);
  }
};

// Render Quotes
const renderQuotes = (quotes) => {
  // Clear previous quotes
  contentEl.innerHTML = "";

  quotes.forEach((item) => {
    const quoteCard = document.createElement("div");
    quoteCard.classList.add("card");
    quoteCard.innerHTML = `
      <div class="card-content">
        <p class="title is-4 mb-4">${item.quote}</p>
        <p class="subtitle">${item.author}</p>
      </div>
    `;
    contentEl.appendChild(quoteCard);
  });
};

// Clear Quotes
const clearQuotes = () => {
  contentEl.innerHTML = "";
};

// Toggle Dropdown State
const toggleDropdown = (e) => {
  if (dropDown.contains(e.target)) {
    dropDown.classList.toggle("is-active");
    icon.classList.toggle("fa-angle-up");
    icon.classList.toggle("fa-angle-down");

    if (e.target.classList.contains("dropdown-item")) {
      displayTag(e.target.textContent.trim());
    }
  } else {
    closeDropdown();
  }
};

// Display Selected Author as Tag
const displayTag = (author) => {
  let tag = document.createElement("div");
  tag.classList.add("tags", "grid");
  tag.innerHTML = `
    <span class="tag is-medium cell">${author}
      <button class="delete is-small" onclick="removeTag(this)"></button>
    </span>
  `;
  tagContainer.appendChild(tag);
};

// Remove Tag
const removeTag = (button) => {
  button.parentElement.remove();
};

// Close Dropdown
const closeDropdown = () => {
  dropDown.classList.remove("is-active");
  icon.classList.add("fa-angle-down");
  icon.classList.remove("fa-angle-up");
};

// Fetch Authors and Populate Dropdown
const fetchAuthors = async () => {
  try {
    const response = await fetch(
      "https://api.breakingbadquotes.xyz/v1/quotes/100"
    );
    const data = await response.json();
    const uniqueAuthors = [...new Set(data.map((item) => item.author))];
    populateDropdown(uniqueAuthors);
  } catch (error) {
    console.error(`Error fetching authors: ${error}`);
  }
};

// Populate Author Dropdown, (A-Z)
const populateDropdown = (authors) => {
  dropdownEl.innerHTML = authors
    .sort()
    .map((author) => `<a class="dropdown-item">${author}</a>`)
    .join("");
};

// Attach Event Listeners
quoteBtn.addEventListener("click", fetchQuotes);
clearBtn.addEventListener("click", clearQuotes);
window.addEventListener("click", toggleDropdown);

// Load Authors on Page Load
fetchAuthors();
