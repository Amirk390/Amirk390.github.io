// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [2, 3, 4, 5, 6];
console.log('myArr = ', myArr);

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  console.log('i = ', i);
  console.log('total = ', total);
  console.log('myArr[i] = ', myArr[i]);

  console.log('Running code (total + myArr[i]');

  total += myArr[i];

  console.log('total = ', total);
  console.log('-----');
}

// i = 0     total = 0 + 2    total is now 2
// i = 1     total = 2 + 3    total is now 5
// i = 2     total = 5 + 4
