const colors = ['red', 'yellow', 'green'];
let index = 0;
const lights = document.getElementsByClassName('light');
document.getElementById('stoplight').addEventListener('click', () => {
  lights[index].style.background = 'white';
  index === 0 ? index = 2 : index--;
  lights[index].style.background = colors[index];
});