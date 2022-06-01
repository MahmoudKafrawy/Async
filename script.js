var x = fetch("https://jsonplaceholder.typicode.com/users");

x.then((data) => {
  return data.json();
}).then((user) => {
  for (var i = 0; i < user.length; i++) {
    userEL = document.createElement("button");
    userEL.innerHTML = user[i].name;
    userEL.addEventListener("click", function () {
      var y = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${spans[i]}`);
      async function t() {
        try {
          var ids = await getids;
          console.log(ids);
        } catch (e) {
          console.log(e);
        }
      }
      t();
    });
    document.body.append(userEL);
  }
});

const buttons = document.getElementsByTagName("button");

// for (i = 0; i < buttons.length; i++) {
//   // buttons[i].addEventListener("Click", function () {
//     // var y = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${spans[i]}`);
//     // y.then((data) => {
//     //   console.log(data);
//     // });

//     // async function t() {
//     //     try {
//     //         var ids = await getids;
//     //         console.log(ids);
//     //         var user = await getUser(ids[2]);
//     //         console.log(user);
//     //         console.log(await getAddress(user.name));

//     //     }
//     //     catch (e) {
//     //         console.log(e);

//     //     }
//     // }
//     // t();
//     // console.log(5);
//   };
