function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let res = '';
    for (let i = 0; i < maxlength; i++) {
      res += str[i];
    } 
    return res + "...";
  } else {
    return str;
  }
}