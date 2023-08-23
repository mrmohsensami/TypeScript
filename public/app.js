"use strict";
// 10. Type Casting
// const anchor = document.querySelector('a')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// //inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// 11. classes
// 12.Access modifiers
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('Client 1', 'Details 1', 250);
var invTwo = new Invoice('Client 2', 'Details 2', 400);
// console.log(invOne.format());
// console.log(invTwo.format());
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
for (var _i = 0, invoices_1 = invoices; _i < invoices_1.length; _i++) {
    var inv = invoices_1[_i];
    console.log(inv.client); // Public
    // console.log(inv.details); // Private
    console.log(inv.amount); // Readonly
}
console.log(invOne.format());
