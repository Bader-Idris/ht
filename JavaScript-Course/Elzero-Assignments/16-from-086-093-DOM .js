
// pick this HTML text by using 15 methods,
// 4 as querySelector and 4 as querySelectorAll
<div id="elzero" class="element" name="js">JavaScript</div>

let myIdElement = document.getElementById("elzero");
let myTagElement = document.getElementsByTagName("div");
let myClassElement = document.getElementsByClassName("element");
let myQueryName = document.getElementsByName('js');
let myQueryElement = document.querySelector(".special");
let myQuery2 = document.querySelector("#elzero");
let myQuery3 = document.querySelector("[name='js']");
let myQuery4 = document.querySelector("div");
let myQuery5 = document.querySelector("[class='element']");//don't count it
let myQuerySeries = document.querySelector("body .special");//don't count it

let myAllQueryElements = document.querySelectorAll(".special");
let myQueryAll2 = document.querySelectorAll("#elzero");
let myQueryAll3 = document.querySelectorAll("[name='js']");
let myQueryAll4 = document.querySelectorAll("div");
let myQueryAll5 = document.querySelectorAll("[class='element']");//don't count it
// 3 remaining❎


myQuery4.getAttribute()
myQuery4.getAttributeNS()
myQuery4.getAttributeNames('js')
myQuery4.getAttributeNode()
myQuery4.getAttributeNodeNS()
console.log(myTagElement[0]);//if it's applicable we can get a double of each, but let it as last choice
// 1st Assignment⌛

/*

  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>


// https://elzero.org/wp-content/themes/elzero/imgs/logo.png turn the src into this🔴

*/
for (let i = 0; i < document.querySelectorAll("img").length; i++) {
  document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
}

// spare attributes 🧊
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// 2nd Assignment✅

/* HTML text
  <form action="">
  <input type="number" name="dollar" placeholder="USD Dollar" />
  <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
  </form>
*/
let myForm = `
  <form action="">
  <input type="number" name="dollar" placeholder="USD Dollar" />
  <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
  </form>
  `;
window.onload = function() {
  document.body.appendChild(myForm);
};
// manipulate div el to output $ and E£ [egyptian currency]

// created by the love of Chat GPT 💚
function convertCurrency() {
  // Get the input element for the USD Dollar amount
  const dollarInput = document.querySelector('input[name="dollar"]');

  // Get the result element to display the conversion
  const result = document.querySelector('.result');

  // Get the current USD Dollar amount entered by the user
  const dollarAmount = parseFloat(dollarInput.value);

  // Set the exchange rate for USD Dollars to Egyptian Pounds
  const exchangeRate = 15.6;

  // Calculate the conversion from USD Dollars to Egyptian Pounds
  const poundAmount = dollarAmount * exchangeRate;

  // Display the conversion in the result element
  result.innerText = `\{${dollarAmount.toFixed(2)}\} USD Dollar = \{${poundAmount.toFixed(2)}\} Egyptian Pound`;
}

// Add an event listener to the input element to trigger the currency conversion on input change
document.querySelector('input[name="dollar"]').addEventListener('input', convertCurrency);

// 3rd Assignment✅ cheating by Chat GPT

/*
  <div class="one" title="two">Two</div>
  <div class="two" title="one">One</div>
*/
// Final results must become as:
/*
  <div class="one" title="one">One</div>
  <div class="two" title="two">Two 2</div>
*/
let firstText = document.querySelector('.two').title;
let secondText = document.querySelector('.one').textContent;
document.querySelector('.one').title = firstText;
document.querySelector('.one').textContent = firstText;
document.querySelector('.one').textContent;
document.querySelector('.two').textContent = `${secondText} 2`;
document.querySelector('.two').title = secondText;
// old fashion, use get and set instead🔼✅
let firstDiv = document.querySelector('.one');
let secondDiv = document.querySelector('.two');
let firstTxt = firstDiv.textContent;//one
let secondTxt = secondDiv.textContent;//two
// firstDiv.getAttribute("title");// both ain't important🔽
// secondDiv.getAttribute("title");
firstDiv.setAttribute("title",secondTxt);
firstDiv.textContent = secondTxt;
secondDiv.textContent = firstTxt;
secondDiv.setAttribute("title", firstTxt);
// second is cleaner💚✅ 330 on behalf of 385
// 4th Assignment✅


// you have this set of images, change existing alt to 'Old'
// and create new for non-existing then call 'em 'Elzero New'
// use for loop and if statement
/*
  <img decoding="async" src="#" alt="One" />
  <img decoding="async" src="#" />
  <img decoding="async" src="#" alt="Three" />
  <img decoding="async" src="#" />
  <img decoding="async" src="#" />
*/
let img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
  if(img[i].alt.length > 0) img[i].setAttribute("alt", 'Old');
  else img[i].setAttribute("alt", 'Elzero New');
}
// must be as:
/*
  <img decoding="async" src="#" alt="Old" />
  <img decoding="async" src="#" alt="Elzero New" />
  <img decoding="async" src="#" alt="Old" />
  <img decoding="async" src="#" alt="Elzero New" />
  <img decoding="async" src="#" alt="Elzero New" />
*/
// 5th Assignment✅


// 6th Assignment CHALLENGE🔽
/*
<form action="">
  <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
  <input type="text" name="texts" class="input" placeholder="Elements Text" />
  <select name="type" class="input">
    <option value="Div">Div</option>
    <option value="Section">Section</option>
  </select>
  <input type="submit" name="create" value="Create" />
  <div class="results"></div>
</form>
*/

// if number 3 divs appended. result must be: 
/*
<div class="box" title="Element" id="id-1">Hello</div>
<div class="box" title="Element" id="id-2">Hello</div>
<div class="box" title="Element" id="id-3">Hello</div>
*/

// my css for the form:🔴💚
// WORK ON RESULTS WHICH COMES OUT AFTER CREATING THE FUNCTION WHICH GENERATES THESE ELEMENTS🔴
/*
form{
  display: flex;
  width: calc(100% / 4);
  justify-content: center;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px;
  align-items: stretch;
  flex-wrap: wrap;
  align-content: space-around;
}
form > * {
  padding: 10px;
  margin: 5px 10px;
  outline: none;
  borer:none;
}
form > input:last-of-type {
  font-weight: bold;
  color: white;
  background-color: #2490ff;
}
*/

