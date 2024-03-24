const images = {
    Facebook : '../../Resources/General-images/Facebook.webp',
    Twitter : '../../Resources/General-images/Twiter.webp',
    Instagram : '../../Resources/General-images/Instagram.webp',
    Linkedin : '../../Resources/General-images/Linkedin.webp',
    WhatsApp : '../../Resources/General-images/WhatsApp.webp'
}

const Facebook = document.querySelector('#Facebook'),
Twitter = document.querySelector('#Twitter'),
Instagram = document.querySelector('#Instagram'),
Linkedin = document.querySelector('#Linkedin'),
WhatsApp = document.querySelector('#WhatsApp');

      function addLink(element, name){
        if (images[name]) {
            element.setAttribute('src', images[name]);
            element.setAttribute('alt', name + "-icon");
        } else {
            console.error(`Error: ${name} no se encuentra en el objeto de imagenes.`);
        }
    }
    

addLink(Facebook, "Facebook");
addLink(Twitter, "Twitter");
addLink(Instagram, "Instagram");
addLink(Linkedin, "Linkedin");
addLink(WhatsApp, "WhatsApp");

//AGREGAR EL LOGO OFICIAL DE LA PAGINA
let logoDirectory = "../../Resources/General-images/Gato-logo.webp"

const Logo = document.querySelector('#Logo-Principal');
Logo.alt = "Logo Oficial de la PAGINA";
Logo.setAttribute('src', logoDirectory);