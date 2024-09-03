const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");

function setAriaExpandedFalse() {
  dropdownBtns.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeAllDropdowns() {
  dropdowns.forEach((drop) => {
    drop.classList.remove("active");
  });

  setAriaExpandedFalse();
}

function toggleHamburger() {
  if (navMenu.classList.contains("show")) {
    closeNavigation();
  } else {
    openNavigation();
  }
}

function openNavigation() {
  navMenu.classList.add("show");
  hamburgerBtn.querySelector("i").classList.remove("bx-menu");
  hamburgerBtn.querySelector("i").classList.add("bx-x");
}

function closeNavigation() {
  navMenu.classList.remove("show");
  hamburgerBtn.querySelector("i").classList.remove("bx-x");
  hamburgerBtn.querySelector("i").classList.add("bx-menu");
  closeAllDropdowns();
}

hamburgerBtn.addEventListener("click", toggleHamburger);

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");

    dropdowns.forEach((drop) => {
      if (drop.id !== dropdownIndex) {
        drop.classList.remove("active");
      }
    });

    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

document.documentElement.addEventListener("click", closeAllDropdowns);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDropdowns();
  }
});

const dropdownLinks = document.querySelectorAll(".dropdown a");
dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeAllDropdowns();
    toggleHamburger();
  });
});

// Hover effect
dropdownBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    if (isDesktop()) {
      closeAllDropdowns();
      const dropdownIndex = btn.dataset.dropdown;
      const dropdownElement = document.getElementById(dropdownIndex);

      dropdownElement.classList.add("active");
      btn.setAttribute("aria-expanded", "true");
    }
  });

  btn.addEventListener("mouseleave", function (e) {
    if (isDesktop()) {
      const dropdownIndex = btn.dataset.dropdown;
      const dropdownElement = document.getElementById(dropdownIndex);

      dropdownElement.addEventListener("mouseleave", function () {
        dropdownElement.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      });
    }
  });
});

function isDesktop() {
  return window.innerWidth >= 601; // Adjust the threshold based on your design
}

function toggleExpand(element) {
  var expandableText = element.parentElement;
  expandableText.classList.toggle("expanded");
  var readMoreText = expandableText.querySelector(".read-mores");
  if (expandableText.classList.contains("expanded")) {
    readMoreText.textContent = "Read Less";
  } else {
    readMoreText.textContent = "Read More";
  }
}
