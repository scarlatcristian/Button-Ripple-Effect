"use strict";
const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    // Where we click inside the button
    // console.log(x, y);

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Where the button is positioned
    // console.log(buttonTop, buttonLeft);

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // x and y values from where the button starts
    // console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    // Removing the span element
    setTimeout(() => circle.remove(), 500);
  });
});
