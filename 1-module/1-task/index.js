function factorial(n) {
  if (n>1) {
    for (let i=(n-1); i>1; i--) {
      let n = n * i;
    };
  } else {
    let n = 1;
  }
  return n;
};