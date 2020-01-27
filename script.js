'use strict';

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};


console.log(4/0);
console.log('str' / 5);
console.log("Penis");

let something;
console.log(something);

let persone = {
    name: "Jhon",
    age: 25, 
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg', 'apple.bmp'];

// console.log(arr[2]);

// let answer = confirm("Are you here?");

// console.log(answer);


let answer = prompt("Есть ли вам 18?", "Да");

console.log(typeof(answer));
// alert("Hello World");