try {
  var x = fetch("https://jsonplaceholder.typicode.com/users");
  x.then((data) => {
    return data.json();
  }).then((user) => {
    for (let i = 0; i < user.length; i++) {
      let userEL = document.createElement("button");
      let container = document.getElementById("users");
      userEL.innerText = user[i].name;
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
      z.append(postEL);
    });
  } catch (error) {
    console.log(error);
  }
}
// asyncFunction(0);
