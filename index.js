"use strict";
// ЗАВДАННЯ №1
let age = 50;
let user = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
// ЗАВДАННЯ №2
let anything = -20;
anything = 'Text';
anything = {};
// ЗАВДАННЯ №3
let some;
some = 'Text';
let str;
str = some;
// ЗАВДАННЯ №4
let person = ['Max', 21];
// ЗАВДАННЯ №5
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
// ЗАВДАННЯ №6
let smt;
// ЗАВДАННЯ №7
let choose;
// ЗАВДАННЯ №8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError(error) {
    throw new Error(error);
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
