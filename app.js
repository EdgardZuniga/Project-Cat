const images = {
    Facebook : 'Resources/General-images/Facebook.webp',
    Twitter : 'Resources/General-images/Twiter.webp',
    Instagram : 'Resources/General-images/Instagram.webp',
    Linkedin : 'Resources/General-images/Linkedin.webp',
    WhatsApp : 'Resources/General-images/WhatsApp.webp'
}

const Facebook = document.querySelector('#Facebook'),
Twitter = document.querySelector('#Twitter'),
Instagram = document.querySelector('#Instagram'),
Linkedin = document.querySelector('#Linkedin'),
WhatsApp = document.querySelector('#WhatsApp');


      function addImg(element, name){
        if (images[name]) {
            element.setAttribute('src', images[name]);
            element.setAttribute('alt', name + "-icon");
        } else {
            console.error(`Error: ${name} no se encuentra en el objeto de imagenes.`);
        }
    }
    

addImg(Facebook, "Facebook");
addImg(Twitter, "Twitter");
addImg(Instagram, "Instagram");
addImg(Linkedin, "Linkedin");
addImg(WhatsApp, "WhatsApp");

//Agregar los links de las paginas.

const Pages = {
    Index: "#",
    Contact: "Pages/Contact-Me/Contact-me.html",
    Behaviour: "Pages/Behaviour/Behaviour.html",
    InterestingFacts: "Pages/Interesting-Facts/Interesting-Facts.html",
    Breeds: "Pages/Breeds/Breeds.html",
    Care: "Pages/Care/Care.html",
}

const Index = document.querySelectorAll('.Index'),
      Breeds = document.querySelectorAll('.Breeds'),
      Care = document.querySelectorAll('.Care'),
      Behaviour = document.querySelectorAll('.Behaviour'),
      Contact = document.querySelectorAll('.Contact'),
      Interesting = document.querySelectorAll('.Interesting');


      function addLink(elements, name) {
        elements.forEach(element => {
            if (Pages[name]) {
                element.href = Pages[name];
            } else {
                console.error(`La página '${name}' no está definida en el objeto Pages.`);
            }
        });
    }
    

addLink(Index, "Index");
addLink(Breeds, "Breeds");
addLink(Care, "Care");
addLink(Behaviour, "Behaviour");
addLink(Contact, "Contact");
addLink(Interesting, "InterestingFacts");

//AGREGAR EL LOGO OFICIAL DE LA PAGINA
let logoDirectory = "Resources/General-images/Gato-logo.webp"

const Logo = document.querySelector('#Logo-Principal');
Logo.alt = "Logo Oficial de la PAGINA";
Logo.setAttribute('src', logoDirectory);