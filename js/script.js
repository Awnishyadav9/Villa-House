const openSlidebar = document.querySelector('.Open')
const closeSlider = document.querySelector('.ml')
const open = document.querySelector('.closeSlider')


openSlidebar.addEventListener('click', ()=>{
    console.log("clicked me")
    open.style.display = 'inline-block'
})

closeSlider.addEventListener('click' , ()=>{
    console.log("close slide bar")
    open.style.display = 'none'
})



const carousal = document.querySelectorAll('.photo')
// console.log(carousal)
const nxt = document.querySelector('.nxt')
const prev = document.querySelector('.prev')
let  currentSlide = 0;

function showSlide(n){
    carousal[currentSlide].style.display = 'none'
    currentSlide = (n + carousal.length) % carousal.length;
    carousal[currentSlide].style.display = 'flex'
}

prev.addEventListener('click',()=>{
    showSlide(currentSlide-1);
})
nxt.addEventListener('click',()=>{
    showSlide(currentSlide+1);
})
showSlide(currentSlide);
