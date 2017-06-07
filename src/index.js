import $ from 'jquery';
import Flip from './components/Flip'
// import FlipCounter from './components/FlipCounter'

let nodeThousands = $('.flip.thousands')
let fThousands = new Flip(1)
nodeThousands.html(fThousands.render(nodeThousands))
fThousands.flipTo(6)
// let fc = new FlipCounter(0, 9999);
// fc.init()
// 
// // Move to class events
// $(window).click(function() {
//   fc.add(20); 
// });
