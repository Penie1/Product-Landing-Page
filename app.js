"use strict";

const yearsEl = document.getElementById("years");
const date = new Date();
const years = date.getFullYear();
yearsEl.innerText = years;
