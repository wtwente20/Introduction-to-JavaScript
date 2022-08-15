function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

/* This logs nothing (undefined). The return in line 3 ends the 
function before the console.log() can be executed.
