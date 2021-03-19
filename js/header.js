const header = document.getElementById("header")

window.addEventListener("scroll", () => {
    let val = window.scrollY
    if(val > 100){
        header.style.backgroundColor = "rgba(10,10,20,0.5)"
    }
    else{
        header.style.backgroundColor = "rgba(10,10,20,1)"
    }
})
