console.log("Lets crack it.")

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');
console.log("my navLinks from cursor",mouseCursor)

window.addEventListener("mousemove",cursor)

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link=> {
    // console.log(mylinks for looping, link)
    link.addEventListener('mouseleave',()=> {
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hovered-link')
    })
    link.addEventListener('mouseover',()=> {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hovered-link')
    })
})