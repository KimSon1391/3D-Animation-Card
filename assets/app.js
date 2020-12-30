// moverment animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items
const title = document.querySelector('.title');
const description = document.querySelector('.info h3');
const logo = document.querySelector('.logo img');
const size = document.querySelector('.size');
const purchase  = document.querySelector('.purchase button');

//moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    // console.log(e.pageX, e.pageY);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;    
});

//animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(125px)";
    size.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    logo.style.transform = "translateZ(200px) rotateZ(-45deg)";

});

//animate out
container.addEventListener("mouseleave", (e) =>{
    card.style.transition = "all 0.5s ease"
    card.style.transform = `rotate(0deg) rotate(0deg)`;
    //popback
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    size.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px) rotate(0deg)";
    
});

