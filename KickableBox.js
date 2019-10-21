import Box from './Box.js'

export default class KickableBox extends Box {
  constructor (alien) {
    super(alien)
    this.position.width = 50
    this.position.height = 50
    this.position.left = 150
    this.position.top = 400
    this.img.style.transition = 'left 0.3s'
    this.img.style.zIndex = -1
  }

  update () {
    if (this.collidesWith(this.alien)) {
      this.position.left += 200
    }
  }
}
