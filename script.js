var x = fetch("https://jsonplaceholder.typicode.com/users");

x.then((data) => {
  return data.json();
}).then((user) => {
  for (var i = 0; i < user.length; i++) {
    userEL = document.createElement("span");
    userEL.innerHTML = user[i].name;
    document.body.append(userEL);
  }
});

