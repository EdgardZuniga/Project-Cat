const Pages = {
    Index: "/Index.html",
    Behaviour: "/Pages/Behaviour/Behaviour.html",
    Breeds: "/Pages/Breeds/Breeds.html",
    Care: "/Pages/Care/Care.html",
    Contact: "/Pages/Contact/Contact.html",
    InterestingFacts: "/Pages/Interesting-Facts/interesting-facts.html"
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
let logoDirectory = "/Resources/General-images/gato-logo.png"

const Logo = document.querySelector('#Logo-Principal');
Logo.alt = "Logo Oficial de la PAGINA";
Logo.setAttribute('src', logoDirectory);



