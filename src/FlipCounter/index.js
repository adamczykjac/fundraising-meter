import $ from 'jquery';

export default class FlipCounter {
  constructor(minValue, maxValue) {
    this._currentValue = 0;
    this.MIN_VALUE = minValue;
    this.MAX_VALUE = maxValue;
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
    
  init() {
    $("body").removeClass("play"); // if anything is playing
    this.currentValue = Math.ceil(Math.random() * this.MAX_VALUE + this.MIN_VALUE)
    let digitsArray = this.currentValue.toString().split("").map((digitString) => {
      return parseInt(digitString);
    })
    let currentValueLength = this.currentValue.toString().length
    let maxValueLength = this.currentValue.toString().length
    if(currentValueLength < maxValueLength) {
      // fill the the array with leading zeros if number too small for the counter
      Array(maxValueLength - currentValueLength).fill(0)
    }
    this.setFlips(digitsArray);
  }
  
  setFlips(digitsArr) {
    setUnits(digitsArr[0]);
    setTens(digitsArr[1]);
    setHundreds(digitsArr[2]);
    setThousands(digitsArr[3]);
    
    function setUnits(val) {
      var aa = $("ul.units li.active");
      var nxt;
      
      if (aa.html() == undefined) {
        aa = $("ul.units li").eq(0);
      if (val != 0) {
        aa.addClass("before")
          .removeClass("active");
      }
        nxt = $("ul.units li").eq(val);
        nxt.addClass("active")
          .closest("body")
          .addClass("play");
      }
    }
    
    function setTens(val) {    
      var aa = $("ul.tens li.active");
      var nxt;
      
      if (aa.html() == undefined) {
        aa = $("ul.tens li").eq(0);
        if (val != 0) {
          aa.addClass("before")
            .removeClass("active");
        }
        nxt = $("ul.tens li").eq(val);
        nxt.addClass("active")
          .closest("body")
          .addClass("play");
      }
    }
        
    function setHundreds(val) {    
      var aa = $("ul.hundreds li.active");
      var nxt;
      
      if (aa.html() == undefined) {
        aa = $("ul.hundreds li").eq(0);
        if (val != 0) {
          aa.addClass("before")
            .removeClass("active");
        }
        nxt = $("ul.hundreds li").eq(val);
        nxt.addClass("active")
          .closest("body")
          .addClass("play");
      }
    }
        
    function setThousands(val) {    
      var aa = $("ul.thousands li.active");
      var nxt;
      
      if (aa.html() == undefined) {
        aa = $("ul.thousands li").eq(0);
        if (val != 0) {
          aa.addClass("before")
            .removeClass("active");
        }
        nxt = $("ul.thousands li").eq(val);
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