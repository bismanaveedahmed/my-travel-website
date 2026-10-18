// Opens and closes the nav menu on small screens.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
});
