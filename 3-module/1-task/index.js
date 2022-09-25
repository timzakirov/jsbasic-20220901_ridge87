function namify(users) {
  let userNames = [];
  users.forEach( (item) => {
  	userNames.push(item.name);
  });
  return userNames;
}
