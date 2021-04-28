// create your loops here.
var i;

// For Loop 1
for (i = 0; i < 10; i++) {
  console.log(i);
}

// For Loop 2
for (i = 0; i < 20; i += 2) {
  console.log(i);
}

// For Loop 3
// Note this loop runs 101 times, but I wanted the 'Blast off!'
for (i = 100; i >= 0; i = i - 1) {
  if (i > 0) {
    console.log('T-minus: ', i);
  } else {
    console.log('Blast off!');
  }
}
