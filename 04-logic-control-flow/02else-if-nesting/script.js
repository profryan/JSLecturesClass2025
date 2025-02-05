//else if: multiple conditions

const d = new Date(14, 2, 2023, 21, 0, 0);
const hour = d.getHours();

console.log(hour);
//if statement good morning / good evening

// if (hour < 12) {
//   console.log('Good morning!');
// } else if (hour < 18) {
//   console.log('Good afternoon');
// } else {
//   console.log('Good Evening');
// }

//##############################################
// nested if

// if (hour < 12) {
//   console.log('Good morning!');
//   if (hour === 6) {
//     console.log('Wake up');
//   }
// } else if (hour < 18) {
//   console.log('Good afternoon');
// } else {
//   console.log('Good Evening');
//   if (hour >= 21) {
//     console.log('ZzzZZzzzzZzzz');
//   }
// }

//##############################################
if (hour >= 9 && hour < 18) {
  console.log('Bootcamp Time');
}

if (hour === 6 || hour === 21) {
  console.log('Brush your teeth');
}