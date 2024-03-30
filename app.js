const socialContainer = document.querySelector('.redes-sociales');
const socialFragment = document.createDocumentFragment();

const socialElements = [
    {
        name: "Linkedin",
        link: "https://linkedin.com/in/edgard-zuniga",
        img: "Resources/Social-images/linkedin-icon.png"
    },
    {
        name: "WhatsApp",
        link: "https://wa.me/50493501358",
        img: "Resources/Social-images/WhatsApp-icon.png"
    },
    {
        name: "Email",
        link: "mailto:edgard.zunigam@gmail.com",
        img: "Resources/Social-images/Email-icon.png"
    },
    {
        name: "GitHub",
        link: "https://github.com/EdgardZuniga",
        img: "Resources/Social-images/Github-icon.png"
    },
]
function createSocialNetwork(socialObj){
    const socialLink = document.createElement('a');
    if(socialObj.name !== "Email"){
        socialLink.setAttribute('target', '_blank')
    }
    socialLink.setAttribute('href', socialObj.link)

    const socialImage = document.createElement('img');
    socialImage.setAttribute('src', socialObj.img);
    socialImage.setAttribute('alt', socialObj.name + "-icon");

    socialLink.appendChild(socialImage);
    return socialLink;
}

function addSocialDOM(){
    socialElements.forEach(element =>{
        const socialElement = createSocialNetwork(element);
        socialFragment.appendChild(socialElement)
    })
}

addSocialDOM();
socialContainer.appendChild(socialFragment);

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