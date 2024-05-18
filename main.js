import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// const hamburgerMenu = document.getElementById("hamburger");
const pricingTabs = document.querySelectorAll(".pricing-tab");
const priceCards = document.querySelectorAll(".price-card");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (e) => {
  hamburger.toggleAttribute("active");
  const menu = document.querySelector("nav");
  menu.classList.toggle("hidden");
});

pricingTabs.forEach((tab) =>
  tab.addEventListener("click", handlePriceTabClick),
);

// hamburgerMenu.addEventListener("click", () => {
//   // Toggle the button animation
//   hamburgerMenu.toggleAttribute("open");

//   // Toggle the navbar
//   const nav = document.querySelector("nav");
//   nav.classList.toggle("hidden");
//   nav.classList.toggle("h-screen");

//   // Lock the menu
//   const body = document.querySelector("body");
//   body.classList.toggle("overflow-hidden");
// });

function handlePriceTabClick(e) {
  pricingTabs.forEach((tab) => tab.removeAttribute("active"));
  e.target.toggleAttribute("active");

  priceCards.forEach((card) => card.classList.add("hidden"));

  const targetKey = e.target.getAttribute("key");
  for (const card of priceCards) {
    if (card.getAttribute("key") === targetKey) {
      card.classList.remove("hidden");
      card.classList.add("flex");
    }
  }
}
