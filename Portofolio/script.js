// 1 typing effect
const texts = [
  "Web Developer 💻",
  "UI/UX Enthusiast 🎨",
  "Mahasiswa Sistem Informasi 🎓",
  "Open to Collaboration 🤝",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = texts[textIndex];
  const display = document.getElementById("typing-text");

  if (!display) return;

  if (isDeleting) {
    display.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    display.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // tunggu 1.5 detik sebelum hapus
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // loop ke teks pertama
  }
  // Kecepatan mengetik vs menghapus
  const speed = isDeleting ? 60 : 100;
  setTimeout(typeEffect, speed);
}

// Mulai typing effect saat halaman selesai load
window.addEventListener("load", () => {
  setTimeout(typeEffect, 500);
});

// ===== 2. CURSOR KEDIP =====
// Buat karakter "|" kedip-kedip seperti cursor

const cursor = document.getElementById("cursor");
if (cursor) {
  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }, 500);
}

// ===== 3. NAVBAR BERUBAH SAAT SCROLL =====
// Navbar makin gelap dan ada shadow saat scroll ke bawah

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Sudah scroll ke bawah
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.5)";
    navbar.style.padding = "8px 0"; // navbar mengecil
  } else {
    // Masih di atas
    navbar.style.boxShadow = "none";
    navbar.style.padding = "16px 0";
  }
});

// ===== 4. ANIMASI MUNCUL SAAT SCROLL =====
// Elemen akan fade in + naik dari bawah saat terlihat di layar

// Tambahkan style animasi ke halaman
const style = document.createElement("style");
style.textContent = `
  .fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Pilih semua elemen yang mau diberi animasi
const animatedEls = document.querySelectorAll(
  "#about p, #skills .card, #project .card, #contact .btn",
);

// Tambahkan class fade-up ke semua elemen tersebut
animatedEls.forEach((el) => el.classList.add("fade-up"));

// Pakai IntersectionObserver untuk deteksi elemen masuk layar
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Delay bertahap supaya animasinya tidak serempak
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 100);
        observer.unobserve(entry.target); // stop observe setelah muncul
      }
    });
  },
  {
    threshold: 0.1, // muncul saat 10% elemen terlihat
  },
);

animatedEls.forEach((el) => observer.observe(el));

// ===== 5. ACTIVE NAV LINK SAAT SCROLL =====
// Menu navbar otomatis highlight sesuai section yang sedang dilihat

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
