const hamMenuBtn = document.querySelector('.hamburger-menu')
const linksMenue = document.querySelector('.links')

hamMenuBtn.addEventListener("click", () => {
    const hamTop = document.querySelector('.ham-top')
    const hamBottom = document.querySelector('.ham-bottom')
    const hamMiddle = document.querySelector(".ham-middle")
    
    linksMenue.classList.toggle('show-links')
   document.body.classList.toggle('body-overflow-hidden')

    hamTop.classList.toggle('ham-topClick')
    hamBottom.classList.toggle('ham-bottomClick')
    hamMiddle.classList.toggle('dispaly-none')
})

