const $ = (name: string) => document.querySelectorAll(name);
const id = (name: string) => document.getElementById(name);

const toggleClass = (el: Element, className: string, forClass?: string) => {
  if (forClass === undefined) {
    el.classList.toggle(className);
  } else {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
      el.classList.add(forClass);
    } else {
      el.classList.add(className);
      el.classList.remove(forClass);
    }
  }
};

const arrowDown = $(".hero-section__text--arrow-down")[0] as Element;
const LogoBTT = $(".logo");
const hamburguer = $(".hamburguer");
const popUp = $(".pop-up");

arrowDown.addEventListener("click", () => {
  id("index")!.scrollIntoView({ behavior: "smooth", block: "center" });
});

LogoBTT.forEach((el) =>
  el.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  })
);

hamburguer.forEach((el) => {
  el.addEventListener("click", () => {
    toggleClass(el, "ph-list-fill", "ph-x-fill");
    toggleClass(popUp[0], "off");
  });
});
