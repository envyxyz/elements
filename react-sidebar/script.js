let nav = document.querySelector("main.navigation");
let toggle = document.getElementsByClassName("icon")[0];
let n = 1;

toggle.addEventListener("click", () => {
  n++;
  if (n % 2 == 0) {
    nav.classList.remove("closed");
    nav.classList.add("opened");
  } else {
    nav.classList.add("closed");
    nav.classList.remove("opened");
  }
});
