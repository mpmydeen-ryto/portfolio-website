/* ==========================
   Typing Animation
========================== */

const words = [
    "AI & Data Science Student",
    "Java Developer",
    "Python Programmer",
    "AWS Certified Cloud Practitioner",
    "Machine Learning Enthusiast",
    "Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        typing.textContent = currentWord.substring(0,letterIndex+1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent = currentWord.substring(0,letterIndex-1);

        letterIndex--;

        if(letterIndex===0){

            isDeleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;
            }
        }

    }

    setTimeout(typeEffect,isDeleting?50:120);

}

typeEffect();

/* ==========================
   Dark Mode
========================== */

const themeBtn=document.querySelector(".theme-btn");

themeBtn.onclick=()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

/* ==========================
   Sticky Navbar
========================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>80);

});

/* ==========================
   Scroll Reveal Animation
========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hidden=document.querySelectorAll("section");

hidden.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* ==========================
   Back To Top Button
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("active");

}else{

topBtn.classList.remove("active");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================
   Active Menu
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================
   Skill Card Hover
========================== */

document.querySelectorAll(".skill-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/* ==========================
   Project Card Animation
========================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,#2563eb,#1e293b)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#1e293b";

});

});