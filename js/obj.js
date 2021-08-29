// let user = {
//     name: 'John',
//     age: 30,
//     hobby: ['sport', 'fishing', 'auto'],

//     sayHi() {
//         console.log(`Hello! A am ${this.name} `);
//     },
// };

// user.sayHi = function () {
//     console.log('Hello');
// };

// user.sayHi();

// let admin = user;

// user = null;

// admin.sayHi();

// console.log(user);
// console.log(admin);

// console.log(user === admin);

// fn(){
//     console.log('this in showThis: ', this)}

// let user = {
//     name: 'David',
//     age: 60,
//     hobby: ['sport', 'fishing', 'auto'],

//     sayHi() {
//         let arrow = () => console.log(`Hello! A am ${this.name} `);

//         arrow();
//     },
// };

// user.sayHi();

// let user = {
//     name: 'John',

//     sayHi() {
//         console.log(`Hello! A am ${this.name} `);
//     },
// }(user.sayHi)();

// function methodName() {
//     let counter = 0;

//     return (counter = counter + 1);
// }

// let calculator = {
//     // ... ваш код ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () {
//         // показывает текущую ступеньку
//         console.log(this.step);
//     },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
