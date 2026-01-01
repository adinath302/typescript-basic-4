// classes & objects : this.keyword

// explain - this keyword is used to refer the current object inside the class

class pen {
  name = "parker";

  changename() {
    this.name;
    this.changename2; // to call the function inside the class using this keyword
  }
  changename2() {
    console.log("hello");
  }
}
let p2 = new pen();
export { pen, p2 };

class bottlemaker {
  constructor(public name: string) {
    this.name = name; // to access the name only inside the class
  }
}

let as = new bottlemaker("cello");
export { bottlemaker, as };
