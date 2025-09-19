const darkToggle = document.getElementById('darkModeToggle');

const body = document.body;

darkToggle.addEventListener('click', () => {

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {

    localStorage.setItem('theme', 'dark');

  } else {

    localStorage.setItem('theme', 'light');

  }

});

window.addEventListener('DOMContentLoaded', () => {

  const savedTheme = localStorage.getItem('theme');

  if(savedTheme === 'dark') {

    body.classList.add('dark-mode');

  }

});

const form = document.getElementById('contact-form');

const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const name = form.name.value.trim();

  const email = form.email.value.trim();

  const message = form.message.value.trim();

  if(name.length < 2) {

    formMessage.style.color = 'red';

    formMessage.textContent = 'Name must be at least 2 characters.';

    return;

  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegex.test(email)) {

    formMessage.style.color = 'red';

    formMessage.textContent = 'Please enter a valid email.';

    return;

  }

  if(message.length < 10) {

    formMessage.style.color = 'red';

    formMessage.textContent = 'Message must be at least 10 characters.';

    return;

  }

  formMessage.style.color = 'green';

  formMessage.textContent = 'Message sent successfully! Thank you.';

  form.reset();

})