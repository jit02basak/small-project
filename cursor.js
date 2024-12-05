let main= document.querySelector(".main");
let cursor= document.querySelector(".cursor")

main.addEventListener("mousemove", function( dot){
cursor.style.left= dot.x+"px";
cursor.style.top= dot.y+"px";


})
 