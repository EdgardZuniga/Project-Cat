const boton = document.querySelector('.boton-responsive');
const menu = document.querySelector('.menu_nav');

let activarMenu = 'activador';

boton.addEventListener('click', () =>{
    menu.classList.toggle(activarMenu);
    
    if (menu.classList.contains(activarMenu)) {
        document.body.style.overflow = 'hidden';
    }else{
        document.body.style.overflow = '';
    }
});

