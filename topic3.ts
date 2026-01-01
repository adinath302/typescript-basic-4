// intro to classes & objects
// creating class
// class device {
//   name = "lg";
//   price = 12000;
//   category = "digital";
// }

// let d1 = new device();

// class bottle { // constructor
//   radius = 120;
//   price = 100;
//   color = "blue";
// }

// let b1 = new bottle();

// classes & object constructor

// Constructor - is not holding the data but it's shape

// example 1
// class bottlemakerFactory {
//   constructor(public name: string, public price: number) {}
// }

// let b1 = new bottlemakerFactory("milton", 1200);

// export {b1};

// example 2

// class carmakerfactor { // this is a constructor with public access modifier
//   constructor(public model_name: string, public price: number) {}
// }

// let p1 = new carmakerfactor("audi", 230000); // this is a object

// export { carmakerfactor, p1 };

// example 3

// class humanmakerfactory {
//   age = 0;
//   constructor(name: string, color: string) {}
// }

// let j1 = new humanmakerfactory("harsh", "blue");

// export { humanmakerfactory, j1 };

// example 4

// this is class ⤵
// class bottlemaker {
//   // this is constructor ⤵
//   constructor(
//     public brand: string,
//     public price: number,
//     public color: string,
//     public material: string
//   ) {}
// }
// let k1 = new bottlemaker("milton", 2300, "yellow", "plastic");

// let k2 = new bottlemaker("cello", 1200, "red", "still");

// export { bottlemaker };

// example 5

// class music {
//   constructor(
//     public name: string,
//     public artist: string,
//     public genre: string
//   ) {}
// }
// let x1 = new music("hallelujah", "harsh", "rock");
// export { music, x1 };

// timeframe - 1:46:36

class toyesmaker {
  minage = 12; // this is default
  constructor(
    public name: string,
    public price: number,
    public color: string,
    public material: string
  ) {}
}
let k1 = new toyesmaker("milton", 2300, "yellow", "plastic");
export { toyesmaker };

// pen is a class
class pen {
  // this is constructor functions ⤵
  constructor(public color: string, public price: number){};
}

let a = new pen("blue", 12); // this is object
let b = new pen("yellow", 10); // this is object
let c = new pen("pink", 2); // this is object
c.color ="green";
export { pen, a ,b,c};

