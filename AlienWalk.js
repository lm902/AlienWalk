import Alien from './Alien.js'
import Box from './Box.js'

class AlienWalk {
  constructor () {
    this.createSprites()
    this.newFrame()
    document.body.onselectstart = event => event.preventDefault()
    document.body.ondragstart = event => event.preventDefault()
    document.body.style.overflow = 'hidden'
  }

  createSprites () {
    const alien = new Alien()
    this.sprites = []
    this.sprites.push(alien)
    this.sprites.push(new Box(alien))
  }

  newFrame () {
    this.updateAll()
    this.renderAll()
    window.requestAnimationFrame(this.newFrame.bind(this))
  }

  updateAll () {
    for (const sprite of this.sprites) {
      sprite.update()
    }
  }

  renderAll () {
    for (const sprite of this.sprites) {
      sprite.render()
    }
  }
}

window.onload = () => new AlienWalk()
