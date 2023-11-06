var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

// index of Banana
var positionIndex = fruits.indexOf('Banana');
console.log(positionIndex);

// Replaced Banana with Mango
var fruits = ['Apple', 'Banana', 'Orange'];
fruits[1] = 'Mango';
console.log(fruits);

// Remove Orange and Watermelon added
fruits.pop('Orange');
fruits.push('Watermelon');
console.log(fruits);
