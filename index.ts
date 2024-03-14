// ЗАВДАННЯ №1
let age: number = 50;
let user: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize = undefined;
let callback = (a: number) => { return 100 + a };


// ЗАВДАННЯ №2
let anything: any = -20;
anything = 'Text';
anything = {};


// ЗАВДАННЯ №3
let some:any;
some = 'Text';

let str: string;

str = some;


// ЗАВДАННЯ №4
let person: readonly any[] = ['Max', 21];


// ЗАВДАННЯ №5
enum Status { LOADING, READY };


// ЗАВДАННЯ №6
let smt: string | number;


// ЗАВДАННЯ №7
let choose: 'enable' | 'disable';


// ЗАВДАННЯ №8
function showMessage(message: string) {
 console.log(message);
}

function calc(num1: number, num2: number) {
 return num1 + num2;
}

function customError(error: string) {
 throw new Error(error);
}


// ЗАВДАННЯ №9

type acount = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: number
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
}

const page2 = {
 title: 'Python or Js',
 likes: 5,
 accounts: ['Alex'],
 status: 'close',
}
