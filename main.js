const toggle = document.getElementsByClassName("toggle-bar")[0];
const links = document.getElementsByClassName("nav-elements")[0];
const navlink=document.querySelectorAll(".nav-link")

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

