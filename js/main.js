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
        // Appends quotes + author to card
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

// Event Listener, runs Quote() after click
document.querySelector("#getQuote-btn").addEventListener("click", quote);

// Clears quote
document.querySelector("#clear-btn").addEventListener("click", clearQuote);

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
// The tags will display an "X" where I can remove filter

let characters = [];

let getAuthor = () => {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes/50")
    .then((response) => response.json())
    .then((data) => {
      for (let item of data) {
        if (!characters.includes(item.author)) {
          characters.push(item.author);
        }
      }

      selectAuthor(characters);
    })
    .catch((error) => console.log("error", error));
};

let selectAuthor = (arr) => {
  for (let author of arr) {
    let dropdownEl = document.querySelector("#author-content");
    dropdownEl.append(author);
  }
};

/* Insert into dom instead of hardcoding them into HTML (Make it dynamic)

<a class="dropdown-item"> Walter White </a>
<a class="dropdown-item"> Skylar White </a>
<a class="dropdown-item"> Hank Schrader </a>
<a class="dropdown-item"> Gustavo Fring </a>
<a class="dropdown-item"> Jesse Pinkman </a>
<a class="dropdown-item"> Saul Goodman </a>
<a class="dropdown-item"> Mike Ehrmantraut </a>
<a class="dropdown-item"> Badger </a>
<a class="dropdown-item"> Stephen King </a>
<a class="dropdown-item"> The fly </a>
<a class="dropdown-item"> Tuco Salamanca </a>
<a class="dropdown-item"> Marie Schrader </a>
<a class="dropdown-item"> Gale Boetticher </a>
<a class="dropdown-item"> Tio Salamanca </a>

*/

getAuthor();

// Looping through API
// Refer to doc: https://www.sitepoint.com/loop-through-json-response-javascript/
