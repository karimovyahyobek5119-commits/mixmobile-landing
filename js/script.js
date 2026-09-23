// Smooth scrolling for in-page links (Services, Contact)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId) || document.querySelector(`[id="${targetId}"]`);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
