document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return;
  }

  // Mock form submission
  setTimeout(() => {
    status.textContent = "Thanks! Your message has been sent.";
    status.style.color = "green";
    document.getElementById("contactForm").reset();
  }, 1000);
});
