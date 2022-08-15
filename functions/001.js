let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* This logs 1 to the console. foo doesn't affect the
value assigned to bar on line 1 because the scope is different. The bar variable on line 3 
is not the same as the one on line 1. foo() has no 
effect on the final output.
