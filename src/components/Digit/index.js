import $ from 'jquery';
import digitTemplate from './index.html';
import Mustache from 'mustache';

export default class Digit {
  constructor(value) {
    if( !value ) this._value = 0;
    else if(typeof(value) == "number") this._value = value
    else throw new Error("Digit cannot be initialized with a number " + value)
  }
  
  set value(val) {
    this._value = val;
  }

  get value() {
    return this._value;
  }
  
  // Render Digit
  render() {
    return Mustache.render(digitTemplate, { number: this.value })
  }
}