function factorial(n) {
  if (n>1) {
    for (let i=(n-1); i>1; i--) {
      n = n * i;
    };
  } else {
    n = 1;
  }
  return n;
};