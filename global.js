//--------------------------------------------
//  APPEL DES FONCTIONS UTILISEES
// -------------------------------------------
button_hover();
img_scroll();
home_modal_1();
home_modal_2();
passage_souris_image();

$(document).ready(function(){
    animation_img_marvel();
});

//--------------------------------------------
//  DEFINITIONS DES FONCTIONS UTILISEES
// -------------------------------------------

function animation_img_marvel(){
    $("#img_marvel").css({
        "right": "0%",
        "transition": "1.5s"
    })

}

// fonction au passage de la souris
function button_hover() {
    const button_1 = document.querySelectorAll(".btn.button1");
    const button_2 = document.querySelector(".btn.button2");
    const button_3 = document.querySelector(".spider_form");
    const button_4 = document.querySelector(".form-button.btn");

    button_4.addEventListener("mouseover", () => {
        button_4.classList.add("button4_animation");
        button_4.style.color = "#ffffff";
        button_4.style.backgroundColor = "#000000";
    });
    button_4.addEventListener("mouseout", () => {
        button_4.classList.remove("button4_animation");
        button_4.style.color = "#000000";
        button_4.style.backgroundColor = "#ffffff";
        button_4.style.transition = "0.3s";
    });

    button_3.addEventListener("mouseover", () => {
        button_3.classList.add("button3_animation");
        button_3.style.color = "var(--blue-color)";
        button_3.style.backgroundColor = "var(--white-ad-color)";
    });
    button_3.addEventListener("mouseout", () => {
        button_3.classList.remove("button3_animation");
        button_3.style.color = "var(--white-ad-color)";
        button_3.style.backgroundColor = "transparent";
        button_3.style.transition = "0.3s";
    });

    button_2.addEventListener("mouseover", () => {
        button_2.classList.add("button2_animation");
        button_2.style.color = "var(--primary-ad-color)";
    });
    button_2.addEventListener("mouseout", () => {
        button_2.classList.remove("button2_animation");
        button_2.style.color = "var(--white-ad-color)";
        button_2.style.transition = "0.3s";
    });

    for (let i = 0; i < button_1.length; i++) {
        button_1[i].addEventListener("mouseover", () => {
            button_1[i].classList.add("button1_animation");
            button_1[i].style.color = "white";

        });
        button_1[i].addEventListener("mouseout", () => {
            button_1[i].classList.remove("button1_animation");
            button_1[i].style.color = "var(--primary-ad-color)";
            button_1[i].style.transition = ".3s";

        });

    }

}

// scroller le premier image

function img_scroll() {
    const image_scroll = document.querySelector(".image-home-2 img");
    const image_scroll_suivant = document.querySelector(".image_scroll_suivant");
    window.addEventListener("scroll", () => {
        if (scrollY < 1500) {
            image_scroll.style.top = scrollY + "px";
            image_scroll_suivant.style.position = "absolute";
            image_scroll_suivant.style.top = "0px";
        }
        if (scrollY > 1501 && scrollY < 2025) {
            image_scroll_suivant.style.position = "fixed";
            image_scroll_suivant.style.top = "150px";
        }

        if (scrollY > 2026) {
            image_scroll_suivant.style.position = "absolute";
            image_scroll_suivant.style.top = "550px";

        }
    });
}

// pour faire scroller le deuxième image

// function img_scroll_suivant(){
//     window.addEventListener("scroll",()=>{
//         if(scrollY < 2700){
//             image_scroll.style.position = "absolute";
//             image_scroll.style.top = "0px";
//         }else if(scrollY > 2700 && scrollY < 3220){
//             image_scroll.style.position = "fixed";
//             image_scroll.style.top = "0px";
//         }else{
//             image_scroll.style.position = "absolute";
//             image_scroll.style.top = "550px";
//         }
//     });
// }

// fonction pour le modal de la deviens spiderman
function home_modal_1() {
    const form_modal_1 = document.querySelector(".spiderman-formulaire");
    const modal_1 = document.querySelector(".pop-box-1");
    const close_modal_1 = document.querySelector("#spiderman .pop-box-1 button");
    form_modal_1.addEventListener("submit", (e) => {
        e.preventDefault();
        modal_1.style.transform = "translate(-50%,-50%)";
        modal_1.style.transition = "0.5s";

    });
    close_modal_1.addEventListener("click", () => {
        modal_1.style.transform = "translate(-200%,-50%)";
    });
}

// fonction pour le modal de la newsletter
function home_modal_2() {
    const form_modal_2 = document.querySelector("#newsletter form");
    const modal_2 = document.querySelector(".pop-box-2");
    const close_modal_2 = document.querySelector("#newsletter .pop-box-2 button");
    form_modal_2.addEventListener("submit", (e) => {
        e.preventDefault();
        modal_2.style.transform = "translate(-50%,-50%)";
        modal_2.style.transition = "0.5s";

    });
    close_modal_2.addEventListener("click", () => {
        modal_2.style.transform = "translate(-200%,-50%)";
    });
}



// pour les images de trois heros spiderman
function passage_souris_image() {
    const texte = document.querySelectorAll(".card-text");
    const image = document.querySelectorAll(".card-img-top");
    const card_body = document.querySelectorAll(".card-unique");

    for (let i = 0; i < card_body.length; i++) {
        image[i].addEventListener("mouseover", () => {
            image[i].style.transform = "scale(1.1)";
            image[i].style.transition = "0.3s";
            texte[i].style.height = "auto";
            texte[i].style.transition = "2s";
            texte[i].style.opacity = "1";

        });

        image[i].addEventListener("mouseout", () => {
            image[i].style.transform = "scale(1.0)";
            image[i].style.transition = "0.3s";
            texte[i].style.height = "0";
            texte[i].style.transition = "2s";
            texte[i].style.opacity = "0";

        });

    }

}


// fonction pour l audio
const audio = document.querySelector("audio");
const input_range = document.querySelector("#duration_audio");
const play_content = document.querySelector("#play_content");

console.log(input_range);

let audio_status = {
    play: true,
    duration: 0
};


function audio_play() {

    if (audio_status.play == true) {
        play_content.innerHTML = '<i class="fas fa-pause" onclick="audio_play()"></i>';
        audio_status.play = false;
        audio.play();
    } else {
        play_content.innerHTML = '<i class="fas fa-play" onclick="audio_play()"></i>';
        audio_status.play = true;
        audio.pause();
    }

    let timer = setInterval(() => {
        if (!isNaN(audio.duration)) {
            audio_status.duration = audio.currentTime * (100 / audio.duration);
            input_range.value = audio_status.duration;
            if (input_range.value >= 100) {
                input_range.value = "0";
                play_content.innerHTML = '<i class="fas fa-play" onclick="audio_play()"></i>';
                audio_status.play = true;
                audio.pause();

                clearInterval(timer);
            }
        }
    }, 1000);




}


function duration_change() {
    let durer = audio.duration * (input_range.value / 100);
    audio.currentTime = durer;

}
function audio_avance(){
    audio.currentTime += 10;

}
function audio_retour(){
    audio.currentTime -= 5;
    if(audio.currentTime < 0)
    {
        audio.currentTime = 0;
    }
}

// function slider_duration() {
//     if (!isNaN(audio.duration)) {
//         audio_status.duration = audio.currentTime * (100 / audio.duration);

//     }

// }