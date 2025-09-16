// Import our custom CSS
import "../scss/styles.scss";

// Import Bootstrap components we need
import { Popover, Carousel, Dropdown } from "bootstrap";

// Initialize carousel
const carousel = document.querySelector("#amazonCarousel");
if (carousel) {
  new Carousel(carousel, {
    interval: 5000,
    ride: "carousel",
  });
}

// Initialize popovers
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

// Initialize dropdowns
document.querySelectorAll(".dropdown-toggle").forEach((dropdown) => {
  new Dropdown(dropdown);
});
