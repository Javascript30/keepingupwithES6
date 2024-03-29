"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var myDiv = document.getElementById("main");
var myArr = [1, 2, 3, 4, 5, 7, 8];

for (var _i = 0, _myArr = myArr; _i < _myArr.length; _i++) {
  var prop = _myArr[_i];
  myDiv.innerHTML += "<p>".concat(prop, "</p>");
}

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "sayHi",
    value: function sayHi() {
      console.log("Hi, ".concat(this.name));
    }
  }]);

  return Person;
}(); // eslint-disable-next-line no-unused-vars


var kim = new Person("Kimutai", 34);
kim.sayHi();
var sally = new Person("Sally", 16);
sally.sayHi();
sally.sayHi();
kim.sayHi();
console.log("HeYYY!!!");