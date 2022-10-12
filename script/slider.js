const image = document.querySelector(".inner-container img");
const leftBtn = document.querySelector(".fa-chevron-left");
const rightBtn = document.querySelector(".fa-chevron-right");
const h2 = document.querySelector(".slider .container h2");
const p = document.querySelector(".slider .container p");

const models = [
    {
        name: "Promise Oke",
        text: " Fashion modeling recruits models to pose for artistic photo shoots and adorn clothing and accessories during runway shows. High-fashion models display fashion designs in magazine editorials, and they serve as spokespeople to represent brands.",
        url: ".\\images\\model-1.jpg"
    },
    {
        name: "Vera Michael",
        text: "Fashion models represent brands and designers by wearing their clothing and accessories in photo shoots, commercials, and runway shows. This role often requires physical attractiveness and an ability to maintain an elegant and graceful appearance through long exhausting hours. Fashion models receive clothing items from a designer or brand and work with stylists and photographers to take a series of snapshots for use in print or online campaigns. They must carefully listen to direction and work well with others, including other models ",
        url: ".\\images\\model-2.jpg"
        
    },
    {
        name: "Kenny Ransom",
        text: "Who has not looked at a pretty model walking down the ramp in a fashion show and envied her glamourous lifestyle? Most of us, at one point or the other in life, admired models, their poise and charm. Some of us have even wanted to be models. However, the life and career of a model is not all glam, as it looks like from the outside. Modeling is not just about having a pretty face; it is much more than that. A lot goes into the making of a model, and that is just what this article attempts to tell you about.",
        url:".\\images\\image-3.jpg"
    }
]

leftBtn.addEventListener("click", prev);
rightBtn.addEventListener("click", next);

let index = 0;

function prev(){
    if(index <= 0){
        index = 2;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }else{
        index = index - 1;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }
}

function next(){
    if(index > 2){
        index = 0;
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
    }else{
        image.src = models[index].url;
        h2.innerText = models[index].name;
        p.innerText = models[index].text;
        index = index + 1;
    }
}

