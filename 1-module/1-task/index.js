function factorial(n) {
  if (n>1) {
    for (i=(n-1); i>1; i--) {
      n = n * i;
    };
  } else {
    var n = 1;
  }
  return (n);
};