//Navbar Slider
const navSlider = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    hamburger.addEventListener('click',() => {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate navLinks
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 500ms ease-in-out forwards ${index/5}s`;
            }
        
        });
    });
    
}


//Main App
const app = () => {
    navSlider();

}
app();