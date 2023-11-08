input.onButtonPressed(Button.A, function () {
    winkel = 0
})
input.onButtonPressed(Button.B, function () {
    winkel = 180
})
let winkel = 0
winkel = 0
let add = 15
basic.forever(function () {
    basic.showNumber(Math.round(pins.analogReadPin(AnalogPin.P0) / 100))
    basic.pause(5000)
    winkel += add
    pins.servoWritePin(AnalogPin.P1, winkel)
    if (winkel > 150) {
        add = -1 * add
    }
    if (winkel < 15) {
        add = -1 * add
    }
})
