const shiny = document.querySelector(".shiny_block");
const sec1 = document.querySelector(".section1");
const sec2 = document.querySelector(".section2");
const aboutMe = document.getElementById("aboutMe");
const exp = document.getElementById("exp");
let expTop = exp.offsetTop;

document.addEventListener("mousemove", (event) => {
    shiny.style.left = event.clientX + "px";
    shiny.style.top = event.clientY + "px";
});

window.onscroll = ()=>{
    if (window.scrollY >= expTop) {
        sec2.classList.add("active");
        sec1.classList.remove("active");
    }else{
        sec1.classList.add("active");
        sec2.classList.remove("active");
    }
    console.log("scroll")
}