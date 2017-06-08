import $ from 'jquery';
import Flip from './components/Flip'
import FlipCounter from './components/FlipCounter'

let fc = new FlipCounter(0, 9999, 199);
fc.init()

setTimeout(() => {
  fc.incrementFlip(3)
}, 1000)
// 
// // Move to class events
// $(window).click(function() {
//   fc.add(20); 
// });
