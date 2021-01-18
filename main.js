const toggle = document.getElementsByClassName("toggle-bar")[0];
const links = document.querySelector(".nav-elements")
const navlink=document.querySelectorAll(".nav-link")
const navcontent=document.querySelector(".nav-content")


toggle.addEventListener("click", () => {
     links.classList.toggle("active-nav");


  if (links.classList.contains("active-nav")){
    document.body.style.overflow="hidden"

    navlink.forEach((eachlink)=>{
      eachlink.addEventListener("click", (e)=>{
        links.classList.remove("active-nav")
        document.body.style.overflow="visible"
      
      })
    })
  
  } else {
    document.body.style.overflow="visible"
  }
 
});

navlink.forEach((link)=>{
  link.addEventListener("click", linkaction)
})

function linkaction (){
  navlink.forEach((n)=>{
    n.classList.remove("active")
    this.classList.add("active")
  })
}

window.addEventListener("scroll", ()=>{
  
  if(this.scrollY > 20 ){
    console.log("hi");
    navcontent.classList.add("sticky-nav")
 } else {
  navcontent.classList.remove("sticky-nav")
 }

})


var typed = new Typed(".typing", {
  strings: ["Backend developer", "freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});


sr.reveal('.home-content',{}); 
sr.reveal('.home-img',{delay: 200}); 


sr.reveal('.about-content',{}); 
sr.reveal('.tech-stack',{delay: 400}); 



sr.reveal('.portfolio-section',{});
sr.reveal('.pf-image',{interval: 600}); 



sr.reveal('.contact-section',{interval: 200}); 

sr.reveal('.footer-section',{interval: 200}); 

