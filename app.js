const btn = document.getElementById("btn");
var navlinks = document.querySelectorAll(".navlink");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
const navMobileVue = document.querySelector(".nav-mobile-vue");
const works = document.querySelectorAll(".new");
const text = document.querySelector(".text");

const textLoad = () => {
  text.textContent = "massi";
  setTimeout(() => {
    text.textContent = "a Web Developer";
  }, 5950);
  setTimeout(() => {
    text.textContent = "a Designer";
  }, 11950);
  setTimeout(() => {
    textLoad();
  }, 17950);
};

window.onload = function () {
  textLoad();
};
btn.addEventListener("click", function () {
  if (btn.className == "btn close") {
    btn.className = "btn open";
    btn.innerHTML = "see less";
    for (let work of works) {
      work.className = "new work more";
    }
  } else {
    if (btn.className == "btn open") {
      btn.className = "btn close";
      btn.innerHTML = "see more";
      for (let work of works) {
        work.className = "new work nomore";
      }
    }
  }
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.forEach((link) => link.classList.remove("active-a"));
    link.classList.add("active-a");
  });
});

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

navMobileVue.addEventListener("mousedown", (event) => {
  event.preventDefault();
});
