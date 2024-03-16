const images = {
    Facebook : './Resources/General-images/facebook-icon.png',
    Twitter : './Resources/General-images/twiter-icon.png',
    Instagram : './Resources/General-images/instagram-icon.png',
    Linkedin : './Resources/General-images/linkedin-icon.png',
    WhatsApp : './Resources/General-images/whatsapp-icon.png'
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