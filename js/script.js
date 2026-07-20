const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const btnTopo = document.getElementById("btn-topo");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.classList.add("show");
    } else {
        btnTopo.classList.remove("show");
    }
};

btnTopo.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
