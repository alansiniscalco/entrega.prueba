const body = document.querySelector("body");
const navbar = document.querySelector("navbar");
const menu = document.querySelector("menu");
const menuBtn = document.querySelector("menu-btn");
const cancelBtn = document.querySelector("cancel-btn");


menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disableScroll");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disableScoll");
}


window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}