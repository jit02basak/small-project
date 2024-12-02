let container = document.querySelector("#container");
let popupIcon = document.querySelector("#popup");
let loveIcon = document.querySelector("#red");



container.addEventListener("dblclick", function () {
    popupIcon.style.transform = "translate(-50%,-50%) scale(1)"
    loveIcon.style.color="red"
    

    setTimeout(function () {
        popupIcon.style.transform = "translate(-50%,-50%) scale(0)"
        
    },800)
})

