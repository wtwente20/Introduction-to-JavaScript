const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* This program will not result in error, it
will result in 'bar'. The two const declarations 
are seperate entities so they do not result in
error.
