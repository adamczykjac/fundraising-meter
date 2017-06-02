import $ from 'jquery';

export default class FlipCounter {
  constructor() {
    this.initialValue = 0;
    this.currentValue = initialValue;
  }
  
  init(value) {
    $("body").removeClass("play"); // if anything is playing
    
    var digitsArray = value.toString().split("").map((digitString) => {
      return parseInt(digitString);
    })
    console.log(digitsArray);
    
    this.setFlips(digitsArray);
    
    function toIntArr(num) {
        var resultArray = [];
        if (num > 9999) console.log('Number exceeds 4 digits allowable.')
        else if(num == undefined) resultArray = [0,0,0,0];
        else {
            var digitStrArr = num.toString().split('');
            function extractDigit(element, index, array) {
                resultArray.push(JSON.parse(element));
            }
            digitStrArr.forEach(extractDigit);
            while(resultArray.length < 4) resultArray.unshift(0);
        }
        return resultArray;
    }
  }
}