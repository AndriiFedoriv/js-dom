const link = document.querySelector('a');

link.textContent = 'Become true JS Jedi!';
link.href = 'https://sj42.programmingmentor.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';

// Task - make 1000 paragraphs

 [...Array(3)].forEach( (_, i) => {
     const p = document.createElement('p');
     p.textContent = i + 1 + ' lorem ipsum...';
     sect.appendChild(p);
 });

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));

// linkPara.parentNode.removeChild(linkPara);
linkPara.remove();

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formatted');

const clock = document.querySelector('.clock');
const options = {  
    hour: "2-digit", minute: "2-digit", second: "2-digit"
};  
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString("uk", options);
setInterval(showClock, 1000);

$('.click-me').click( () => $('img').toggle(2000) );
