let menuOpenbBtn = document.getElementById("menuopen");
let closebtn = document.getElementById("closebtn");
let blurbg = document.getElementById("blurbg");
let form = document.getElementById("form");

menuOpenbBtn.addEventListener("click", open);
closebtn.style.display = "none";
function open() {
  menuOpenbBtn.style.display = "none";
  blurbg.style.background = "rgba(0, 0, 0, 0.5)";
  closebtn.style.display = "block";
}
closebtn.addEventListener("click", close);

function close() {
  menuOpenbBtn.style.display = "block";
  blurbg.style.background = "";

  closebtn.style.display = "none";
}

const accordion = document.querySelectorAll(".content-container");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// const el = document.querySelector(".leaf-move");

// window.addEventListener("mousemove", (e) => {
//   const mouseX = ((e.clientX / innerWidth) * 100) | 0;
//   // const mouseY = ((e.clientY / innerHeight) * 100) | 0;
//   const left = -mouseX - 70 + "%";
//   // const top = -mouseY - 50 + "px"
//   el.style.backgroundPosition = left;
//   // el.style.top = top;
//   console.log("is it working ");
// });
// ------------------------------parallax effect -------------------

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let x;
    let _depth1 = `${100 - (_mouseX + _w) * 0.002}% ${
      0 - (_mouseY + _h) * 0.001
    }%`;
    let _depth2 = `${42 + (_mouseX + _w) * 0.002}% ${-(_mouseY + _h) * 0.001}%`;
    let _depth3 = `${-5 - (_mouseX - _w) * 0.001}% ${(_mouseY - _h) * 0.001}%`;
    let _depth5 = `${50 + (_mouseX - _w) * 0.005}% ${(_mouseY - _h) * 0.001}%`;
    let _depth6 = `${100 + (_mouseX - _w) * 0.08}% ${
      100 + (_mouseY - _h) * 0.02
    }%`;
    let _depth7 = `${100 + (_mouseX - _w) * 0.05}% ${
      180 - (_mouseY - _h) * 0.1
    }%`;
    let _depth8 = `${60 - (_mouseX - _w) * 0.01}% ${(_mouseY - _h) * 0.001}%`;
    x = ` ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth3}, ${_depth2}, ${_depth1}`;
    if (_w < 500) {
      let _depth3 = `${50 + (_mouseX - _w) * 0.01}% ${(_mouseY - _h) * 0.001}%`;
      x = ` ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth3}`;
    }
    elem.style.backgroundPosition = x;
  }
})();

///NewsLetter Form

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  console.log(email);

  try {
    // fetch("http://localhost:3000/api/newsletter", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json; charset=UTF-8",
    //   },

    //   body: JSON.stringify({
    //     email: email,
    //   }),
    // });
    fetch("http://localhost:3000/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "example@example.com" }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  } catch (err) {
    console.log(err);
  }
});
