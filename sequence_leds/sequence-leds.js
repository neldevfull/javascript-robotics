var five  = require('johnny-five');
var board = five.Board();

board.on("ready", function() {
    // Create leds
    var array = new five.Leds([5, 4, 3, 2]);
    var TIME  = 2000;
    var repet = TIME * array.length;

    setInterval(function(){
        var leds = {
            led: array,
            amount: array.length
        }
        ledOnOff(leds, TIME);
    }, repet);
});

// Recursive for on and off leds
function ledOnOff(leds, time) {
    var amount = leds.amount;
    leds.led[amount - 1].on();

    board.wait(time, function(){
        leds.led[amount - 1].off();

        amount = --leds.amount;

        if(amount >= 1)
            ledOnOff(leds, 2000);
    });
}