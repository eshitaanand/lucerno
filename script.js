// JS dropdown toggle for mobile
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
});
  

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    navLinks.classList.add("open");
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("show");
  });
});

// Show popup on page load
    window.onload = () => {
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('loginPopup').style.display = 'block';
    };

    function submitLogin() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;

      if (user && pass) {
        alert("Logged in as: " + user); // Replace with real auth logic
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('loginPopup').style.display = 'none';
      } else {
        alert("Please enter username and password");
      }
    }



    function changeQty(delta) {
      const qtyInput = document.getElementById('qty');
      let value = parseInt(qtyInput.value);
      value = isNaN(value) ? 1 : value + delta;
      if (value < 1) value = 1;
      qtyInput.value = value;
    }