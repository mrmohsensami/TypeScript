import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let DocOne: HasFormatter;
let DocTwo: HasFormatter;

DocOne = new Invoice('John', 'Work on the website', 1000);
DocTwo = new Payment('Larry', 'Work on the mobile app', 750);

let Docs: HasFormatter[] = [];
Docs.push(DocOne);
Docs.push(DocTwo);

console.log(Docs);
