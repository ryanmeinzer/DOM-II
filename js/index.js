// Your code goes here

//#1 - click - click logo to change background color
const logoYo = document.querySelector(".logo-heading");
// console.log(event1);
logoYo.addEventListener('click', () => {
    logoYo.style.backgroundColor = 'red'; });

// //unsuccessful - focus on all p's
// const focusEvent2 = document.querySelectorAll("p");
// // console.log(focusEvent2);
//     focusEvent2.forEach(el=>{
//         document.addEventListener('focus', () => {
//         el.blur();  
//     })
//     });

//#2 - mouseleave - cursor leave logo to change background color
logoYo.addEventListener('mouseleave', () => {
    logoYo.style.background = "blue";
});

//#3 dblclick - double-click logo to get message
logoYo.addEventListener('dblclick', (event) => {
  alert('You Clicked the Logo!')
})

//#4 mouseout - cursor leaves intro to change intro color
const introYo = document.querySelector(".intro");
// console.log(introYo);
introYo.addEventListener('mouseout', () => {
    introYo.style.background = "orange";
});

// //unsuccessful - log key clicks on body
// document.body.addEventListener('keydown', () => {
//     function logKey(e) {
//         log.textContent += ` ${e.code}`;
//     }
// });

// //unsuccessful - auxclick - click buttons to change background color
// const buttonClickYo = document.querySelectorAll(".btn");
// // console.log(buttonClickYo);
// buttonClickYo.forEach(el => {
//     document.addEventListener('auxclick', () => {
//         el.style.backgroundColor = "red";
//     })
// });

// const buttonYo = document.querySelector(".btn");
// // console.log(buttonYo);
// buttonYo.onclick = function () {
//     buttonYo.style.backgroundColor = "black";
// }

//#5 mousedown - button turns black on mouse down
const buttonYo = document.querySelector(".btn");
// console.log(buttonYo);
buttonYo.addEventListener('mousedown', () => {
    buttonYo.style.backgroundColor = "black";
});

// //#6 mouseup - button turns yellow on mouse up
// buttonYo.addEventListener('mousedown', () => {
//     buttonYo.style.backgroundColor = "yellow";
// });

// //unsuccessful - #6 - keydown change Let's Go!
// const titleYo = document.querySelector(".text-content h2");
// // console.log(titleYo);
// titleYo.addEventListener('keydown', () => {
//     titleYo.style.color = "blue";
// });

// #6 mouseenter - bus image zoom
const imageYo = document.querySelector(".intro img");
// console.log(imageYo);
imageYo.addEventListener("mouseenter", () => {
    imageYo.style.transform = "scale(1.2)";
    imageYo.style.transition = "transform 1s";
})

// #7 mouseleave - bus image unzoom
imageYo.addEventListener("mouseleave", () => {
    imageYo.style.transform = "scale(1)";
})

//#8 resize - Let's Go! image
const adventureYo = document.querySelector(".img-content img");
// console.log(adventureYo);
window.addEventListener('resize', () => {
  adventureYo.src ="https://images.unsplash.com/photo-1581318222512-df9d3b0ae4fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2846&q=80"
})

//#9 wheel - scale "Pick Your Destination by vertical scroll/wheel"
const destinationYo = document.querySelector(".content-destination h2");
// console.log(destinationYo)
destinationYo.addEventListener("wheel", () => {
    destinationYo.style.fontSize = "3.5rem";
});

//#10 mouseover - change nav links' color on mouseover
const hoverYo = document.querySelectorAll(".nav-link").forEach(item => {
item.addEventListener("mouseover", e => {
    e.target.style.color = "pink";
})
});

// // preventDefault of navigation items refreshing the page
const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", e => {
    e.preventDefault();
});

// stopPropagation with nesting from header and body clicks
const body = document.querySelector("body");
body.addEventListener('click', () => {
  body.style.backgroundColor="purple";  
});

const header = document.querySelector("header");
header.addEventListener('click', () => {
    header.style.backgroundColor="green";
    event.stopPropagation()
});