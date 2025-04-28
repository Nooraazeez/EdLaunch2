// script.js

// Open modals
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });
  
  // Close modals
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.parentElement.parentElement.style.display = 'none';
    });
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });
  // Open modals
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden'; // LOCK SCROLL
  });
});

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.parentElement.style.display = 'none';
    document.body.style.overflow = 'auto'; // UNLOCK SCROLL
  });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
    document.body.style.overflow = 'auto'; // UNLOCK SCROLL
  }
});
// Scroll animation
const animatedElements = document.querySelectorAll('[data-animate]');

function checkScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
