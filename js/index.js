// Your code goes here

//#1 - click - click logo to change background color
const logoYo = document.querySelector(".logo-heading");
// console.log(event1);
logoYo.addEventListener('click', () => {
    logoYo.style.backgroundColor = 'red'; });

// //focus on all p's
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

//nest and stop propogation
const navYo = document.querySelectorAll(".nav-link");
navYo.forEach((el, i) => {
    el.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
    });
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

//#5 