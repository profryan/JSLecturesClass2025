const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

fruits.push(berries)

//to access blueberry
x= fruits[3][1]

//create a new variable and nest both arrays
const allFruits = [fruits, berries]

//concat() - concatenate arrays
x = berries.concat(fruits)

//spread operator(...) - concatenate with
x = [...fruits, ...berries]

//flat() - flatten an array
const arr = [1,2,[3,4,5], 6, [7,8]]
x=arr.flat()

//static methods of Array Object
//isArray(0 - check if it is an array)
x = Array.isArray(fruits)

//from() - create an array from an array like value
x = Array.from('12345')

//of() - create an arry from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c)



// x = allFruits

console.log(x);