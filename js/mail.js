const place = document.getElementById("place")
const gmail = document.getElementById("gmail")
const contact = document.getElementById("contact")

gmail.addEventListener("mouseover",
    () => {
        place.innerHTML = "michlampert@gmail.com"
    }
)

contact.addEventListener("mouseleave",
    () => {
        place.innerHTML = "Odezwij się!"
    }
)

