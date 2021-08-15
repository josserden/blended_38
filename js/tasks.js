// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const element of products) {
//         if (element.name === productName) {
//             return element.price;
//         }
//     }
//     return null;
// }

// console.log(getProductPrice('Radar'));

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const newArray = [];

//     for (const element of products) {
//         if (element[propName]) {
//             newArray.push(element[propName]);
//         }
//     }
//     return newArray;
// }

// function getAllPropValues(propName) {
//     const values = [];

//     for (let product of products) {

//         const keys = Object.keys(product);
//         for (let key of keys) {
//             if (key === propName) {
//                 values.push(product[key]);
//             }
//         }
//     }
//     return values;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('category'));

// const product = { name: 'Radar', price: 1300, quantity: 4 };

// console.log(product['name']);
// console.log(product['category']);

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],

//     updateBook(oldName, newName) {
//         let index = this.books.indexOf(oldName);

//         this.books.splice(index, 1, newName);

//         return this.books;
//     },
// };

// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));

// const atTheOldToad = {
//     potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//     addPotion(potionName) {
//         if (this.potions.includes(potionName)) {
//             return `${potionName} уже есть !`;
//         }

//         this.potions.push(potionName);

//         return this.potions;
//     },
// };

// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Visibility'));
// console.log(atTheOldToad.addPotion('Visibility'));

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         for (const element of this.potions) {
//             if (element.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }

//         this.potions.push(newPotion);
//         this.getPotions();
//     },

//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//                 this.getPotions();
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },

//     updatePotionName(oldName, newName) {
//         for (const element of this.potions) {
//             if (element.name === oldName) {
//                 return (element.name = newName);
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };

// console.log(undefined === undefined && undefined === undefined);

const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

    updatePotionName(oldName, newName) {
        // this.potions.splice(this.potions.indexOf(oldName), 1, newName);
        // return this.potions;
    },
};

console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
