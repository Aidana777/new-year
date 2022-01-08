const btn=document.getElementById("btn")
const box=document.getElementById("box")
const boxbtn=document.getElementById("box-btn")
btn.addEventListener("click",function() {
    box.style.display= "block"
})

boxbtn.addEventListener("click",function() {
    box.style.display= "none"
})

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}