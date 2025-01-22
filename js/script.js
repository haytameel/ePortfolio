document.addEventListener("DOMContentLoaded", function () {

    //asignamos el boton del menu
    const button = document.querySelector('.button')

    //asignamos el nav de la pagina
    const nav    = document.querySelector('.nav')

    //si se hace clic, se le pone de clase 'activo' o se quita al nav
    button.addEventListener('click',()=>{
        nav.classList.toggle('activo')
    });

  
});
