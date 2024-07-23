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

let resetCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
};

let quote = () => {
  resetCards();
  fetch(`https://api.breakingbadquotes.xyz/v1/quotes/3`)
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
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

// Clear quote

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

// Code War Problem

// function order(words) {
//   let gatheredWords = words.split(" ");
//   gatheredWords.forEach((word) => {
//     let smallWord = word.split("");
//     // ['is2', 'Thi1s', 'T4est' '3a']
//     const sortedArray = smallWord.reduce((acc, curr) => {
//       if (Number(curr) !== NaN) {
//         let position = curr;
//         console.log("Position", position);
//       } else {
//         let arr = [];
//         arr.push(curr);
//         console.log("Array:", arr);
//       }
//     }, []);
//     console.log("Result:", sortedArray);
//   });
// }

// Codewar Problem Exercies (6kyu)

// function order(words) {
//   let numericalSearch = /[0-9]/g;
//   // let newArr = words.match(numericalSearch).sort();

//   console.log(words.split(" "));
// }

// order("is2 Thi1s T4est 3a");
