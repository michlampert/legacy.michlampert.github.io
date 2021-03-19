const description = document.getElementById("description")
const outside = document.getElementById("outside")


window.addEventListener("scroll", () => {
    let val = window.scrollY

    if(window.innerWidth > 800){
        let {x:x1,y:y1} = description.getBoundingClientRect()

        description.style.top = (val-y1) * 0.1 - y1 / 8 + "px"

        let {x:x2,y:y2} = outside.getBoundingClientRect()

        outside.style.top = -(val-y2) * 0.05 + "px"
    }
    else{
        let {x,y} = outside.getBoundingClientRect()

        outside.style.top = -(val-y) * 0.02 + "px"
    }
})