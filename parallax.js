const bg = document.getElementById("background")
// let alpha = bg.offsetHeight / document.body.scrollHeight
// console.log(alpha)

window.addEventListener("scroll", () => {
    let val = window.scrollY
    let alpha = bg.offsetHeight / document.body.scrollHeight
    bg.style.top = -val * alpha + "px"
})