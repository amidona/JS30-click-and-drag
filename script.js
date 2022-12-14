const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft; // factors in your margins
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if(!isDown) return; //stop the fn from running when you're not clicked down
   e.preventDefault(); //stop selecting of text on screen
   const x = e.pageX - slider.offsetLeft;
   const walk = (x - startX) * 3; // the higher the number you multiply the faster you'll scroll
   slider.scrollLeft = scrollLeft - walk;
});