// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  // parallax effect
  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-effect").forEach((shift) => {
      const position = shift.getAttribute("parallax-value");
      console.log(position);
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  gsap.from(".rtl-animation", { opacity: 0, x: 100, duration: 2 });
  gsap.from(".ltr-animation", { opacity: 0, x: -100, duration: 2 });

  gsap.to(".always-rotate-animation", {
    rotation: "360",
    duration: 60,
    ease: "none",
    repeat: -1,
  });

  const items = document.querySelectorAll(".counter-animation");

//   gsap.from(items, {
//     textContent: 950,
//     duration: 5,
//     ease: "none",
//     snap: { textContent: 1 },
//     // stagger: 5,
//     // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
//   });

  //   gsap.from(".rtl-animation", {
  //     scrollTrigger: {
  //       trigger: ".u-section-2",
  //       markers: true,
  //       toggleActions: "play pause resume reset",
  //       start: "50% 80%",
  //       end: "50% 60%",
  //       scrub: true,
  //     },
  //     opacity: 0,
  //     x: 100,
  //     duration: 1,
  //   });
});
