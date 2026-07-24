radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(0)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
