// Type:console.log(Math.floor());
//! Awesome, it figures the bug and warns you exactly what it is.
let x = 5

// ----------------------------------------------------------------
// 06- Type Annotations With Arrays //? usages to mentioned lesson
let all: (string | number | boolean) = 'first value';

all = "hello";
all = 100;
all = true;

let myParts: string[] = [
  "hand",
  "leg",
  "head",
  "whatnot",
  10
];// it formats it on paste

for (let i = 0; i < myParts.length; i++) {
  console.log(myParts[i].repeat(3)); // bug because only works with string
  // you can fix the number | add string[] as we did
}
// ----------------------------------------------------------------
// 07 - Type Annotations With Multidimensional Arrays