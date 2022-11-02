"use strict";

document.querySelector(".submit").addEventListener("click", function () {
  let mail = document.querySelector(".mail").textContent;
  if (document.getElementById("email").value === mail) {
    document.querySelector(".container-info").style.display = "block";
    document.querySelector(".container-input").style.display = "none";
  } else {
    confirm("Email incorrect");
  }
});

const listMore = document.querySelectorAll(".viewmore");
const listLess = document.querySelectorAll(".viewless");
const info = document.querySelectorAll(".list-hidden");

for (let i = 0; i < listMore.length; i++) {
  listMore[i].addEventListener("click", function () {
    info[i].style.display = "block";
    listMore[i].classList.add("hidden");
  });
}

for (let n = 0; n < listLess.length; n++) {
  listLess[n].addEventListener("click", function () {
    info[n].style.display = "none";
    listLess[n].classList.add("hidden");
  });
}
