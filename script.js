// ==============================
// Birthday Website Script
// ==============================

const pages = document.querySelectorAll(".page");

const startBtn = document.getElementById("startBtn");
const giftPageBtn = document.getElementById("giftPageBtn");
const openGift = document.getElementById("openGift");

const gift = document.getElementById("gift");

const music = document.getElementById("music");

const typing = document.getElementById("typing");

const slides = document.querySelectorAll(".slide");

const hearts = document.querySelector(".hearts");

const balloons = document.getElementById("balloons");

// ==============================
// MESSAGE
// ==============================

const message = `Happy Birthday My Raisa bby ❤️

You are one of the greatest gifts Allah has blessed me with.

Thank you for always making my life brighter with your smile.

I hope your life will bring you endless happiness, peace, success and lots of beautiful memories.

I love you so much.


CSE pori kichu to kore dekhate hoy ee.😁

Here is a tiny surprise made with lots of love just for you.

❤️`;

// ==============================
// TYPEWRITER
// ==============================

let i = 0;

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();

// ==============================
// PAGE CHANGE
// ==============================

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

}

// Welcome -> Gallery

startBtn.onclick = ()=>{

    showPage(1);

}

// Gallery -> Gift

giftPageBtn.onclick = ()=>{

    showPage(2);

}

// Gift -> Final

openGift.onclick = ()=>{

    gift.classList.add("open");

    setTimeout(()=>{

        showPage(3);

        launchFireworks();

        createBalloons();

        music.play();

    },1000);

}

// ==============================
// SLIDESHOW
// ==============================

let slideIndex=0;

setInterval(()=>{

    slides[slideIndex].classList.remove("active");

    slideIndex++;

    if(slideIndex>=slides.length){

        slideIndex=0;

    }

    slides[slideIndex].classList.add("active");

},2000);

// ==============================
// HEARTS
// ==============================

function createHeart(){

    const heart=document.createElement("span");

    heart.style.left=Math.random()*100+"%";

    heart.style.animationDuration=4+Math.random()*6+"s";

    heart.style.opacity=Math.random();

    const size=15+Math.random()*25;

    heart.style.width=size+"px";

    heart.style.height=size+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// ==============================
// BALLOONS
// ==============================

function createBalloons(){

    const colors=[

        "#ff8eb8",

        "#ffd6e8",

        "#ffffff",

        "#ff9fc8",

        "#ffc1da"

    ];

    for(let i=0;i<40;i++){

        const balloon=document.createElement("div");

        balloon.className="balloon";

        balloon.style.left=Math.random()*100+"%";

        balloon.style.background=

        colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration=

        8+Math.random()*6+"s";

        balloon.style.animationDelay=

        Math.random()*3+"s";

        balloons.appendChild(balloon);

    }

}

// ==============================
// SPARKLES
// ==============================

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.animationDuration=

    1+Math.random()*2+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,1000);

// ==============================
// FIREWORKS
// ==============================

function launchFireworks(){

    var duration=12000;

    var end=Date.now()+duration;

    (function frame(){

        confetti({

            particleCount:5,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:5,

            angle:120,

            spread:70,

            origin:{x:1}

        });

        confetti({

            particleCount:8,

            spread:120,

            origin:{

                x:Math.random(),

                y:Math.random()-0.2

            }

        });

        if(Date.now()<end){

            requestAnimationFrame(frame);

        }

    })();

}

// ==============================
// STARS
// ==============================

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=

    2+Math.random()*3+"s";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },6000);

}

setInterval(createStar,500);

// ==============================
// BUTTON CLICK EFFECT
// ==============================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.animate([

            {transform:"scale(1)"},

            {transform:"scale(.92)"},

            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});