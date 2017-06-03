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
    let maxValueLength = this.MAX_VALUE.toString().length
    if(currentValueLength < maxValueLength) {
      // fill the the array with leading zeros if number too small for the counter
      let blankArr = Array(maxValueLength - currentValueLength).fill(0)
      digitsArray = blankArr.concat(digitsArray)
    }
    this.renderFlips(digitsArray);
  }
  
  renderFlips(digitsArr) {
    renderThousands(digitsArr[0]);
    renderHundreds(digitsArr[1]);
    renderTens(digitsArr[2]);
    renderUnits(digitsArr[3]);
    
    function renderUnits(val) {
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
    
    function renderTens(val) {    
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
        
    function renderHundreds(val) {    
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
        
    function renderThousands(val) {    
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
  
    thousandsIncrement() {
        $("body").removeClass("play");
        var aa = $("ul.thousands li.active");
    
        if (aa.html() == undefined) {
            aa = $("ul.thousands li").eq(0);
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
    
        }
        else if (aa.is(":last-child")) {
            $("ul.thousands li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa = $("ul.hundreds li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
            this.thousandsIncrement();
        }
        else {
            $("ul.thousands li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }
    
    }
    
    hundredsIncrement() {
        $("body").removeClass("play");
        var aa = $("ul.hundreds li.active");
    
        if (aa.html() == undefined) {
            aa = $("ul.minutePlay li").eq(0);
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
    
        }
        else if (aa.is(":last-child")) {
            $("ul.hundreds li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa = $("ul.hundreds li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
            this.thousandsIncrement();
        }
        else {
            $("ul.hundreds li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }
    
    }
    
    
    tensIncrement() {
        $("body").removeClass("play");
        var aa = $("ul.tens li.active");
    
        if (aa.html() == undefined) {
            aa = $("ul.tens li").eq(0);
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
    
        }
        else if (aa.is(":last-child")) {
            $("ul.tens li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa = $("ul.tens li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
            this.hundredsIncrement();
        }
        else {
            $("ul.tens li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }
    
    }
    
    unitsIncrement() {
        $("body").removeClass("play");
        var aa = $("ul.units li.active");
    
        if (aa.html() == undefined) {
            aa = $("ul.units li").eq(0);
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
    
        }
        else if (aa.is(":last-child")) {
            $("ul.units li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa = $("ul.units li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
            this.tensIncrement();
        }
        else {
            $("ul.units li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }
        let snd = new Audio("./assets/sounds/click.wav");
        snd.play();
    }
}