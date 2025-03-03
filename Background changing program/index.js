const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn.onclick = function() {
  document.body.style.backgroundColor = 'green';
};

btn1.onclick = function() {
  document.body.style.backgroundColor = 'red';
};

btn2.onclick = function() {
  document.body.style.backgroundColor = 'blue';
};

btn3.onclick = function() {
 
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
};
