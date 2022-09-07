function ucFirst(str) {
  let res = '';
  if (str) {
    let x = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
  		res += str[i];
    }
    return x + res;
  } else {
    return res;
  }
}
