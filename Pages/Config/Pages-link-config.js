const Pages = {
    Index: "../../",
    InterestingFacts: "../../Pages/Interesting-Facts/Interesting-Facts.html",
    Behaviour: "../../Pages/Behaviour/Behaviour.html",
    Breeds: "../../Pages/Breeds/Breeds.html",
    Care: "../../Pages/Care/Care.html",
    Contact: "../../Pages/Contact-Me/Contact-me.html"
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
