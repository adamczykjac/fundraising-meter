import $ from 'jquery';
import FlipCounter from './FlipCounter'

let fc = new FlipCounter(0, 9999);
fc.init()

// Move to class events
$(window).click(function() {
  fc.add(20); 
});
