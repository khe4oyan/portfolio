const cardsContainer = document.querySelector('#cards .container');

fetch('js/data.json')
  .then(response => response.json())
  .then(data => createCard(data));

function createCard(data){
  for(let i = 0; i < data.cards.length; i++){
    const block = document.createElement('div');
    block.classList.add('card');
    block.classList.add('press');

    const card = data.cards[i];

    const name = document.createElement('h2'); 
    name.textContent = card.name;

    const img = new Image();
    img.src = card.img

    const link = document.createElement('a');
    link.target = "_blank"

    const tagI = document.createElement('i');
    tagI.classList.add('fas');
    tagI.classList.add('fa-eye');
    link.appendChild(tagI);
    link.href = card.link;

    block.appendChild(img);
    block.appendChild(name);
    block.appendChild(link);
    cardsContainer.appendChild(block);
  }
}