try {
  var x = fetch("https://jsonplaceholder.typicode.com/users");
  x.then((data) => {
    return data.json();
  }).then((user) => {
    for (let i = 0; i < user.length; i++) {
      let userEL = document.createElement("button");
      let container = document.getElementById("users");
      userEL.innerText = user[i].name;
      document.body.append(container);
      container.append(userEL);
      userEL.addEventListener("click", function (e) {
        // console.log(e.target.innerText);
        asyncFunction(i);
      });
    }
  });
} catch (error) {
  console.log(error);
}

async function asyncFunction(i) {
  try {
    let x = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + (i + 1)
    );
    let y = await x.json();
    console.log(y);
    let z = document.getElementById("posts");
    z.innerHTML = "";
    y.forEach(function (post) {
      let postEL = document.createElement("div");
      postEL.innerHTML = post.title;
      z.appendChild(postEL);
    });
  } catch (error) {
    console.log(error);
  }
<<<<<<< HEAD
  const span = document.getElementsByTagName("spans");
});
=======
}
// asyncFunction(0);
>>>>>>> bc4c670d86044b3b5a7c7285db8ef6b00c33aee8
