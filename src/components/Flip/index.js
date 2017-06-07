import $ from 'jquery';
import Digit from '../Digit'
import Mustache from 'mustache';
import flipTemplate from './index.html';

export default class Flip {
  constructor(value) {
    this.MIN_VALUE = 0;
    this.MAX_VALUE = 9;
    this.node = {}
    
    if( typeof value != "number" || this.MAX_VALUE < value < this.MIN_VALUE ) {
      throw new Error("Digit cannot be initialized with a number " + value)
    }
    else if( !value ) {
      this._currentValue = 0;
    }
    else {
      this._currentValue = value
      this.flipTo(this._currentValue)
    }
  }
  
  set currentValue(val) {
    this._currentValue = val;
  }

  get currentValue() {
    return this._currentValue;
  }
  
  flipTo(value) {
    let activeDigit = $(this.node).find("li.active").eq(0);
    if (activeDigit) {
      activeDigit.removeClass("active")
                 .addClass("before");
    }
    let newlyActive = $(this.node).find("li").eq(value);
    newlyActive.addClass("active")
               .closest("body")
               .addClass("play");
    this.currentValue = value;
  }
  
  render(node) {
    if(node) this.node = node
    // inspired by https://stackoverflow.com/a/33352604
    let flipWrapperNode = $('<div></div>')
    for(var i = this.MIN_VALUE; i < this.MAX_VALUE + 1; i++ ) {
      flipWrapperNode.append(new Digit(i).render());
    }
    $(node).html(flipWrapperNode)
  }
}