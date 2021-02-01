// Menu

const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', function() {
    menu.classList.add('active')
})

closeElem.addEventListener('click', function() {
    menu.classList.remove('active')
})

// Skills automation

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span')

counters.forEach((item, index) => {
    lines[index].style.width = item.innerHTML
})