let Motion = 0
basic.forever(function () {
    Motion = pins.digitalReadPin(DigitalPin.P1)
    if (Motion == 0) {
        basic.showIcon(IconNames.No)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    }
})
