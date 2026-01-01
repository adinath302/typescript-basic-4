// classes & objects : this.keyword
// explain - this keyword is used to refer the current object inside the class
var pen = /** @class */ (function () {
    function pen() {
        this.name = "parker";
    }
    pen.prototype.changename = function () {
        this.name;
        this.changename2; // to call the function inside the class using this keyword
    };
    pen.prototype.changename2 = function () {
        console.log("hello");
    };
    return pen;
}());
var p2 = new pen();
// export { pen, p2 };
var bottlemaker = /** @class */ (function () {
    function bottlemaker(name) {
        this.name = name;
        this.name = name; // to access the name only inside the class
    }
    return bottlemaker;
}());
var as = new bottlemaker("cello");
// export { bottlemaker, as };
