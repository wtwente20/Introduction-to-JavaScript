let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/* The program above will produce an infinite
loop. This is due to the loop breaking itself
and starting over because counter gets stuck
at 2, meaning it is unable to execute the break
command. */
