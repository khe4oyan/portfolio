holiday();

function holiday() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  switch (true) {
    // New Year set
    case month == 12 && day >= 28 || month == 1 && day <= 13 : {
      console.log('Load Ney Year theme');
      console.log('Dec 28 -> Jan 1');
      let link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'holiday/newYear/newYear.css';
      document.head.appendChild(link);
      let logo = document.querySelector('header img');
      logo.src = 'holiday/newYear/logo.png';
      const canv = document.createElement('canvas');
      document.body.appendChild(canv);
      let js = document.createElement('script');
      js.type = 'text/javascript';
      js.src = 'holiday/newYear/newYear.js';
      document.body.appendChild(js);
      break;
    }
  }
}
