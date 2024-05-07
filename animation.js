let navBar = document.getElementById("nav-bar-color");
let trendingP = document.getElementById("trendingSec");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            navBar.classList.remove("opacity-1");
            trendingP.classList.remove("opacity-2");
        }else{
            navBar.classList.add('opacity-1');
            trendingP.classList.add('opacity-2');
        }
    })
})

const hiddenElement = document.querySelectorAll('.watcher')
hiddenElement.forEach((el) => observer.observe(el));

function showMenu(){
    let subMenu = document.getElementById("burger-menu-wrap");
    let burger2 = document.getElementById("burger-2");
    let burger3 = document.getElementById("burger-3");


    subMenu.classList.toggle("open-menu");
    burger2.classList.toggle("burger-2-opened");
    burger3.classList.toggle("burger-3-opened");
}

function showHomeMenu(){
    let subMenu = document.getElementById("burger-menu-wrap");
    let burger2 = document.getElementById("burger-2");
    let burger3 = document.getElementById("burger-3");


    subMenu.classList.toggle("open-menu");
    burger2.classList.toggle("burger-2-opened");
    burger3.classList.toggle("burger-3-opened");
}