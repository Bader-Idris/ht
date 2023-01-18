// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 ** 5); // 100000
console.log(1e1 ** 5); // 100000
console.log(5e1 ** 1); // 100000
console.log(1e1 ** 5); // 100000
console.log(100_000 * 1); // 100000
console.log(200_000 / 2); // 100000
console.log(100000 - 0); // 100000
console.log(); // 100000
console.log(); // 100000
console.log(); // 100000
// 1st assignment
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// 2nd assignment ✅
console.log(Number.MAX_SAFE_INTEGER); // 16 with max safe integer
// 3rd assignment ❎

let myVar = "100.56789 Views";
console.log(Math.floor(myVar.split(" ", 1))); // 100✅ can use parseInt instead as parseInt(myVar);
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57✅ craziness with love💚🤪
// 4th assignment✅

let num = 10;
console.log(toString(num)); // 2
console.log(+(num.toString()));//my way ... not accepted, because using isInteger is mandatory[Number.isInteger]
/*
let num = 10;
console.log(Number.isInteger(num.toString())); false

let num = 10;
console.log(Number.isInteger(num)); true
but how to make it as [2]
*/
// 5th assignment❎

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log((+(parseInt(flt).toFixed(2)))); // 10
console.log(); // 10
// 6th assignment