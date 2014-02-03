/* OBJECTS DEFINITIONS */

var FlipCounter = function (initVal) { 
    this.initialValue = initVal;
    this.currentValue = initVal;
    
    /* METHODS */
    this.initValue = function() {
        var digits = toIntArr(this.initialValue);
        $("body").removeClass("play"); // if anything is playing
        this.setFlips(digits);
        
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
    };
        
    this.add = function(val) {
        var _this = this;
        var i = 0;
        myLoop();
        
        function myLoop () {           //  create a loop function
            setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                _this.unitsIncrement();          //  your code here
                i++;                     //  increment the counter
                if (i < val) {            //  if the counter < 10, call the loop function
                    myLoop();             //  ..  again which will trigger another 
                }                        //  ..  setTimeout()
            }, 100)
        }
        this.currentValue += val;
    };
    
    this.add10 = function() {
        this.add(10);
    };
};

/* PROTOTYPES */

FlipCounter.prototype.setFlips = function (digitsArr) {   
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

FlipCounter.prototype.thousandsIncrement = function () {
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

FlipCounter.prototype.hundredsIncrement = function () {
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


FlipCounter.prototype.tensIncrement = function () {
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

FlipCounter.prototype.unitsIncrement = function () {
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
    snd = new Audio("click.wav");
    snd.play();
}

/* MAIN */

var fc = new FlipCounter();
fc.initValue();

$(document).click(function() {
   fc.add(20); 
});
