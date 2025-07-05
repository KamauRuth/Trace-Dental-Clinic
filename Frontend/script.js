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
};

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
};

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNav);

/**
 * header active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// ✅ ✅ ✅ MAIN DOM LOADED BLOCK ✅ ✅ ✅
document.addEventListener('DOMContentLoaded', () => {

  // -- Call back form --
  const callbackURL = '/api/callback';
  const form = document.getElementById('callbackForm');
  const thankYou = document.getElementById('thankYou');

  if (form) {
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
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .then(response => {
          console.log(response);
          if (response.result === "success") {
            form.style.display = "none";
            if (thankYou) thankYou.style.display = "block";
          } else {
            alert("Submission failed");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Error submitting form.");
        });
    });
  }

  // ✅ -- Chatbot --
// ✅ -- Chatbot --
const chatbotIcon = document.getElementById('chatbot-icon');
const chatContainer = document.getElementById('chat-container');
const chatClose = document.getElementById('chat-close');

if (chatbotIcon && chatContainer && chatClose) {
  chatbotIcon.addEventListener('click', () => {
    chatContainer.style.display = 'flex'; // show
  });

  chatClose.addEventListener('click', () => {
    chatContainer.style.display = 'none'; // hide
  });
}

const chatForm = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const chatbox = document.getElementById('chatbox');

if (chatForm && input && chatbox) {
  chatForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const message = input.value.trim();
    if (!message) return;
    appendMessage('You', message);
    input.value = '';

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      const data = await response.json();

      if (data.reply) {
        appendMessage('Trace', data.reply);
      } else {
        appendMessage('Trace', 'Sorry, I did not understand that.');
      }
    } catch (error) {
      console.error(error);
      appendMessage('Trace', 'Error connecting to server.');
    }
  });

  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.style.margin = '5px 0';
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
  }
}


});
