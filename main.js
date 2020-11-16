const toggle = document.getElementsByClassName("toggle-bar")[0];
const links = document.getElementsByClassName("nav-elements")[0];
toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});

const navlink=document.querySelectorAll(".nav-link")

navlink.forEach((link)=>{
  link.addEventListener("click", linkaction)
})

function linkaction (){
  navlink.forEach((n)=>{
    n.classList.remove("active")
    this.classList.add("active")
  })
}


