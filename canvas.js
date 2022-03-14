import images from '../img/images.png'
import ground from '../img/ground.png'
import background from '../img/background5.png'
import grass from '../img/grass2.png'
import hut from '../img/hut.png'
import well from '../img/well.png'
import character from '../img/frame1.png'
import altcharacter from '../img/frame2.png'
import objective1 from '../img/objective1.png'
import objective2 from '../img/objective2.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5

let isWaterCollected = false

class StaticObject {
  constructor({x, y, image}) {
    this.position = {
      x,
      y
    }
    this.image = image
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

class Player {
  constructor() {
    this.position = {
      x: 200,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.image = createImage(character)
    this.width = 30
    this.height = 30
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }

  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.draw()
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image
    this.width = image.width
    this.height = 20
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y
    }

    this.image = image
    this.width = image.width
    this.height = 20
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

class Obstacle {
  constructor({ x, y, image}) {
    this.position = {
      x,
      y
    }

    this.image = image
    this.width = image.width
    this.height = image.height
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}


function createImage(imageSrc) {
  const image = new Image()
  image.src = imageSrc
  return image
}

function init() {
  
groundwidth = 990;
player = new Player()
platforms = [
  new Platform({
    x: 0,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 2 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 3 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: -1 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 2 * groundwidth,
    y: 500,
    image: createImage(grass)
  }),
  new Platform({
    x: -100,
    y: 550,
    image: createImage(hut)
  })
]

genericObjects = [
  new GenericObject({
    x: -800,
    y: -1,
    image: createImage(background)
  })
]

obstacles = [
  new Obstacle({
    x: 3 * groundwidth,
    y: 500,
    image: createImage(grass),
    width: 100,
    height: 100
  }),
]

keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
}

scrollOffset = 0;
haveStopped = true;
}

let groundwidth = 990;

let player = new Player()

let platforms = [
  new Platform({
    x: 0,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 2 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 3 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 4 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 5 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: -1 * groundwidth,
    y: 550,
    image: createImage(ground)
  }),
  new Platform({
    x: 2 * groundwidth,
    y: 470,
    image: createImage(grass)
  }),
  new Platform({
    x: 4.5 * groundwidth,
    y: 200,
    image: createImage(well)
  })
]

let genericObjects = [
  new GenericObject({
    x: -800,
    y: -1,
    image: createImage(background)
  }),
  new GenericObject({
    x: -100,
    y: 210,
    image: createImage(hut)
  })
]

let obstacles = [
  new Obstacle({
    x: 3 * groundwidth,
    y: 470,
    image: createImage(grass),
  }), 
]

let staticObjects = [
  new StaticObject({
    x: 20,
    y: 15,
    image: createImage(objective1)
  })
]

let keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
}

let scrollOffset = 0;
let haveStopped = true;

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white'
  c.clearRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach(genericObject => {
    genericObject.draw()
  })

  platforms.forEach(platform => {
    platform.draw();
  })

  obstacles.forEach(obstacle => {
    obstacle.draw();
  })

  staticObjects.forEach(staticObject => {
    staticObject.draw();
  })

  player.update();

  if (player.position.y > 380) {
    player.velocity.y = 0
  }

  if (keys.right.pressed && player.position.x < 500) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 400) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5
      platforms.forEach(platform => {
        platform.position.x -= 5;
      })
      obstacles.forEach(obstacle => {
        obstacle.position.x -= 5;
      })
      genericObjects.forEach(genericObject => {
        genericObject.position.x -= 3
      })
    } else if (keys.left.pressed) {
      scrollOffset -= 5
      platforms.forEach(platform => {
        platform.position.x += 5;
      })
      obstacles.forEach(obstacle => {
        obstacle.position.x += 5;
      })
      genericObjects.forEach(genericObject => {
        genericObject.position.x += 3
      })
    }
  }

  if (keys.up.pressed && haveStopped == true) {
    haveStopped = false
    player.velocity.y -= 18
  }

  if (player.velocity.y >= 0) {
    haveStopped = true
  }

  if (scrollOffset > 4.1 * groundwidth) {
    isWaterCollected = true
    staticObjects[0].image = createImage(objective2)
  }

  platforms.forEach(platform => {
    if (player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >= platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x + player.width <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  })

  obstacles.forEach(obstacle => {
    if (player.position.y + player.height <= obstacle.position.y &&
      player.position.y + player.height + player.velocity.y >= obstacle.position.y &&
      player.position.x + player.width >= obstacle.position.x &&
      player.position.x + player.width <= obstacle.position.x + obstacle.width) {
        init()
      }
  })

  if (isWaterCollected) {
    player.image = createImage(altcharacter)
  }

  // win condition
  if (scrollOffset < -500 && isWaterCollected) {
    alert("Congratulations, you won!")
  }

  // lose condition
  if (player.position.y > canvas.height) {
    init()
  }
}

animate()

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      console.log('left')
      keys.left.pressed = true
      break

    case 40:
      console.log('down')
      break

    case 39:
      console.log('right')
      keys.right.pressed = true
      break

    case 38:
      console.log('up')
      keys.up.pressed = true
      break
  }
})


addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      console.log('left')
      keys.left.pressed = false;
      break

    case 40:
      console.log('down')
      break

    case 39:
      console.log('right')
      keys.right.pressed = false;
      break

    case 38:
      console.log('up')
      keys.up.pressed = false;
      break
  }
})