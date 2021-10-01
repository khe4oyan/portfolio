setListener();
holiday();

function setListener(){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('mouseenter', function(){
            let h = new Audio('../sound/a.wav');
            h.volume = .2;
            h.play();
        });
    });
}

function holiday(){
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    switch(true){
        // New Year set
        case month == 1 && day <= 20 || month == 12 && day > 20:{
            console.log('Load Ney Year theme');
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'holiday/newYear/newYear.css';
            document.head.appendChild(link);
            let logo = document.querySelector('header img');           
            logo.src = 'holiday/newYear/logo.png';
            break;
        }
    }
}

// new year temp set
