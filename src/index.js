import $ from 'jquery';
import FlipCounter from './FlipCounter'

FlipCounter.MAX_DIGIT_NUMBER = 9999;
FlipCounter.MIN_DIGIT_NUMBER = 1000;
let initValue = Math.ceil(
  Math.random() * FlipCounter.MAX_DIGIT_NUMBER + FlipCounter.MIN_DIGIT_NUMBER
)
let fc = new FlipCounter(initValue);

// Move to class events
$(window).click(function() {
   fc.add(20); 
});
