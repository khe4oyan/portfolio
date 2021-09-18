let btn = document.getElementById('btn');
btn.onclick = () => {
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  let q = document.getElementById('city').value;
  const appid = '8e2a16c8657482beaaec9bc87370f9ca';

  if (q == '') {
    alert('Input is empty');
  } else
    fetch(`${url}?q=${q}&appid=${appid}`)
      .then((response) => { return response.json(); })
      .then((data) => {
        let icon = data.weather[0].icon;
        createBlock(data.name, `${Math.round(data.main.temp) - 273}&deg;`, `https://openweathermap.org/img/wn/${icon}@2x.png`);
        let temp = document.getElementById('city');
        temp.value = '';

        // function's ---
        function createBlock(name, deg, imgSrc) {
          let block = document.createElement('div');
          block.classList.add('block');
          let hr = document.createElement('hr');
          let hr2 = document.createElement('hr');

          let h1 = document.createElement('h1');
          h1.textContent = name;
          block.appendChild(h1);

          block.appendChild(hr);

          let p = document.createElement('p');
          p.innerHTML = deg
          block.appendChild(p);

          block.appendChild(hr2);

          let img = document.createElement('img');
          img.src = imgSrc;
          if (imgSrc == 'none.png') {
            img.classList.add('none');
          }
          block.appendChild(img);

          document.querySelector('main').appendChild(block);
        }
      })
      .catch(function () {
        alert('Invalid city name');
      });
}


