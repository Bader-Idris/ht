// 102nd lesson 00:00:10 What's BOM

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window 
  --- Window Contains The Document Object
  --- All Global Variables, Objects, and Functions are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do with Window Object?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After A Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Be Used Later🔴IMPORTANT🔴
*/

// 103rd lesson 00:04:20 Alert, Confirm, Prompt
/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/
// as we know, in global scope, there's no difference in🔽

window.alert('Test');
this.alert('Test');
alert('Test');
// alert will stop every other code after it, as 
console.log('Test');
/* We'll not need to use these three in modern life, see other libraries as:
  https://sweetalert2.github.io
  see normal alert Vs. sweetAlert2 inside the site. I 💗 It
*/

/*
  We use confirm when user has decesions to make, as:
  -!! do you wanna remove this item permanently!! 🆗⛔
*/
let confirmMsg = confirm('Are you sure?');
console.log(confirmMsg);
if(confirmMsg === true) console.log('Item Deleted');
else console.log('Item Isn\'t Deleted');

// prompt wants us to write sth

let promptMsg = confirm('Select a Free Time for An Appointment', 'Use three Letters as Sat');
// let promptMsg = confirm('message', 'default placeholder');
console.log(promptMsg);
if(promptMsg === true) console.log('Item Deleted');
else console.log('Item Isn\'t Deleted');

// 104th lesson 00:13:15 setTimeout And clearTimeout
/* 🔴EXTREMELY IMPORTANT🔴
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/
setTimeout(() => {//this is an anonymous function, whether if arrow or normal
  console.log(`Msg`);
}, 3000);// in milliseconds this is 3s

function sayMsg(){
  console.log(`I'm A Msg`);
};
setTimeout(sayMsg, 3000);
// we can't append the argument in the function as:
// setTimeout(sayMsg('Hanady'), 3000);
// but we can as:
function sayHiBabe(babe, age){
  console.log(`I'm A Msg For You ${babe}, sincere love, ${age} is here`);
};
setTimeout(sayHiBabe, 3000,'Hanady',29);
// setTimeout, done. clearTimeout stops the [setTimeout]

let handlerCounter = setTimeout(sayMsg, 3000);
function sayMsg(){
  console.log(`I'm A Msg`);
};
// Handler is the ID for timeout
let btn = document.querySelectorAll('button');
btn[0].onclick = function (){
  clearTimeout(handlerCounter);// here handleCounter is 1
  // clearTimeout(1);// so this is useful
};
// so WHEN I CLICK ON THE BUTTON, IT STOPS THE Msg FUNCTION
// setTimeout 🔴it's extremely important🔴

// 105th lesson 00:20:05 setInterval And clearInterval
/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
    similar to setTimeout, but setInterval repeats the function repeatedly
    meaning: setInterval waits for 3000 then repeats after 3000 or until using clearInterval
*/
setInterval(function (){
  console.log(`I'm A Msg`);
},1000)
// same as:
setInterval(sayHiBabe, 2000,'Hanady',29);

function sayHiBabe(babe, age){
  console.log(`I'm A Msg For You ${babe}, sincere love, ${age} is here`);
};
// see this
let div = document.querySelectorAll('div');
function countdown() {
  div[0].innerHTML -= 1;
  if (div[0].innerHTML === '0') {// it's in string not as number
    clearInterval(counter);
  }
}
countdown();//calling it, or 🔽
let counter = setInterval(countdown, 1000);

// 106th lesson 00:24:25 Window Location Object
// Important
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
window.location//or console.log(location); same results
window.location.href// our hyper text reference as https://www.google.com
// this is all getting attributes
// 💋right click on ◀️ or ▶️ button in your browser💋 to see tab's history
// current page isn't in history, when you pass to another, it'll be gathered
// we'll take things to delete that history!
window.location.href = "https://www.google.com";
// we can go directly to our section as:
location.href = '/#sec02';
location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description";

console.log(location.host)// host name and its port
console.log(location.hostname)// host name

console.log(location.protocol);// it's HTTP || HTTPS
console.log(location.hash);// as #sec02, when we're in it at thy address bar 
// as http://127.0.0.1:5500/#sec02

// we'll need to separate it to check for things, to know where the user came from
// or what did he/she opened etc.

// location.reload(); //we'll need it as for when user saves settings

location.replace('https://elzero.org');// it removes current page from section history
location.assign('URL bla bla bla');//doesn't remove current page'history

// 107th lesson 00:36:31 Window Open And Close
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- width [Num]
  --- height [Num]
  --- left [Num]
  --- top [Num]

  🔴Search for🔴
  - window.Open window Features
*/
window.close()//exclusively close windows opened by JS
window.open('','_self')//target's default is _blank[2nd attr]
// 1st attr's def is blank page
// features are as for X Y Z, is it resizable or not? etc...
// 4th is boolean value for replacing as above
setTimeout(() => {
  window.open('https://google.com','', 'width=400,height=400,width=400,left=400,top=100');
}, 2000);
// width,height ... , we don't type px for pixels

// 108th lesson 00:42:25 Window History Object
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  🔴Search for🔴 to get Advanced in it
  - pushState() + replaceState()
*/
history.length;// the pages you visited and current one
history.back();// the previous page
history.forward();// the next page. if last. it'll return undefined
history.go(-1);//◀️prior one, 0 current, 1 next
history.go(-3);//third 🔽 when thou see by clicking right button on history bar in thy browser

// 109th lesson 00:45:47 Scroll, Focus, Print, Stop
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// when You Click On Esc Key When Downloading Page Resources, It Stops, as for images etc.
let myNewWindow = window.open("https://www.google.com",'','width=500,height=500,left=500');
myNewWindow.focus();//when we're at the parent page, we focus on child one
myNewWindow.close();// we can, because we opened it
// scrollTo && scroll are [equals] && supported in various browsers
// but scroll isn't supported in safari[apple's browser]
window.scrollTo(500,200);
window.scrollBy(500,200);//starting from last point, not inherently as scrollTo

window.scrollTo({
  left: 500,
  top: 200,
  behavior: 'smooth'
});
// there are some methods that scrolls an entire page,
// and some other good features

// 110th lesson 00:53:32 Scroll To Top Using ScrollX && Y
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
  // old browsers prefer using [Alias] with
*/
// we check
console.log(window.scrollX === window.pageXOffset); //true

window.onscroll = () =>{
  if (window.scrollY >= 600) {
    // console.log(`Scrolling Y Value Is ${window.scrollY}`)
    btn[1].style.display = 'block';
  }else btn[1].style.display = 'none';
}
btn[1].onclick = function (){
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth',
  });
}

// 111th lesson 00:59:12 Local Storage
/*🔴EXTREMELY IMPORTANT🔴 even more than upcoming lessons
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/
/*
  Osama spoke about this design: https://www.youtube.com/playlist?list=PLDoPjvoNmBAzvmpzF-6l3tAviiCPbwkB8
  it's named  special design master
  though he said:
  and Contains Many Practical Concepts
  in JavaScript and DOM🔴💋
*/
window.localStorage.setItem('color','#2490ff');//blue
// window.localStorage.setItem('color','#fc2455');//red
// in console, it prints as Storage

/*
  To see our Storage:
  beside console >> go to [Application]
  Storage 👇 Local Storage 👇 our site
  
  It'll show us our values as keys && values
*///all 3 methods are set
window.localStorage.fontWeight = "bold";//these are other approaches
window.localStorage['fontSize'] = "20px";
// now the get
console.log(window.localStorage.getItem('color'));// as working with any object 
console.log(window.localStorage.color);
console.log(window.localStorage['fontSize'])
// changing body BG color:
document.body.style.backgroundColor = window.localStorage.getItem('color')//any of three
// it saves the current value
// to remove we type:
window.localStorage.removeItem('fontSize');
// this removes all. clear
window.localStorage.clear();//length will be zero
// when length is +1 we use Get Key:
console.log(window.localStorage.key(0));

// 112th lesson 01:08:40 Local Storage Color Application Practice
// I brought the script from https://elzero.org/category/courses/javascript-bootcamp/

// 113th lesson 01:18:33 Session Storage And Use Cases
/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same URL = New Session
*/
// Local storage Vs. Session Storage
// session doesn't save values as local one
// 🔷when I close the TAB, session will get vanished🔷
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue"); they're different, so you can use both

// When You Open same Tab As new, it'll get A NEW SESSION
//🔴To save same session data, DUPLICATE THE TAB🔴
document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.sessionStorage.setItem("input-name",this.value);
  // don't make is as localStorage, User will be scared.
  // sessionStorage => refreshing ✅, closing ❎
};

// 114th lesson 01:25:15 BOM Challenge ❎💩
/* elzero tips:
  Don't start coding when you see problems!
  separate sections into phases[pseudo code as YOU LEARNED]
  Do each step in a separate FUNCTION
  or you'll get [spaghetti code🍕🍝]
*/
/* FORM or DIV, same functionality
  <body>
    <div class="container">
      <div class="form">
        <input type="text" class="input">
        <input type="submit" class="add" value="Add Task">
      </div>
      <div class="tasks"></div>
    </div>
    <script src="main.js"></script>
  </body>
*/
// text field eg: create Python Course [Add Task]
// tasks field => 🔼 [as block, its key is[title]] && delete button on right edge
// save values in localStorage
// delete will vanish both in storage and the element

// 115th lesson 01:27:41 Destructuring Arrays Part 1
/*
  Destructuring
  "is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps And sets them into new, distinct variables."
  - Destructuring Array
*/
let myFriends = ["Ahmed","Sayed","Ali","Maysa" ];
let [first,second,third,forth] = myFriends;// destructuring is done✔️

console.log(first);
console.log(second);
console.log(third);
console.log(forth);
// if we type: let [first = 'A'] = myFriends
// 'A' will not be valuable, it won't redeclare it, but type myFriends' first variable
// and if it's not declared it'll do declare it
// to pass an element inside the array, type an empty space as:
let [uno, dos, ,cuatro] = myFriends;// it'll pass 'Ali'

// 116th lesson 01:33:47 Destructuring Arrays Part 2
let myFriendsDist = ["Ahmed","Sayed","ali",["Shady", "Amr",["Mohamed","Gamal"]]];
console.log(myFriendsDist[3][2][1]);

// little challenge
// let alf = myFriendsDist[3][0];// use spaces!
// let bah = myFriendsDist[3][2][1];// use spaces!

// let [,,,alf,,bah,,] = myFriendsDist;//shady✅, gamal❎because I didn't access the nested array using []as
// let [,,,[alf,,[,,bah]]] = myFriendsDist;//I added one more comma
let [,,,[alf,,[,bah]]] = myFriendsDist;//✅✅
console.log(alf);// Shady
console.log(bah);// Gamal
// he used a lovely way to teach us, cloning the prior one, and only removing unimportant values,
//  changing string into our var,and finally = myFriends ||  it was identical

// 117th lesson 01:38:00 Destructuring Arrays Part 3 Swap Variables
// Destructuring Array => Swapping variables
let book = "video";
let video = "book";
/* This is swapping, too boring, see the love downwards
// Save book value in stash
let stash = book;// Video
// change Book value
book = video;// Book

// Change Video value
video = stash;// Video
*/
[book, video] = [video, book];// swapping using destructuring love
console.log(book);
console.log(video);

// 118th lesson 01:41:25 Destructuring Objects Part 1
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};
console.log(user.theName);//the normal property calling as we know
const { theName, theAge, theTitle, theCountry} = user;//for updating these the values wrap it all as🔷
// { theName, theAge, theTitle, theCountry} = user;//this = means following:
// they ask us to wrap the whole object within  (parenthesis)
({ theName, theAge, theTitle, theCountry} = user);// as this🔷

console.log(theName);// as a normal variable
// if we pass a property, we don't need to add ,, as arrays, see:
// const { theName, theAge, theCountry} = user;

// 119th lesson 01:46:20 Destructuring Objects Part 2
/*
  Destructuring Object
  -- Naming Variables
  -- add New Property
  -- Nested Object
  -- Destructuring Only Nested Objects
*/
const userNigga = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  skills:{
    html:70,
    css:80
  },
};
// const {theName: naw, theAge: algo, theCountry, theColor = "Red",skills:{html:h,css}} = userNigga; theCountry is being used before
// because we sat theColor, we type = instead of colon :
console.log(naw);
console.log(algo);
console.log(theCountry);
console.log(theColor);
// console.log(co);// we can set theColor as: {theColor: co = "Red"}
console.log(`My HTML Progress Is ${h}`);//nested object=> skills:{html}
// we don't have to type userNigga.html
// skills:{html:h} I changed html's name to 'h'
// to bring other properties we use same way: skills:{html:h, css}
console.log(`My HTML Progress Is ${css}`);

const {html:skillOne, css: skillTwo} = userNigga.skills;
console.log(`My HTML Progress Is ${skillOne}`);
console.log(`My HTML Progress Is ${skillTwo}`);

// 120th lesson 01:52:00 Destructuring Function Parameters
const userTeen = {
  theName: "Osama",
  theAge: 39,
  skills:{
    html:70,
    css:80
  },
};

showDetails(userTeen);
// function showDetails(obj){
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Progress Is ${obj.skills.css}`);
// }

function showDetails({theName:n, theAge:a,skills:{css:c}}= userTeen){
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Progress Is ${c}`);
}

// 121st lesson 01:54:50 Destructuring Mixed Content
//🔴destructuring training!!🔴
const userTraining = {
  theName: "Hanady",
  theAge: 29,
  skills:["HTML","CSS","JavaScript"],
  addresses:{
    egypt:"Cairo",
    ksa:"Riyadh",
    Palestine:"Hebron",
  },
};


function myHoney({theName:n, theAge:a,skills:j,addresses:{Palestine:p}}= userTeen){
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your Skills Are ${j}`);
  console.log(`Your Home Town Is ${p}`);
}
myHoney(userTraining);//Done✅
// teacher's working without func
const {
  theName: n,
  theAge: a,
  skills: [one, two, three],
  addresses: { egypt: e },
} = userTraining;

// 122nd lesson 01:58:50🔴Destructuring CHALLENGE🔴

// this myFriends array has 3 objects, and another nested array in each

// if chosen == 1, make destructuring to get only the first person
// if available == true, say:
// Available, if false say: Not Available
// pick the last skill

// the results must be consoled as
// Osama
// 39
// Available
// CSS
// if chosen == 2, pick the second obj, and so on
let chosen = 1;
let myFriendsChall = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
function destruct(){
  const { title: n, age: a, skills: [, s], available: free, } = myFriendsChall[chosen];
  console.log(n);
  console.log(a);
  if (free == true) console.log(`Available`);
  else console.log(`Not Available`);
  console.log(s);
}
destruct();//✅

// 123rd lesson 02:01:20 Set Data Type And Methods
/*
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  -- add
  -- delete
  -- clear
  -- has
*/
let myData = [1,1,1,2,3,"A"];
// let myUniqueData = new Set([1,1,1,2,3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);//valid though

let myUniqueData = new Set();
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");//same as updating values

// set constructor removes repetition, and only stores unique values
// set's size is the length
console.log(myData);
console.log(myUniqueData);
console.log(myUniqueData.size);
console.log(myUniqueData[0]);//undefined, not as normal arrays

myUniqueData.delete(2);//deletes the value 2
// console.log(myUniqueData.delete(2));// boolean, true, so it does and return true
// if not exists, doesn't delete, and returns false

console.log(myUniqueData);
console.log(myUniqueData.size);

// myUniqueData.clear();// clears everything AYK

// has is better than includes⚠️🔴
console.log(myUniqueData.has("A"));
console.log(`Does Set have => A ${myUniqueData.has("a".toUpperCase())}`);
// .has("a".toUpperCase())}`); I love this💗

// 124th lesson 02:09:42 Set Vs WeakSet And Garbage collector
/*
  - Set vs WeakSet
  "
    meaning references to objects in a WeakSet are held weakly
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
    
  "
  --
  Set     => Can Store Any Data Value
  WeakSet => Stores Only Collection of objects
  --
  Set     => Have Size Property
  WeakSet => Doesn't Have Size Property
  --
  Set     => Can Use ForEach
  WeakSet => Cannot Use ForEach

  Usage: Store Objects and removes them once they become inaccessible

  Search for
  🔴Garbage collection🔴 as for weakSet cleaning in CS
*/

// Type Of Data
let mySet = new Set([1,1,1,2,3,"A","A"]);
console.log(mySet);
// Size
console.log(`Size Of Elements In Set: ${mySet.size}`);

// Values + Keys Alias
let iterator = mySet.keys();//keys are alias to values,
// console.log(iterator);
// we'll see [next method] inside prototype of keys
// console.log(iterator.next());//done false
//  meaning: iteration didn't finish, it must arrive at "A"
console.log(iterator.next().value);//1
console.log(iterator.next().value);//2
console.log(iterator.next().value);//3
console.log(iterator.next().value);//A
console.log(iterator.next());//value undefined, done: true

// ForEach
mySet.forEach((el)=> console.log(el));

console.log('#'.repeat(20));

// values return iterators
// Search for 🔴values && iteration for looping in set🔴

// let myws = new WeakSet([1,1,1,2,3,"A","A"]); invalid, it needs objects
let myws = new WeakSet([{A:1,B:2}]);
console.log(myws);
// size isn't in its prototype, no need to look after it


// Values + Keys Alias
//same as size, not a function in __proto__
// Search for 🔴WeakSet Usage Cases🔴 he referred it 
// he talked about [[front-end tutorial]]⚠️ IMPORTANT

// 125th lesson 02:20:21 Map Data Type Vs Object
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map Vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has default keys
  --
  ------ Map => Key Can Be Anything [Function, object, Any Primitive Data Type]
  ------ Object => String Or Symbol
  --
  ------ Map => Key Can Be Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Be Manually
  --
  ------ Map => Can be Directly Iterated
  ------ Object => Not Directly && Needs To Use Object.keys() && so on
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing TO Map
*/
let miObject = {};
let myEmptyObject = Object.create(null);//as I read in MDN about prototype chain
let miMap = new Map();

console.log(miObject);//properties as __proto__
console.log(myEmptyObject);//no properties
console.log(miMap);
// Osama has OOP JS course
let myNewObject = {
  10: "Number",
  "10": "String",//formatter will change 10 to number type
};
// it'll overwrite it, even without changing its type
// console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
// adding other types
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function whatEver(){}, "Function");


console.log(myNewMap.get(10));//get here brings back our key name
console.log(myNewMap.get("10"));

console.log("#".repeat(15));
console.log(myNewObject);
console.log(myNewMap);//see what Osama means

// 126th lesson 02:30:20 Map Methods
/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
let myMap = new Map([
  [10, "Number"],
  ["Name", "string"],//same as set key and value downwards
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "string");

console.log(myMap.get(10));
console.log(myMap.get("Name"));//to get name's key
console.log(myMap.get(false));//gets key

console.log("####");
console.log(myMap.has(false));//boolean true
console.log("####");

console.log(myMap.size);
console.log(myMap.delete("Name"));//when returns true, it says I delete it successfully
console.log(myMap.size);//it's shorter
myMap.clear(); //no options, it clears AYK
console.log(myMap.size);

// 127th lesson 02:35:35 Map Vs WeakMap
/*
  WeakMap Allows Garbage Collector To Do Its Task Not Map.

  Map     => Key Can Be Anything
  WeakMap => Key Can Only Be Objects
*/

let mapUser = {theName: "Elzero"};
let misMap = new Map();
misMap.set(mapUser,"Object Value");
mapUser = null;// Override The Reference
console.log(misMap);

console.log("#".repeat(20));

let wMapUser = {theName: "Elzero"};
let myWeakMap = new WeakMap();
myWeakMap.set(wMapUser,"Object Value");
console.log(wMapUser);
myWeakMap = null;// Override The Reference
// it's to remove garbage collection,
// 🔴but it doesn't, because of JS structuring,
//  not as C++ and other manageable languages

// in console, go to Performance => 🧺trash, its title is [Collect garbage] and it's in memory besides it

// 128th lesson 02:42:10 Array.from Method [advanced concepts]
/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)[MapFunc ~ reduce()]
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten Teh Method + Uses arguments
*/
console.log(Array.from("Bader"));//he called the iterable as [sequence]
// it's same as split(""), here🔼

console.log(Array.from(12345));//not iterable, no output
console.log(Array.from("12345"));//iterable as string
console.log(Array.from("12345", (n)=> +n + +n));// unary because it's a string
console.log(Array.from("12345", function (n) {
  return +n + +n;
}));

let miArray = [1,1,1,2,3,4];
// let miSet = new Set(miArray);
// console.log(Array.from(miSet));

// instead of setting a set and array from it do this
console.log([...new Set(miArray)]);//these 3 dots are spread operator
// we'll learn Spread operation as a great func Osama Said[Spread syntax (...)]

function testArgs(){
  return arguments;//it's as its name
};
console.log(testArgs("Bader","Hanady","marriage"));

function af(){
  return Array.from(arguments);// this makes it as an array
};
console.log(af("Bader","Hanady","marriage"));

// 129th lesson 02:49:30 Array.copyWithin Method
/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Omitted = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Omitted = Reach The End
*/
// it's similar to mainMove in C++
let myArray = [10, 20, 30, 40, 50, "A", "B"];
/* let myArray = [10, 20, "A", "B", 50, "A", "B"];// copies indexes as this eg
  start here means the first element I copy, end means last one as if copy 
  "A", "B" they mean: 5,6;
*/
myArray.copyWithin(3);
console.log(myArray);//[ 10, 20, 30, 10, 20, 30, 40 ] weird!!
// because I didn't type where to start, it starts in 0 index
//  so it copied 4 indexes from '40'as 3 to last of array's length
// it won't make array longer
// let nigga = myArray.copyWithin(4,-1);// or 4,6
// console.log(nigga);// as Osama Asked [ 10, 20, 30, 40, "B", "A", "B" ]
// [ 10, "A", "B", 40, 50, "A", "B" ] is (-6,-2);1st para is target, 2nd para is start counting
//  so if -6,-2,-1 or 1,-2,-1; it'll target 1 index, start counting -2 for one index
// after i said this 👆, he made it as a homework, I'm smart 🤣 for now...
// he says i'll fu## you with assignments 🤣[heavy not fu%# he's polite]

// 130th lesson 02:57:25 Array.some Method
/*
  Array Methods 
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------> Element => The Current Element To Process
  ------> Index  => Index Of Current Element
  ------> Array  => The Current Array Working With
  ---- This Argument => Value To Use As This When Executing CallbackFunc
  Using
  -Check If Element Exists In Array
  -Check If Number In Range
*/
// array.some() if our condition is true it returns boolean true! and it's not as filter
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let check = nums.some(function (e){
  return e > 5;
});
console.log(check);// true, if filter it'll give 6,7, in an array
//it works in false, when true once it quits
// arrow one
check = nums.some((e)=> e > 5);
// this in array.some is originally (window), we change it as:
let aNum = 5;
let checkYo = nums.some(function (e){
  return e > this;
}, aNum);//here we changed this to our variable
console.log(checkYo);
// a little more advanced array.some func
function checkValues(arr, val) {
  return arr.some(e => e === val);
};// I made it shorter
console.log(checkValues(nums, 20));//false, if exists: true
// using objects in array.some
let range = {
  min:10,
  max:20,
}
let checkNumberInRange = nums.some(function (e){
  return e >= this.min && e <= this.max;
}, range);//false because we have nothing between 10 and 20 as min & max
// it'll be used regularly array.some Osama Said!!

// 131st lesson 03:06:50 Array.every Method
/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/
// array.every() is opposite to array.some, [all El have to be true],
//  if 1 index is false, it all returns false

const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",// this is tended to be less than mainLocation
  40: "Place 4",
}
let mainLocation = 15;

let locationsArray = Object.keys(locations)
console.log(locationsArray);
let locationsArrayNumbers = locationsArray.map((n) => +n);
//this turns array's indexes into numbers
console.log(locationsArrayNumbers);

let checkEvery = locationsArrayNumbers.every(function (e) {
  return e > this
}, mainLocation);
console.log(checkEvery);//false because of 3rd index

// 132nd lesson 03:11:10 Spread Syntax And Usage Cases
/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
console.log('Bader');
console.log(...'Bader');// it'll be B a d e r //extracted
console.log([...'Bader']);// makes them in an array

// Concatenate Arrays
let myArray1 = [1,2,3];
let myArray2 = [4,5,6];
let allArraysByBader = myArray1.concat(myArray2);// normal concat()
let allArrays = [...myArray1, ...myArray2];// using spread operator
console.log(allArrays);

// Copy Array
let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array
let myAllFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];
myAllFriends.push(...thisYearFriends);//if without spread operator, it'll be as nested array
console.log(myAllFriends);

// Use With Math Object
let myNumsSpread = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(myNumsSpread));// without spread it'll return NaN

// Spread With Objects => Merge Objects
let objOne = {
  a:1,
  b:2,
};
let objTwo = {
  c:3,
  d:4,
};
// merging objects with spread operator
console.log({ ...objOne, ...objTwo, e: 5 });

// 133rd lesson 03:18:26 Map And Set Challenge
/*
  Map And Set + What You Learned => Challenge
  Requirements
  - You Can't Use Numbers nor True Or False
  - Don't Use Array Indexes
  - You Can't Use Loop
  - You Can't Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then One Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log('Your Solution Here');//210

// ([...n1, ...n2].length) this is 7
// Math.max(...n2); this is 30
// let challengeSet = new Set(n1, n2);// why did he mentioned it?
console.log(Math.max(...n2) * [...n1, ...n2].length);//easy peasy

// 134th lesson 03:21:40 Intro & What Is Regular Expression
/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/
// it's not exclusively in JavaScript, any other language uses same concepts
let str1 = '10 20 100 1000 5000';
let str2 = 'Os1 Os12 Os123 Os123Os os12312Os123';

let invalidEmail = 'Osama@@@gmail....com';
// string && numbers => email name              [valid]
//    @              => at symbol               [valid]
// gmail || domainCo => [domain] email provider [valid]
//    .              => dot symbol              [valid]
// com || net || org => Top Level Domain [TLD]  [valid]
// let validEmail = 'Osama@gmail.com'
let validEmail = 'o@nn.sa';

let ip = '192.168.2.1';// IPv4, it's a 32bit, and IPv6 is 128bit 🤪

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'see-sth.com/';// with dash in its name
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=fdsafdsafhsda';
// all of 'em are valid

// 135th lesson 03:29:50 Regular Expression - Modifiers

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multi-lines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/
let myString = "Hello Elzero Web School I Love elzero";// 1st elz is capitalized, 2nd is smallCased
let regex = /elzero/;//[re=> regular expression]
console.log(myString.match(/Elzero/));
console.log(myString.match(regex));//both are same
// myString.match(/Elzero/i); /s/i means case-insensitive see Modifiers above!
console.log(myString.match(/Elzero/ig));//picks global insensitive
// the great thing is that it returns same in mother's array !!
console.log(myString.match(/Elzeros/ig));//null

// let newRegExp = new RegExp("pattern", "modifier(s)");

// 136th lesson 03:34:55 Regular Expression - Ranges Part 1
/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [9-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/
// ranges are great in RegExp
let tld = "Com Net Org Info Code Io" ;
let tldRe = /(org|info|io)/i;//what a real love
console.log(tld.match(tldRe));// it picks first to find, not by order in tldRe

let numsRegExp = "12345678910";
let numsRe = /[0-9]/g;//global is important
console.log(numsRegExp.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;//can't use notEqual symbol [!]
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;//what a real LOVE
console.log(practice.match(practiceRe));

// 137th lesson 03:44:55 Regular Expression - Ranges Part 2
// continuing
let myStringRegExp = "AaBbcdefG123!234%^&*";
let englishLetters = 'abcdefghijklmnopqrstuvwxyz';// how to get 'em with Regular Expression!?

let atozSmall = /[a-z]/g;
let NotatozSmall = /[^a-z]/g;
let atozCapital = /[a-z]/g;
let NotatozCapital = /[^a-z]/g;
let aceLetters = /[ace]/g;

let atozCapAndSmall = /[a-zA-Z]/g;//to get all letters
let atozCapAndSmall = /[A-Z]/gi;//I see they're same

let numbersAndSpecials = /[^a-zA-Z]/g;
let specials = /[^0-9A-Za-z]/g;// i think it's this
let craziness = /[^0-9^A-Z^a-z]/g;// this will remove [^] as others, even as /[^0-9^A-Za-z] one in middle


console.log(myStringRegExp.match(atozSmall));
console.log(myStringRegExp.match(NotatozSmall));
console.log(myStringRegExp.match(aceLetters));

// 138th lesson 03:51:00 Regular Expression - Character Classes Part 1
/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;// if (com|net) only one we type /\w@\w.com/g
// /\w/ means any ch followed by @
// let valid = /\w@\w.(com|net)/g; Osama said, this is too simplified

console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));
// line terminators are as \n \t \r

// 139th lesson 03:57:05 Regular Expression - Character Classes Part 2
/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;// either starts with span or ends with it
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test("Osama"));//false here means he's good
console.log(/(\bspam|spam\b)/ig.test("1Spam"));
console.log(/(\bspam|spam\b)/ig.test("Spam1"));
// this test pattern is usually used with if conditions to validate forms

// 140th lesson 04:02:30 RegExp - Quantifiers Part 1
/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more [or if not exists as /0\d*0/]
  n?    => zero or one [n might be existing or not as [https?]]
*/
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums1 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe1 = /0\d*0/ig;
console.log(nums1.match(numsRe1));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;// \/\/ two // with escaping
//  (www.)? means www. might exist or not, same as (https?:\/\/)?
console.log(urls.match(urlsRe));

// 141st lesson 04:11:25 RegExp - Quantifiers Part 2
/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S

// 142nd lesson 04:13:48 RegExp - Quantifiers Part 3
/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString1 = "We Love Programming";
let names1 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString1));
console.log(/^we/ig.test(myString1));
console.log(/lz$/ig.test(names1));
console.log(/^\d/ig.test(names1));// it recognizes numbers, LOVELY

console.log(names1.match(/\d\w{5}(?=Z)/ig));
// 🔼 means starts with digit, then 5 letters, 
// then (?=Z) means after these 6 characters, must have Z,
//  it will not be printed with 'em

console.log(names1.match(/\d\w{8}(?!Z)/ig));

// 143rd lesson 04:18:46 RegExp - Replace With Pattern
/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re1 = /@/ig;
console.log(txt.replaceAll(re1, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));