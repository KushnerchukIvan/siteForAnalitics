// ======================
// Burger menu
// ======================

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ======================
// Scroll animation
// ======================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));


// ======================
// Scroll To Top
// ======================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        scrollBtn.style.display="block";

    }else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});