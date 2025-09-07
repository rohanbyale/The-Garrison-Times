const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()

let  rig = document.querySelector("#right");
let hov = document.querySelector("#hov")


rig.addEventListener("mouseenter", function(){
    hov.style.opacity=1;
})
rig.addEventListener("mouseleave", function(){
    hov.style.opacity=0;

})
rig.addEventListener("mousemove" ,function(dets){

  hov.style.left=dets.x+"px";
  
  hov.style.top=dets.y+"px";

});

let navimg= document.querySelector("#left")
let pk= document.querySelector("#pk")

navimg.addEventListener("mouseenter", function(){
    pk.style.opacity=1;
})
navimg.addEventListener("mouseleave", function(){
    pk.style.opacity=0;

})
navimg.addEventListener("mousemove" ,function(dets){

  pk.style.left=dets.x+"px";
  
  pk.style.top=dets.y+"px";

})



let thoms= document.querySelector("#thoms")
let Thoms= document.querySelector("#Thoms")

thoms.addEventListener("mouseover", function(){
    Thoms.style.opacity=1;
})
thoms.addEventListener("mouseleave", function(){
    Thoms.style.opacity=0;

})



let arthur= document.querySelector("#arthur")
let Arthur= document.querySelector("#Arthur")

arthur.addEventListener("mouseover", function(){
    Arthur.style.opacity=1;
})
arthur.addEventListener("mouseleave", function(){
    Arthur.style.opacity=0;

})

let john= document.querySelector("#john")
let John= document.querySelector("#John")

john.addEventListener("mouseover", function(){
    John.style.opacity=1;
})
john.addEventListener("mouseleave", function(){
    John.style.opacity=0;

})






