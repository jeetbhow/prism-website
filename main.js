import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const hamburgerMenu = document.getElementById("hamburger");

hamburgerMenu.addEventListener("click", () => {
  // Toggle the button animation
  hamburgerMenu.toggleAttribute("open");

  // Toggle the navbar
  const nav = document.querySelector("nav");
  nav.classList.toggle("hidden");
  nav.classList.toggle("h-screen");

  // Lock the menu
  const body = document.querySelector("body");
  body.classList.toggle("overflow-hidden");
});
