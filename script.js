const slider = document.querySelector(".slider");
const p=document.getElementById("p");
const max = window.innerWidth / 2;
const images=Array.from(document.getElementsByClassName("image"));
console.log(images);

const handleMouseDown = (e) => {
    slider.dataset.welp = e.clientX;
};

const handleMouseMove = (e) => {
    if (parseFloat(slider.dataset.welp) === 0) return;

    let currentPos = parseFloat(slider.dataset.welp) - e.clientX;
    let currentPerc = (currentPos / max) * -100;

    let finalperc=Math.max(Math.min(parseFloat(slider.dataset.prev)+currentPerc,0),-93);
    
    slider.dataset.perc=finalperc;
    slider.style.transform = `translate(${finalperc}%,-50%)`;

    images.forEach(image => {
        image.style.objectPosition=`${finalperc+100}% 50%`
    });
};

const handleMouseUp = (e) => {
    slider.dataset.welp = "0";
    slider.dataset.prev=slider.dataset.perc;
};
window.onload=()=>{
    p.style.opacity=1;
    window.addEventListener("mousedown", (e) => handleMouseDown(e));    
    window.addEventListener("mousemove", (e) => handleMouseMove(e));
    window.addEventListener("mouseup", (e) => handleMouseUp(e));
}