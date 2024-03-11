"use strict";

const yearsEl = document.getElementById("years");
const headerEl = document.getElementById("header");
const navbar = document.getElementById("nav-bar");

const date = new Date();
const years = date.getFullYear();
yearsEl.innerText = years;

navbar.addEventListener("click", (e) => {
  e.preventDefault();
});
