import $ from 'jquery';
import Flip from './components/Flip'
import FlipCounter from './components/FlipCounter'

let fc = new FlipCounter(0, 9999, 199);
fc.init()

// Move to class events
$(window).click(function() {
  fc.add(1);
  console.log(fc.currentValue);
});
