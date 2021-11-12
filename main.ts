let Motion = 0
basic.forever(function () {
    Motion = pins.digitalReadPin(DigitalPin.P1)
    if (Motion == 0) {
        basic.showNumber(Motion)
        basic.showIcon(IconNames.No)
    } else {
        basic.showNumber(Motion)
        basic.showIcon(IconNames.Yes)
    }
})
