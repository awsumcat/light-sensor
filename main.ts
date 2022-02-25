input.onButtonPressed(Button.A, function () {
	
})
let LL = input.lightLevel()
basic.forever(function () {
    LL = input.lightLevel()
    if (LL > 192) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
    } else if (LL < 64) {
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            # # . . .
            # . # . .
            # . . # .
            # . # . .
            # # . . .
            `)
    } else if (LL > 128 && LL < 192) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . # . .
            . . # . .
            # # . # #
            . . # . .
            . . # . .
            `)
    } else if (LL < 128 && LL > 64) {
        music.playTone(247, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        music.setVolume(0)
    } else {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . . .
            . # . . .
            `)
    }
})
