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

    const linker = document.createElement('div');
    linker.classList.add('linker');

    const link = document.createElement('a');
    link.target = "_blank"

    const git = document.createElement('a');
    git.target = "_blank"
    git.href = card.git;
    const gitLogo = new Image();
    gitLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png';
    git.appendChild(gitLogo);


    const tagI = document.createElement('i');
    tagI.classList.add('fas');
    tagI.classList.add('fa-eye');
    link.appendChild(tagI);
    link.href = card.link;

    linker.appendChild(git);
    linker.appendChild(link);

    block.appendChild(img);
    block.appendChild(name);
    block.appendChild(linker);
    cardsContainer.appendChild(block);
  }
}