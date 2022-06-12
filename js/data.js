const cardsContainer = document.querySelector('#cards .container');

let data = {
  "update": 0,
  "cards":[
    {
      "name": "4 Player Game",
      "img": "projIcon/cat.png",
      "link": "https://khe4oyan.github.io/port_fplGame/",
      "git": "https://github.com/khe4oyan/port_fplGame"
    },
    {
      "name": "Creatives",
      "img": "projIcon/cre.png",
      "link": "https://khe4oyan.github.io/port_creative/",
      "git": "https://github.com/khe4oyan/port_creative"
    },
    {
      "name": "NewsGrid",
      "img": "projIcon/gree.png",
      "link": "https://khe4oyan.github.io/port_newsgrid/",
      "git": "https://github.com/khe4oyan/port_newsgrid"
    },
    {
      "name": "Fin Ancer",
      "img": "projIcon/fin.png",
      "link": "https://khe4oyan.github.io/port_financer/",
      "git": "https://github.com/khe4oyan/port_financer"
    },
    {
      "name": "Hotel",
      "img": "projIcon/hot.png",
      "link": "https://khe4oyan.github.io/port_hotel/",
      "git": "https://github.com/khe4oyan/port_hotel"
    }
  ]
};

createCard();

function createCard(){
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