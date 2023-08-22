// 10. Type Casting
// const anchor = document.querySelector('a')!;
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// //inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;

// 11. classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Client 1', 'Details 1', 250);
const invTwo = new Invoice('Client 2', 'Details 2', 400);
console.log(invOne.format());
console.log(invTwo.format());
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
