let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.mouse-effect li');

window.addEventListener("mousemove",cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(link=> {
    link.addEventListener("mouseleave",()=> {
        mouseCursor.classList.remove("link-grow")
        mouseCursor.classList.remove("hovered-link");
    })

    link.addEventListener('mouseover',()=> {
        mouseCursor.classList.add("link-grow");
        mouseCursor.classList.add("hovered-link");
    })
});