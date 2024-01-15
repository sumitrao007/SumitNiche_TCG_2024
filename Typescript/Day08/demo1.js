"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = exports.add = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    // constructor(){
    //     console.log("u r in parameter less constructor")
    // }
    function Myclass(id, f, l) {
        this.id = id;
        this.fname = f;
        this.lname = l;
    }
    Myclass.prototype.display = function () {
        console.log("\n            Id          :: ".concat(this.id, "\n            First Name  :: ").concat(this.fname, "\n            Last name   :: ").concat(this.lname, "\n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
function add(a, b) {
    return (a + b);
}
exports.add = add;
exports.pi = 3.14;
// let obj=new Myclass(9,'Sumit','Raokhande');
// obj.display();
