"use strict";

const yearsEl = document.getElementById("years");
const headerEl = document.getElementById("header");
const navbar = document.getElementById("nav-bar");

const date = new Date();
const years = date.getFullYear();
yearsEl.innerText = years;

navbar.addEventListener("click", (e) => {
  e.preventDefault();

  const navLinks = document.querySelector(e.target.getAttribute("href"));
  const CoordOfHeaderTop = navLinks.getBoundingClientRect().top;
  const CoordOfHeaderleft = navLinks.getBoundingClientRect().left;
  const headerHeight = headerEl.getBoundingClientRect().height;
});
