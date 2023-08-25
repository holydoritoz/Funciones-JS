//PARTE 1 ✔

const elements = document.querySelectorAll('.box');

const pintar = (event) => {
  const color = 'black';
  event.target.style.background = color;
}

elements.forEach(element => {
  element.addEventListener('click', pintar);
});

//PARTE 2 y 3  ✔

const box = document.getElementById('key');
const wrapper = document.getElementById('main-container');

const colors = {
  'a': 'pink',
  's': 'orange',
  'd': 'skyblue',
  'q': 'purple',
  'w': 'gray',
  'e': 'maroon'
};

const boxColor = (userKey) => colors[userKey] || null;

const boxBackground = (color) => {
  box.style.backgroundColor = color || '';
};

const addGhostBox = (color) => {
  if (color) {
    const newBox = document.createElement('div');
    newBox.style.cssText = `width: 200px; height: 200px; background: ${color}; border: 2px solid black;`;
    wrapper.appendChild(newBox);
  }
};

document.addEventListener("keydown", (e) => {
  const pressedKey = e.key;
  const color = boxColor(pressedKey);

  if (color) {
    if (['a', 's', 'd'].includes(pressedKey)) {
      boxBackground(color);
    } else {
      addGhostBox(color);
    }
  } else {
    alert('Tecla no válida!');
  }
});


