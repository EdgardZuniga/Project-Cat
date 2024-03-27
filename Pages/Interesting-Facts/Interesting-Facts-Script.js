const templateCard = document.querySelector('.card').content;
const templateFragment = document.createDocumentFragment();
const containerCards = document.querySelector('.container-Cards');

function transformCard(element) {
    element.classList.toggle('flipped');
}

function createCard(obj){
    const templateClone = document.importNode(templateCard, true);

    const articleNode = document.createElement('article');
    articleNode.classList.add('card', 'animation-Scrolling');

    const FactNode = templateClone.querySelector('.back-p');
    FactNode.textContent = obj.Fact;

    articleNode.appendChild(templateClone);

    articleNode.addEventListener('click', () =>{
        transformCard(articleNode);
    })

    return articleNode;
}

function iteratorFacts(){
    Facts.forEach(fact => {
        const Node = createCard(fact);
        templateFragment.appendChild(Node);
    });
}

iteratorFacts();

containerCards.appendChild(templateFragment);

