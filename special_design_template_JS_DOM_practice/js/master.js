

//🔼 9th lesson localStorage
let myGear = document.querySelector(".toggle-settings .myGear");
let settingsBox = document.querySelector(".settings-box");
myGear.onclick = function() {
  this.classList.toggle('fa-spin');
  settingsBox.classList.toggle("open");
};
//🔼 7th lesson Toggle Spin Class Icon I love it💚

const colorsLi = document.querySelectorAll('.colors-list li');
colorsLi.forEach(li =>{
  li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
  });
});

//🔼 8th lesson Switching Colors

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg"];
// we can add full URL, or tiny dir, or only img name, or loop as our names 01 etc

setInterval(() =>{
  // Get Random Number
  let randomNumber = Math.floor(Math.random()* imgsArray.length);
  // we can make our Var empty in global, and add its value here
  // console.log(randomNumber);

  // Change BG Image URL
  landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
},5000);
// he said: we can make all of this in one setInterval, one line

// 🔼5th lesson in special design