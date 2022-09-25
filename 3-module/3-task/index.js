function camelize(str) {
  let res = [];
  const arr = str.split("-");
  arr.forEach( (item, index) => {
    if (index > 0) {
      return res.push(item[0].toUpperCase() + item.slice(1));
    }
    return res.push(item);
    });
    res = res.join("");
    return res
}
