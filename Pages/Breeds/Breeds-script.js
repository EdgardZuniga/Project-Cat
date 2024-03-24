import {Breeds} from "./Breeds-Objects.js";

const templateCats = document.querySelector('#template-cats').content,
      templateFragment = document.createDocumentFragment(),
      nodeContainer = document.querySelector('.razas-gatunas');


function getNodes(template, idNode){
    return template.querySelector(`.${idNode}`);
}

function createNode(object){
    const templateClone = document.importNode(templateCats, true);

    const articleNode = document.createElement('article');

    const nameElement = getNodes(templateClone, 'template__title');
    const imgElement = getNodes(templateClone, 'template__img');
    const descriptionElement = getNodes(templateClone, 'template__description');

    if (nameElement && imgElement && descriptionElement) {
        nameElement.textContent = object['name'];
        imgElement.setAttribute('src', object['image']);
        descriptionElement.textContent = object.description;

        articleNode.appendChild(nameElement);
        articleNode.appendChild(imgElement);
        articleNode.appendChild(descriptionElement);
    } else {
        console.error("One or more template nodes not found.");
    }

    return articleNode;
}

function printArticle(){
    Breeds.forEach(breed => {
        const Node = createNode(breed);
        templateFragment.appendChild(Node);
    });
}

printArticle();


nodeContainer.appendChild(templateFragment);