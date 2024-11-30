//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// let btn = document.querySelector("button");
// btn.addEventListener("click", getDrink);
// function getDrink(drink) {
//   let input = document.querySelector("input");
//   console.log(input.value.includes(" "));
//   if (input.value.includes(" ")) {
//     drink = input.value.split(" ").join(" ");
//     return drinkUrl(drink);
//   } else {
//     drink = input.value;
//     return drinkUrl(drink);
//   }
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", getDrink);
// function getDrink() {
//   let drink = document.querySelector("input").value;
//   console.log(drink.includes(" "));
//   if (drink.includes(" ")) {
//     drink.split(" ").join(" ");
//     return drinkUrl(drink);
//   } else {
//     return drinkUrl(drink);
//   }
// }

// let getDrink = () => {
//   let drink = document.querySelector("input").value;
//   console.log(drink.includes(" "));
//   if (drink.includes(" ")) {
//     drink.split(" ").join(" ");
//     let cardClass = document.querySelector("#card");
//     cardClass.classList.remove("no-card");
//     document.querySelector("input").value = "";
//     return drinkUrl(drink);
//   } else {
//     let cardClass = document.querySelector("#card");
//     cardClass.classList.remove("no-card");
//     document.querySelector("input").value = "";
//     return drinkUrl(drink);
//   }
// };

// let getQuote = (val) => {
//   fetch(`https://api.breakingbadquotes.xyz/v1/quotes/5${val}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//     .catch((err) => {
//       console.log(`Error: ${err}`);
//     });
// };

// let title = document.querySelector("#title");
// let subtitle = document.querySelector("#subtitle");

// if (title.innerText === "" && subtitle.innerText === "") {
//   document.querySelector(".card").classList.add("card-is-hidden");
// }

// Quote Function

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
// Function - Close dropdown if user clicks anywhere on the screen
// Function - Click on name and display tag with value

let isActive = (e) => {
  let el = document.querySelector(".dropdown");
  // Logic will go here (Check if dropdown was clicked or not)
  console.log(el.contains(e.target));
  el.classList.toggle("is-active");
};

// Event Listener, runs Quote() after click
document.querySelector("#getQuote-btn").addEventListener("click", quote);

// Clears quote
document.querySelector("#clear-btn").addEventListener("click", clearQuote);

// Toggle dropdown state
document.querySelector("#dropdown").addEventListener("click", isActive);

// If there is no value in the input field, don't display card

/*
<div class="card">
  <div class="card-content">
    <p id="title" class="title is-4 mb-4"></p>
    <p id="subtitle" class="subtitle"></p>
   </div>
</div>

*/

// Storing data from API call into an array

// Create function that grabs the author's name
// Add author's name to the dropdown options
// Add dropdown functionality (hide/expand)
// Add filter functionality that will display a tag and only show quotes of that author
// The tags will display an "X" where user can remove filter

let characters = [];

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

// Unrelated: Promise Exercise Article:(TODO) IN PROGRESS
// https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html

// Reading assignment:
// https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
