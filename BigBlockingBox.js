import Box from './Box.js'

export default class BigBlockingBox extends Box {
  constructor (alien) {
    super(alien)
    this.position.width = 300
    this.position.height = 300
    this.position.left = 1000
    this.position.top = 200
  }

  update () {
    if (this.collidesWith(this.alien)) {
      this.alien.direction = 'left'
    }
  }
}
