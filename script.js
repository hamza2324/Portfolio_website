/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/* =====================================================
   SMOOTH PAGE TRANSITION (LINK FADE)
===================================================== */
const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Ignore external links
    if (!href || href.startsWith("http") || href.startsWith("#")) return;

    e.preventDefault();
    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});


/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - this.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - this.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = this.querySelector(".ripple");
    if (ripple) ripple.remove();

    this.appendChild(circle);
  });
});
