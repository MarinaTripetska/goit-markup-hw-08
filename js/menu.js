import refs from "./refs.js"
const { menuBtn, mobileMenu} = refs;

export default (() => {
      menuBtn.addEventListener("click", () => {
        const expanded =
            menuBtn.getAttribute("aria-expanded") === "true" || false;
        
        menuBtn.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", !expanded);

        mobileMenu.classList.toggle("is-open");
        document.body.classList.toggle("menu-open");
    });
})();