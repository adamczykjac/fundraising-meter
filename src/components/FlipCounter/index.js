import $ from 'jquery';
import Flip from '../Digit'

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
    renderFlip("thousands", digitsArr[0]);
    renderFlip("hundreds", digitsArr[1]);
    renderFlip("tens", digitsArr[2]);
    renderFlip("units", digitsArr[3]);
    
    function renderFlip(position, val) {
      var aa = $("ul." + position + " li.active");
      var nxt;
      
      if (aa.html() == undefined) {
        aa = $("ul." + position + " li").eq(0);
      if (val != 0) {
        aa.addClass("before")
          .removeClass("active");
      }
        nxt = $("ul." + position + " li").eq(val);
        nxt.addClass("active")
          .closest("body")
          .addClass("play");
      }
    }
  }
  
  incrementFlip(position) {
    $("body").removeClass("play");
    var aa = $("ul." + position + " li.active");

    if (aa.html() == undefined) {
      aa = $("ul." + position + " li").eq(0);
      aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
    }
    else if (aa.is(":last-child")) {
      $("ul." + position + " li").removeClass("before");
      aa.addClass("before").removeClass("active");
      aa = $("ul." + position + " li").eq(0);
      aa.addClass("active")
        .closest("body")
        .addClass("play");
      // TODO
      this.incrementFlip(position.next())
    }
    else {
      $("ul." + position + " li").removeClass("before");
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