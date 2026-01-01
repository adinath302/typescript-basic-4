// a = [1, 2, 3, 4, 5, 6, 7, 8];
// b = a;

// // primitive and refrence values

// 12  // -- primitive
// harsh // -- primitive
// sharma // -- primitive
// huhu // -- primitive
// true // -- primitive
// [] // -- refrence
// {} // -- refrence
// () // -- refrence
// "apple" // -- primitive
// false // -- primitive
// 12.34 // -- primitive

// ---

// var a= [1,2,3,4,5,6,];  // refrence
// var b= a; // it can't copy , it is refrence of a if you change in b it will change in a

// var a= 12;  // primitive
// a = b // you can copy it directly , it will not change in a

// --
// // primitive types --
// let a = 23; // primitive number
// let b = "key"; // primitive string
// let c = true; // primitive boolean

// --
// Array -

// let arrs = [];
// let arr = [1, 2, 3, "harsh"]; // string & number type array
// let arrd = [1, 2, 3, { name: "harsh" }, { number: 12 }]; // object with value of string & number & number type array

// --
// tuples - a special type of array that represents a fixed-length sequence of elements, where each element can have a specific, predetermined type and order
// let arr: [string, number] = ["harsh", 12]; // tuple example
// let arr2: [number, string] = [24, "harsh"];

// --
// enum ( enumerations) - Enumeration, or enum, in TypeScript is a feature for defining a set of named numeric or string constants

// enum userroles {
//   ADMIN = "admin",
//   GUEST = "user",
//   SUPER_ADMIN = "super_admin",
// }
// userroles.SUPER_ADMIN; // to use

// enum statuscodes {
//   ABANDON = "abandoned status code 500",
//   NOTFOUND = "not found status code 404",
// }

// statuscodes.ABANDON // to use
// console.log(statuscodes.ABANDON)

// -- any and unknown type - "any" variable which is not assign by any value or type will be "any" type by default

// let a; // type is any(default type)

// let a:number; // this is how you can assign type to variable before using it in typescript

// let x: string = "ketan"; // this is how we can assign type to variable in typescript

// let a; // assigned type is any
// let a: unknown; // assigned type is unknown - before using this value you have to check its type before using it
// a = 12;
// a = "harsh";

// if (typeof a === "string") {
//   console.log(a.toUpperCase());
// }

// -- void type 👇
// explain - if you are creating a function you have to define what type of value(data) it was returing first

//-- void is used when you don't want to return any value

// function abcd(): void {
//   // if the function is not returning anything then assigned it with "void" type
//   console.log("hello");
// }
// function abcs(): number {
//   // if the function is returning number then assigned it with "Number" type
//   return 23;
// }
// function abca(): string {
//   // if the function is returning string then assigned it with "string" type
//   return "harsh";
// }
// function abcc(): boolean {
//   // if the function is returning boolean then assigned it with "boolean" type
//   return true;
// }

// -- Null -- "null" type is used to represent the intentional absence of any object value

// let a: null;

// never -- "never" type is used to represent values that never occur

// function abcd(): never { // never type is used to represent values that never occur
//   while (true) {}
// }

// abcd();

//  -- type inference & annotations 👇

// // type inference - type inference is a feature of TypeScript that automatically determines the type of a variable based on its initial value.
// let a = 12;

// // annotations 👇 - annotations are a feature of TypeScript that allow you to specify the type of a variable before its initialization.
// let b: string; // type annotation
// b = "Hello";

// -- type of annotation 👇
// let a: number | boolean | string; // type of annotation - type of annotation is a feature of TypeScript that allows you to specify the type of a variable before its initialization.
// after this it can take any type of value

// a = "hellow";
// a = true;
// a = 23;

// -- type assertion 👇 - type assertion is a feature of TypeScript that allows you to specify the type of a variable after its initialization.
// let c = "harsh";
// let d = c as string;

// type annotation(function) - you can use type annotion inside your function

function arr(a: number, b: string): void {} // this is how you can use type annotation inside your function in typescript 
