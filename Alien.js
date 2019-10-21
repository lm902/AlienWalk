import Sprite from './Sprite.js'

export default class Alien extends Sprite {
  static get MAXIMUM_STEP () {
    return 30
  }

  constructor () {
    super()
    this.position.width = 96
    this.position.height = 96
    this.position.top = 350
    this.direction = 'right'
    this.step = 0
    this.img.style.zIndex = 1
    this.img.style.transition = 'top 0.3s'
    window.onmousedown = event => {
      if (event.button === 0) {
        this.position.top = 200
        setTimeout(() => {
          this.position.top = 350
        }, 300)
      }
    }
  }

  update () {
    if (this.boundaryCheck('right')) {
      this.direction = 'left'
    } else if (this.boundaryCheck('left')) {
      this.direction = 'right'
    }
    this.position.left += this.direction === 'right' ? 5 : -5
    if (this.step >= Alien.MAXIMUM_STEP) {
      this.step = 0
    } else {
      this.step++
    }
  }

  render () {
    super.render()
    this.img.src = `./alien/alien${this.direction[0]}walk${this.step}.gif`
  }
}
