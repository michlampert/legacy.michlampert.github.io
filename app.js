const hero = document.getElementById("hero")
const sentence = document.getElementById("sentence")
const cursor = document.getElementById("cursor")


change_cursor_color = (flag) => {
    if(flag){
        cursor.style.color = "transparent"
    }
    else{
        cursor.style.color = "black"
    }
    setTimeout(() => change_cursor_color(!flag), 700)
}

setTimeout(() => {sentence.innerHTML = ""}, 0)
// setTimeout(() => {sentence.style.color = "transparent"}, 0)


setTimeout(() => {sentence.style.backgroundColor = "darkblue"}, 1000)
setTimeout(() => {sentence.style.color = "white"}, 1000)
setTimeout(() => {sentence.innerHTML = "O, wreszcie jesteś!"}, 1000)

setTimeout(() => {sentence.style.backgroundColor = "transparent"}, 3000)
setTimeout(() => {sentence.style.color = "black"}, 3000)


" Zapraszam :)".split("").forEach(
    (letter, index) => setTimeout(
        () => {
            // let tag = document.createElement("div");
            let text = document.createTextNode(letter);
            sentence.appendChild(text);
            // hero.appendChild(tag);
        }, 3000 + index * 500 + Math.floor((Math.random()*500))
    )
)


change_cursor_color(false)