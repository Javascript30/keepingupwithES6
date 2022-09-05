"use strict";

var myDiv = document.getElementById("main");
var myArr = [1, 2, 3, 4, 5, 7, 8];

for (var _i = 0, _myArr = myArr; _i < _myArr.length; _i++) {
  var prop = _myArr[_i];
  myDiv.innerHTML += "<p>".concat(prop, "</p>");
}