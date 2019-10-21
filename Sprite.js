import Position from './Position.js'

export default class Sprite {
  constructor () {
    this.position = new Position(0, 0, 0, 0)
    this.img = document.createElement('img')
    document.body.appendChild(this.img)
  }

  collidesWith (sprite) {
    if (!(sprite instanceof Sprite)) {
      throw new ReferenceError('sprite is not a valid instance of Sprite')
    }
    return (
      !(this.position.left + this.position.width < sprite.position.left) &&
      !(sprite.position.left + sprite.position.width < this.position.left) &&
      !(this.position.top + this.position.height < sprite.position.top) &&
      !(sprite.position.top + sprite.position.height < this.position.top)
    )
  }

  boundaryCheck (side) {
    switch (side) {
      case 'top':
        return this.position.top < 0
      case 'bottom':
        return this.position.top + this.position.height > window.innerHeight
      case 'left':
        return this.position.left < 0
      case 'right':
        return this.position.left + this.position.width > window.innerWidth
      default:
        throw new ReferenceError('side must be either "top", "bottom", "left", or "right".')
    }
  }

  update () {
    throw new Error('Not implemented')
  }

  render () {
    this.img.style.position = 'absolute'
    this.img.style.top = this.position.top + 'px'
    this.img.style.left = this.position.left + 'px'
    this.img.style.height = this.position.height + 'px'
    this.img.style.width = this.position.width + 'px'
  }
}
