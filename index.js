const hamburguer = document.querySelector("#hamburguer");
const closed = document.querySelector("#close");
const menu = document.querySelector("#menu-header");

hamburguer.addEventListener('click',()=>{
    menu.style.display='flex';
    closed.style.display='block';
});

closed.addEventListener('click',()=>{
    menu.style.display='none';
    closed.style.display='none';
});