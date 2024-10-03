
// Smooth scrolling for social links
document.querySelectorAll('.social-icons a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetUrl = this.getAttribute('href');
    window.open(targetUrl, '_blank');
  });
});
