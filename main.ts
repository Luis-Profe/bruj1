let dir = 0
basic.forever(function () {
    dir = input.compassHeading()
    if (dir >= 330 || dir <= 30) {
        basic.showString("N")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
