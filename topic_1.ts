//    Topic -
// Interfaces and Type Aliases
// Defining interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersection types

// __________________________________________________________

// Defining interfaces 👇 - a blueprint or contract that defines the shape of an object
// interface User {
//   // an interface acts as a blueprint or contract that defines the defines the shape of an object, without providing the implementation details.
//   name: string;
//   email: string;
//   password: string;
//   gender?: string; //option property if you want to use it if not then don't use it , it's optional it won't show error if you don't use it "?"
// }

// function getDataUser(obj: User) {}

// getDataUser({
//   name: "harsh",
//   email: "harsh@.com",
//   password: "1234",
// });

// using interfaces to define object shapes 👇

// example 2
// interface car {
//   // defining an interface named 'car' to store car details(data types )
//   name: string;
//   model: number;
//   price?: number; // optional
// }

// function abce(obj: car) {
//   obj.price;
//   obj.name = "kartik";
// }

// console.log(abce);

// example 3
// interface product {
//   name: string;
//   model: string;
//   price: number;
//   gender?: string; // "?" optional property
// }

// function abcd(object: product) {}

// abcd({
//   name: "tv",
//   model: "lg",
//   price: 45000,
//   gender: "male", // optional property
// });

// console.log(abcd);

// exmple 4 - extending interfaces

// interface form {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string; // optional property
//   number: number;
// }

// function abc(obj: form) {}

// abc({
//   name: "harsh",
//   email: "harsh@gmail.com",
//   password: "sdfadsf",
//   number: 3244343,
// });

// Extending interfaces  👇
// explain  - In TypeScript, interfaces can extend one or more other interfaces, adopting their properties and methods. This is done using the extends keyword and is a core feature for promoting code reuse, modularity, and creating a clear type hierarchy.

// interface user {
//   name: string;
//   email: string;
//   password: string;
// }

// admin interface is extending user interface that means the admin interface have(can access) all the properties of user interface
// interface admin extends user{
//   admin : boolean;
// }

// function abd(obj:admin){
//   obj.admin
// }

// Example 1 -
// at this time both interfaces have their own properties but when we use it will merge both interfaces properties it will never give error
// interface abcd {
//   name: string;
// }

// interface abcd {
//   email: string;
// }

// function abcd(obj: abcd) {
//   obj.name;
//   obj.email;
// }

// abcd({ name: "kunal", email: "adinaht@gmail.com" });

// fundamental of type aliases 👇

// explain - allow you to create custom names for any type, improving code readability and maintainability in your project

// example 1 -
// type num = number | string |null; //; this called as union type alias
// let a = num // now this variable can take values of type num, string or null

// example 2 - type alias with function
// type x = number | string;
// function add(a: x) {}

// add("hello");
// add(5);
// add(true); // error

// object types  👇 - you can use type alieses to define the shape of object , which can then be reused across diffrent function and variable .

// union types 👇
// explain - allow you to create custom names for any type, improving code readability and maintainability in your project
// let x: number | string; // union type - "|" this is union type it can take number or string

// x: "kartik";
// p: 23434;
