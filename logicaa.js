var PacMan = [];

function setRandom(number) {
  var resultado = Math.floor(Math.random() * number);
  return resultado;
}

function makePacman() {
  let velocity = setRandom(10);
  let position = { x: setRandom(200), y: setRandom(200) };

  let game = document.getElementById('game');
  let new_img = document.createElement('img');
  new_img.style.position = 'absolute';
  new_img.src = 'PacMan1.png';
  new_img.width = 100;
  new_img.style.left = position.x;
  new_img.style.top = position.y;
  game.appendChild(new_img);

  return { position, velocity, new_img };
}

function checkCollision(item) {
  if (
    item.position.x + item.velocity.x + item.new_img.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  ) {
    item.velocity.x = -item.velocity.x;
  }

  if (
    item.position.y + item.velocity.y + item.new_img.height > window.innerHeight ||
    item.position.y + item.velocity.y < 0
  ) {
    item.velocity.y = -item.velocity.y;
  }
}

function upDate() {
  PacMan.forEach((element) => {
    checkCollision(element);
    element.position.x += element.velocity.x;
    element.position.y += element.velocity.y;

    element.new_img.style.left = element.position.x + 'px';
    element.new_img.style.top = element.position.y + 'px';
  });

  setTimeout(upDate, 20);
}

function makeOne() {
  PacMan.push(makePacman());
}
