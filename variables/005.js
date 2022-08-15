let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/* This program logs 'bar'. If the console.log() is
inside the local block, it will display 'qux'.
