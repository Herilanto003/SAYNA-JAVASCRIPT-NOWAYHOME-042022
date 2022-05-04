animation_titre();
animation_lien();
animation_lien_reseau();

// fonction animation pour tous les titres
function animation_titre(){
    const titre = document.querySelector(".titre");
    const description = document.querySelector(".description");
    setTimeout(()=>{description.style.opacity = "1"},1000);
    let lettres = "";
    for (let i = 0; i < titre.innerHTML.length; i++) {
        lettres += "<span>"+titre.innerHTML[i]+"</span>";
        
    }
    titre.innerHTML = lettres;
    const span = document.querySelectorAll(".titre span");
    let status = {
        compteur : 0
    };
    let timer = setInterval(fade_in,150);
    function fade_in(){
        const chaque_span = document.querySelectorAll(".titre span")[status.compteur];
        chaque_span.style.opacity = "1";
        status.compteur++;
        if(status.compteur == span.length)
        {
            fin();
            return;
        }
        function fin(){
            clearInterval(timer);
            timer = null;
        }
    }
}



function animation_lien()
{
    const menu = document.querySelectorAll(".menu ul li a");
    const span_link = document.querySelectorAll(".menu ul li span")


    
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("mouseover",()=>{
            span_link[i].style.transition = "0.3s";
            span_link[i].style.width = "100%";

        });
        menu[i].addEventListener("mouseout",()=>{
            span_link[i].style.width = "0%";
            span_link[i].style.transition = "0.3s";

        });
        
    }

}

function animation_lien_reseau(){
    
    const media = document.querySelectorAll(".media i");


    for (let i = 0; i < media.length; i++) {
        media[i].addEventListener("mouseover", () => {
            media[i].style.color = "#ffffff";
            media[i].style.transition = "0.3s";

        });
        media[i].addEventListener("mouseout", () => {
            media[i].style.color = "#000000";
            media[i].style.transition = "0.3s";

        });

    }

}