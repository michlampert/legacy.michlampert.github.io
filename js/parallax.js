const bg = document.getElementById("background")

window.addEventListener("scroll", () => {
    let val = window.scrollY
    let alpha = 0.6 * window.innerHeight / document.body.scrollHeight
    bg.style.top = -val * alpha + "px"
})