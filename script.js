// Ripple Effect Script
document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const circle = document.createElement("span");
      circle.classList.add("ripple-circle");
      this.appendChild(circle);
  
      const d = Math.max(this.clientWidth, this.clientHeight);
      const x = e.clientX - this.getBoundingClientRect().left - d / 2;
      const y = e.clientY - this.getBoundingClientRect().top - d / 2;
  
      circle.style.width = circle.style.height = `${d}px`;
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
  
      setTimeout(() => circle.remove(), 600);
    });
  });
  