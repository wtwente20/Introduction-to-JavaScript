let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`)
}
