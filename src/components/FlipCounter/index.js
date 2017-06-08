import $ from 'jquery';
import Flip from '../Flip'

export default class FlipCounter {
  constructor(minValue, maxValue, initValue) {
    this.MIN_VALUE = minValue;
    this.MAX_VALUE = maxValue;
    if(initValue && this.MIN_VALUE <= initValue <= this.MAX_VALUE) this._currentValue = initValue;
    // random value
    else this._currentValue = Math.ceil(Math.random() * this.MAX_VALUE + this.MIN_VALUE)
    this.flipsObjectsArr = []
  }
  
  set currentValue(val) {
    this._currentValue = val;
  }

  get currentValue() {
    return this._currentValue;
  }
  
  get flipCounterSettings() {
    return {
      MIN_VALUE: this.MIN_VALUE,
      MAX_VALUE: this.MAX_VALUE
    }
  }
  
  getFLipCounterFlips() {
    return this.flipsObjectsArr
  }
    
  init() {
    $("body").removeClass("play"); // if anything is playing
    let digitsArray = this.currentValue.toString().split("").map((digitString) => {
      return parseInt(digitString);
    })
    let currentValueLength = this.currentValue.toString().length
    let maxValueLength = this.MAX_VALUE.toString().length
    if(currentValueLength < maxValueLength) {
      // fill the the array with leading zeros if number too small for the counter
      let blankArr = Array(maxValueLength - currentValueLength).fill(0)
      digitsArray = blankArr.concat(digitsArray)
    }
    this.renderFlips(digitsArray);
  }
  
  createFlip(nodePosition, value) {
    let node = $('.flip.' + nodePosition);
    let flip = new Flip();
    node.html(flip.render(node));
    flip.flipTo(value);
    return flip;
  }
  
  renderFlips(digitsArr) {
    digitsArr.forEach((digitArr, index) => {
      let flipPosition = Math.pow( 10, digitsArr.length - 1 - index ).toString() + "s"
      let flipObj = {
        position: flipPosition,
        flip: this.createFlip(flipPosition, digitArr)
      }
      this.flipsObjectsArr.push(flipObj)
    })
  }
  
  incrementFlip(position) {
    let positionalFlip = this.flipsObjectsArr[position].flip
    if( positionalFlip.currentValue < positionalFlip.getFlipSettings().MAX_VALUE ) {
      positionalFlip.flipTo( positionalFlip.currentValue + 1 );
    }
    else {
      positionalFlip.flipTo( positionalFlip.getFlipSettings().MIN_VALUE );
      let nextFlipCounterPosition = position - 1
      if(this.flipsObjectsArr[nextFlipCounterPosition]) this.incrementFlip(nextFlipCounterPosition)
    }
  }
  
  add(val) {
    setTimeout(() => {
      this.incrementFlip(this.MAX_VALUE.toString().length - 1);
      this.currentValue += 1
    }, 100)
  }
}