const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Toggle Dark Mode';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '60px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.padding = '10px 15px';
  toggleBtn.style.zIndex = '1000';
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});

