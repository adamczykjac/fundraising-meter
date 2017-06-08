import $ from 'jquery';
import Digit from '../Digit'
import Mustache from 'mustache';

export default class Flip {
  constructor() {
    this.MIN_VALUE = 0;
    this.MAX_VALUE = 9;
    this.node = {}
    this._currentValue = 0;
  }
  
  set currentValue(val) {
    this._currentValue = val;
  }

  get currentValue() {
    return this._currentValue;
  }
  
  getFlipSettings() {
    return {
      MIN_VALUE: this.MIN_VALUE,
      MAX_VALUE: this.MAX_VALUE
    }
  }
  
  flipTo(value) {
    let activeDigit = $(this.node).find("li.active").eq(0);
    if (activeDigit) {
      activeDigit.removeClass("active")
                 .addClass("before");
    }
    let newlyActive = $(this.node).find("li").eq(value);
    newlyActive.removeClass("before")
               .addClass("active")
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