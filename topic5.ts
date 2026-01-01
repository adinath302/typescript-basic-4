// -- classes & objects : public & private & protected , access modifire

// public - you can change & access the value from anywhere in the code file
// private - only accessible inside the class itself

// class pen {
//   constructor(private color: string) {}

//   changing() { // method ⤵ if inside the class
//     this.color = "yellow";
//   }
// }

// let p1 = new pen("gray");
// // p1.changing();

// // p1.color = "pink";

// export { pen, p1 };

// this is an class ⤵
// class bottlemaker {
//   public halua: string = "halua"; // if it's private then it only accesable inside this class nothing else
//   constructor(public name: string) {} // this is a constructor with public access modifier
// }

// class metalbottlemaker extends bottlemaker {
//   constructor(name: string) {
//     super(name); //super will pass the name to the parent class
//   }

//   getValue() {
//     console.log(this.name, this.halua); // this will print("cello")
//   }
// }

// let b1 = new bottlemaker("milton");
// let b2 = new metalbottlemaker("chilten");

// b2.getValue();

// export { bottlemaker, metalbottlemaker, b1, b2 };

// --  protected
// explain - two way you can access the protected value
// 1. inside it's own the class
// 2. inside sub-classes ( those classes which extends the protected class )
// example --

// class bottlemaker {
//   protected name = "milton";
// }

// // "extends" means metalbottle contains all the values of bottlemaker also
// class metalbottlemaker extends bottlemaker {
//   public material = "metal";
//   changename() {
//     // if the name is private then it can't be changed
//     this.name = "cello";
//   }
// }

// let b1 = new metalbottlemaker();
// b1.changename();

// export { bottlemaker, metalbottlemaker, b1 };


// timeframe  - 2:19:00