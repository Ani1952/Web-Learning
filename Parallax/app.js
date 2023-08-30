const text = document.getElementById('text');
const ltree = document.getElementById('tree-left');
const rtree = document.getElementById('tree-right');
const lgate = document.getElementById('gate-left');
const rgate = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let val = window.scrollY;

    text.style.marginTop = val * 2.5 + "px";
    ltree.style.left = val * -1.5 + "px";
    rtree.style.left = val * 1.5 + "px";
    lgate.style.left = val * -0.5 + "px";
    rgate.style.left = val * 0.5 + "px";

})