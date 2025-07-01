'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



/**
 * header active
 */


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");




toggleBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
  });



window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



// call back form
const callbackURL = '/api/callback';

  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('callbackForm');
  const thankYou = document.getElementById('thankYou');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      contact: formData.get('contact'),
    };

    fetch(callbackURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
      if (response.result === "success") {
        form.style.display = "none";
        if (thankYou) {
          thankYou.style.display = "block";
        }
      } else {
        alert("Submission failed");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error submitting form.");
    });
  });
});

