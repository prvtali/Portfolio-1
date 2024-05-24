class ScrollMove {
    constructor(obj) {
      this.section = document.querySelector(obj.section);
      window.addEventListener("scroll", () => {
        this.fadeAnim(this.section, 1);
      });
    }
    fadeAnim(section, coordinate) {
      const fadeRight = section.querySelectorAll(".fade-right");
      fadeRight.forEach((fadeRight) => {
        const speed = fadeRight.getAttribute("data-speed");
        fadeRight.style.transition = speed + "ms";
        if (
          window.scrollY >=
          section.offsetTop - section.offsetHeight * coordinate
        ) {
          fadeRight.classList.add("active");
        } else {
          fadeRight.classList.remove("active");
        }
      });
    }
  }
  const scrollMove = new ScrollMove({
    section: ".scroll",
  });