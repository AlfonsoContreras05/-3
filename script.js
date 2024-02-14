const alternatives = [
  {text:"Te prometo que será inolvidable", images:"images/cat-02.gif"},
  {text:"Piénsalo de nuevo", images:"images/cat-03.gif"},
  {text:"Vamos, atrévete a un sí", images:"images/cat-04.gif"},
  {text:"Que el miedo no te detenga", images:"images/cat-05.gif"}
];

const ohyes = {text:"Sabía que aceptarías, ¡ Te Amo Preciosa !!", images:"images/cat-yes.gif"};

const cat = document.querySelector('.cat');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;

function updateDisplay(item){
  cat.src = item.images;
  text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
  count = 0;
  updateDisplay(alternatives[count]);
  buttons.forEach(btn => btn.style.display = 'inline-block');
  errorButton.style.display = 'none';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.textContent == "Si"){
      updateDisplay(ohyes);
      buttons.forEach(btn => btn.style.display = 'none');
      const newButton = document.createElement('button');
      newButton.innerText = '¡¡ Dale Click Aqui !!';
      newButton.classList.add('button'); // Agregar la misma clase que los otros botones
      newButton.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para mostrar el nuevo mensaje
        alert('Si vieras lo hermosa que eres ante el mundo, no derramarías ni una sola lágrima por quien no lo merece... ');
        alert('El mundo nunca entenderá que el cielo está lleno de seres hermosos, pero que en el infierno abundan seres irresistibles...');

      });
      document.querySelector('.card').appendChild(newButton);
    }
    if(button.textContent == 'No'){
      count++;
      if(count < alternatives.length){
        updateDisplay(alternatives[count]);
      }else{
        buttons.forEach(btn => btn.style.display = 'none');
        errorButton.style.display = 'inline-block';
      }
    }
  });
});
