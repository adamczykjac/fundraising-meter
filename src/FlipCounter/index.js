import $ from 'jquery';

export default class FlipCounter {
  constructor(initValue) {
    this.initialValue = initValue;
    this.init(this.initialValue)
  }
  
  init(value) {
    if(!value) {
      throw new Error("FlipCounter needs to be initialized with a number.")
    }
    if(value > this.MAX_DIGIT_NUMBER) {
      throw new Error("Initialized number cannot be greater than: " + this.MAX_DIGIT_NUMBER)
    }
    $("body").removeClass("play"); // if anything is playing
    
    var digitsArray = value.toString().split("").map((digitString) => {
      return parseInt(digitString);
    })
    this.setFlips(digitsArray);
  }
  
  setFlips(digitsArr) {
      setUnits();
      setTens();
      setHundreds();
      setThousands();
      
      function setUnits() {
          var aa = $("ul.units li.active");
          var nxt;
          
          if (aa.html() == undefined) {
              aa = $("ul.units li").eq(0);
          if (digitsArr[3] != 0) {
              aa.addClass("before")
                  .removeClass("active");
          }
              nxt = $("ul.units li").eq(digitsArr[3]);
              nxt.addClass("active")
                  .closest("body")
                  .addClass("play");
          }
      }
      
      function setTens() {    
        var aa = $("ul.tens li.active");
        var nxt;
        
        if (aa.html() == undefined) {
          aa = $("ul.tens li").eq(0);
          if (digitsArr[2] != 0) {
            aa.addClass("before")
              .removeClass("active");
          }
          nxt = $("ul.tens li").eq(digitsArr[2]);
          nxt.addClass("active")
            .closest("body")
            .addClass("play");
        }
      }
          
      function setHundreds() {    
        var aa = $("ul.hundreds li.active");
        var nxt;
        
        if (aa.html() == undefined) {
          aa = $("ul.hundreds li").eq(0);
          if (digitsArr[1] != 0) {
            aa.addClass("before")
              .removeClass("active");
          }
          nxt = $("ul.hundreds li").eq(digitsArr[1]);
          nxt.addClass("active")
            .closest("body")
            .addClass("play");
        }
      }
          
      function setThousands() {    
        var aa = $("ul.thousands li.active");
        var nxt;
        
        if (aa.html() == undefined) {
          aa = $("ul.thousands li").eq(0);
          if (digitsArr[0] != 0) {
            aa.addClass("before")
              .removeClass("active");
          }
          nxt = $("ul.thousands li").eq(digitsArr[0]);
          nxt.addClass("active")
            .closest("body")
            .addClass("play");
        }
      }
  }
  
  add(val) {
    var _this = this;
    var i = 0;
    myLoop();
    
    function myLoop () {
      setTimeout(function () {
        _this.unitsIncrement();
        i++;
        if (i < val) {
          myLoop();
        }
      }, 100)
    }
    this.currentValue += val;
  }
}