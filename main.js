/* File: main.js */
document.addEventListener('DOMContentLoaded', () => {
  // ===== Toggle Navigation =====
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  // Pastikan elemen ada sebelum menambahkan event listener
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
    });
  }

  // ===== Typing Effect =====
  const texts = [
    "Odoo Developer.",
    "Frontend Developer.",
    "Backend Developer.",
    "UI/UX Enthusiast.",
  ];
  let idx = 0;
  let charIdx = 0;
  const typingTextEl = document.getElementById("typing-text");

  function type() {
    // Jika elemen tidak ada, hentikan
    if (!typingTextEl) return;

    const current = texts[idx];
    // Masih ada karakter yang harus diketik?
    if (charIdx < current.length) {
      typingTextEl.textContent += current.charAt(charIdx++);
      setTimeout(type, 100);
    } else {
      // Setelah selesai mengetik satu kata, tunggu 2 detik lalu mulai erase
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (!typingTextEl) return;

    if (charIdx > 0) {
      // Hapus satu karakter terakhir
      typingTextEl.textContent = typingTextEl.textContent.slice(0, --charIdx);
      setTimeout(erase, 50);
    } else {
      // Jika semua karakter sudah dihapus, pindah ke teks berikutnya
      idx = (idx + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  // Mulai animasi typing setelah DOM selesai dimuat
  if (typingTextEl) {
    typingTextEl.textContent = "";
    setTimeout(type, 1000);
  }



const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Modal image preview
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');

  document.querySelectorAll('.module-images img').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('show');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // Klik di luar gambar untuk tutup modal
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
