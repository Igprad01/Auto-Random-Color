const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function gantiwarna(element) {
      var colors = getRandomColor();
      element.style.backgroundColor = colors;
  }

box1.addEventListener('click', function() {
  gantiwarna(box1);
});

box2.addEventListener('click', function() {
  gantiwarna(box2);
});

box3.addEventListener('click', function() {
    gantiwarna(box3);
});

setInterval ( function() {
  gantiwarna(box1);
  gantiwarna(box2);
  gantiwarna(box3);
}, 50);