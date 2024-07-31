
//notification 
let isHidden = false;
let el = document.querySelector(".notification-info");

let conn = setInterval(function(){
    el.style.visibility = isHidden ? "visible" : "hidden";
    isHidden = !isHidden;
},2000);

const closeNo = document.querySelector(".model-close-notification")
closeNo.addEventListener("click",function(e){
    e.preventDefault();
    clearInterval(conn)
        el.style.visibility = "hidden";
        localStorage.setItem("notificationClose",true)

})

//modal display
const modelclose = document.querySelector(".model-close")
const display = document.querySelector(".model-view")
window.onload = function(){
    setTimeout(function(){
        display.style.visibility = "visible"
    },2000)
}
modelclose.addEventListener("click",function(){
    display.style.visibility = "hidden"
})
window.onclick = function(){
    display.style.visibility = "hidden";
}


//sidebar menu 
const mobilemenu = document.querySelector(".mobile-menu-list")
const overlay = document.querySelector(".overlay")
const hambuger = document.querySelector(".hambuger")
const closebtn = document.querySelector(".close")

hambuger.addEventListener('click', function (event) {
    event.preventDefault();
    mobilemenu.classList.add('active');
    overlay.classList.add('active');
})
closebtn.addEventListener("click", function () {
    overlay.classList.remove('active');
    mobilemenu.classList.remove('active');
})
window.onclick(function(){
    mobilemenu.classList.remove('active');
    overlay.classList.remove('active');


})


const pluses = document.querySelectorAll(".plus");
const closes = document.querySelectorAll(".closeed")
const shows = document.querySelectorAll(".side-menu-list")
const mens = document.querySelectorAll(".menu-list")

for (let i = 0; i < pluses.length; i++) {

    pluses[i].addEventListener("click", function (event) {
        event.preventDefault();
        if(!shows[i].classList.contains("show")){
            shows[i].classList.add("show");
            pluses[i].classList.add("hide");
            closes[i].classList.add("show-close");
            
        }
    
    });
}

for(let i = 0 ; i< closes.length ; i++ ){
    closes[i].addEventListener("click",function(){
        if(shows[i].classList.contains("show")){
            shows[i].classList.remove("show");
            pluses[i].classList.remove("hide");
            closes[i].classList.remove("show-close");
        }
    })
}


//inside sidebar menu list open 
const show = document.querySelectorAll(".category-clothes")
const li = document.querySelectorAll(".sidebar-li-list")
const img = document.querySelectorAll(".image-plus")
const img1 = document.querySelectorAll(".image-close")
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (!show[i].classList.contains("show")) {
            show[i].classList.add("show");
            img[i].classList.add("close")
            img1[i].classList.add("remove")
        }
    })
}
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (!show[i].classList.contains("show")) {
            show[i].classList.add("show");
            img[i].classList.add("close")
            img1[i].classList.add("remove")
        }
        else {
            e.preventDefault()
            show[i].classList.remove("show");
            img[i].classList.remove("close")
            img1[i].classList.remove("remove")

        }
    })
}

for (let j = 0; j < img1.length; j++) {
    img1[j].addEventListener("click", function (e) {
        e.preventDefault()
        show[j].classList.remove("show");
        img[j].classList.remove("close")
        img1[j].classList.remove("remove")

    })
}


let heroSection = document.querySelector(".category");
let header = document.getElementById("header-nav");
let newproduct = document.querySelector(".grid1")

let heroSectionHeight = heroSection.getBoundingClientRect().height;
let newproductheight= newproduct.getBoundingClientRect().top + window.scrollY;
console.log(heroSectionHeight);

function stickyheader() {
    if (window.scrollY > heroSectionHeight && window.scrollY < newproductheight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
window.addEventListener('scroll', stickyheader);