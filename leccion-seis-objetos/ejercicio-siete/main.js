'use strict';

const name = {};

const job = 'developer';


name.firstName = 'María José';
name.lastName = 'Pérez';
name.age = 28;
name.job = `${job}`;


console.log(name);


name.firstName = 'Gloria';
name.age = parseInt(`${name.age}`) + 1;

console.table(name);
