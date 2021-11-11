basic.forever(function () {
    let Motion = 0
    if (Motion == 0) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.No)
            basic.pause(200)
        }
    } else {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Yes)
            basic.pause(200)
        }
    }
})
