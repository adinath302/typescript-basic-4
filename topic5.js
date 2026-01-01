// -- classes & objects : public & private & protected , access modifire
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// public - you can change the value from anywhere in the code file
// private - only accessible inside the class
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
// 2. inside those classes which extends the protected class 
// example --
var bottlemaker = /** @class */ (function () {
    function bottlemaker() {
        this.name = "milton";
    }
    return bottlemaker;
}());
// "extends" means metalbottle contains all the values of bottlemaker also
var metalbottlemaker = /** @class */ (function (_super) {
    __extends(metalbottlemaker, _super);
    function metalbottlemaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "metal";
        return _this;
    }
    metalbottlemaker.prototype.changename = function () {
        // if the name is private then it can't be changed
        this.name = "cello";
    };
    return metalbottlemaker;
}(bottlemaker));
var b1 = new metalbottlemaker();
b1.changename();
