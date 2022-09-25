function filterRange(arr, a, b) {
  const res = [];
  arr.forEach( (item) => {
    if (a <= item && item <= b) {
      res.push(item);
    }
  })
  return res
}
