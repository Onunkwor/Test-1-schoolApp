const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

elements.forEach((element) => observer.observe(element));

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const clickedFaq = faq;
    faqs.forEach((otherFaq) => {
      if (otherFaq !== clickedFaq && otherFaq.classList.contains("open")) {
        otherFaq.classList.remove("open");
        const otherIcon = otherFaq.querySelector(".faq__icon");
        otherIcon.innerHTML = '<i class="fa-solid fa-plus"></i>'; // Set the icon back to plus
      }
    });

    // Toggle the clicked FAQ
    clickedFaq.classList.toggle("open");
    const icon = clickedFaq.querySelector(".faq__icon");
    if (clickedFaq.classList.contains("open")) {
      icon.innerHTML = '<i class="fa-solid fa-minus"></i>'; // Set the icon to minus
    } else {
      icon.innerHTML = '<i class="fa-solid fa-plus"></i>'; // Set the icon back to plus
    }
  });
});

// Show menu
const menu = document.querySelector(".nav__menu");
const open = document.querySelector("#open-menu-btn");
const close = document.querySelector("#close-menu-btn");

const handelButtonVisibility = () => {
  if (window.innerWidth > 1024) {
    open.style.display = "none";
    close.style.display = "none";
    menu.style.display = "flex";

    // Remove the event listeners for open and close buttons
    // open.removeEventListener("click", openClickHandler);
    // close.removeEventListener("click", closeClickHandler);
  } else {
    open.style.display = "inline-block";
    close.style.display = "none";

    // Attach event listeners for open and close buttons
    open.addEventListener("click", openClickHandler);
    close.addEventListener("click", closeClickHandler);
    // Close the menu when visibility changes
    menu.style.display = "none";
  }
};

const openClickHandler = () => {
  menu.style.display = "flex";
  close.style.display = "inline-block";
  open.style.display = "none";
};

const closeClickHandler = () => {
  menu.style.display = "none";
  close.style.display = "none";
  open.style.display = "inline-block";
};

// Initial call to handleButtonVisibility
handelButtonVisibility();

// Attach a resize event listener to update button visibility
window.addEventListener("resize", handelButtonVisibility);
