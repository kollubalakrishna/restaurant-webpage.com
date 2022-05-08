let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

let formBtn = document.querySelector("#login-btn");
let formclose= document.querySelector("#form-close");

let loginform = document.querySelector(".login-form-container");

let videobtn = document.querySelectorAll(".vid-btn");





window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginform.classList.remove('active');
}


searchBtn.addEventListener('click' , ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


formBtn.addEventListener('click' , ()=>{
    loginform.classList.add('active')
});

formclose.addEventListener("click" , ()=>{
    loginform.classList.remove('active');
});

videobtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active');

        let src = btn.getAttribute('data-src')
        document.querySelector("#video-slider").src = src;
    });
});