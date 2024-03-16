const images = {
    Facebook : 'Resources/General-images/facebook-icon.png',
    Twitter : 'Resources/General-images/twiter-icon.png',
    Instagram : 'Resources/General-images/instagram-icon.png',
    Linkedin : 'Resources/General-images/linkedin-icon.png',
    WhatsApp : 'Resources/General-images/whatsapp-icon.png'
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
    Index: "Index.html",
    Contact: "Pages/Contacts/Contact.html",
    Behaviour: "Pages/Behaviour/Behaviour.html",
    InterestingFacts: "Pages/Interesting-Facts/Interesting-Facts.html",
    Breeds: "Pages/Breeds/Breeds.html",
    Care: "Pages/Care/Care.html",
}

const Index = document.querySelector('#Index'),
      Breeds = document.querySelector('#Breeds'),
      Care = document.querySelector('#Care'),
      Behaviour = document.querySelector('#Behaviour'),
      Contact = document.querySelector('#Contact'),
      Interesting = document.querySelector('#Interesting');


      function addLink(element, name){
        if (Pages[name]) {
            element.href = Pages[name];
        } else {
            console.error(`La página '${name}' no está definida en el objeto Pages.`);
        }
    }
    

addLink(Index, "Index");
addLink(Breeds, "Breeds");
addLink(Care, "Care");
addLink(Behaviour, "Behaviour");
addLink(Contact, "Contact");
addLink(Interesting, "InterestingFacts");

//AGREGAR EL LOGO OFICIAL DE LA PAGINA
let logoDirectory = "Resources/General-images/gato-logo.png"

const Logo = document.querySelector('#Logo-Principal');
Logo.alt = "Logo Oficial de la PAGINA";
Logo.setAttribute('src', logoDirectory);