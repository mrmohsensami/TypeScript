// 1.Compile
// const input = document.querySelector('#search');
// console.log(input);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 2.Type Basics
//  (Implicit Type )
// let fname = 'John';
// let age = 34;
// let isMale = true;
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// };
// console.log(circ(10));
// 3. Objects and Array
// let names = ['John', 'Peter', 'Mary'];
// names = 'alex'; // Error
// names[1] = 24; // Error
// names.push('Alex'); // Ok
// names[1] = 'Bob'; // Ok
// let mixed = ['John', 34];
// mixed[1] = 'Bob'; // Ok
// mixed.push('Kevin'); // Ok
// let person = {
//     name: 'John',
//     age: 34,
//     isMale: true,
// };
// person.email = 'email@example.com'; // Error
// person.name = 10; // Error
// 4. explicit types
// let fName: string;
// let age: number;
// let isMale: boolean;
// let names: string[];
// let numbers: number[];
// numbers.push(4); // Error
// let mixed: (string | number)[] = []; // Ok
// mixed.push(10); // Ok
// mixed.push('John'); // Ok
// let person: object;
// person = {
//     name: 'John',
//     age: 34,
//     isMale: true,
// };
// person = [];
// let person2: {
//     name: string;
//     age: number;
//     isMale: boolean;
// };
// 5. any type
// let all: any;
// all = 10;
// all = 'John';
// all = true;
// all = [10, 'Alex', 30];
// all = {
//     name: 'John',
//     age: 34,
//     isMale: true,
// };
// let mixed: any[] = [];
// mixed.push(10);
// mixed.push('John');
// mixed.push(true);
// let person: { name: any; age: any };
// person = { name: 'John', age: 34 };
// 6. tsconfig
// tsc ./src/sandbox.ts --outDir ./public -w
// tsc --init
// tsc -w // if we have tsconfig
// 7.Function Basics
// let greet: Function;
// greet = function (name: string, age?: number, isMale: boolean = true): string {
//     return name;
// };
// console.log(greet('John'));
// 8. Type Aliases
// type s = string;
// type n = number;
// type b = boolean;
// type snb = s | n | b;
// let mixed: snb;
// type objectType = {
//     name: string;
//     age: number;
//     isMale: boolean;
// };
// let user: objectType;
// user = {
//     name: 'John',
//     age: 34,
//     isMale: true,
// };
// 9. Function Signatures
// let greet: (a: string, b: string) => void;
// greet = (a: string, b: string) => {
//     console.log(a + '' + b);
// };
// type objectType = { name: string; age: number };
// let person: (obj: objectType) => void;
// person = (John: objectType) => {
//     console.log(John);
// };
// person({ name: 'John', age: 34 });
// 17. Generics
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'John', age: 34 });
console.log(docOne.name);
var docTwo = {
    uid: 100,
    resourceName: 'book',
    data: { name: 'John' },
};
console.log(docTwo);
