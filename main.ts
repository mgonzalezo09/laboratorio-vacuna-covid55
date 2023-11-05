basic.forever(function () {
    if (input.temperature() < 20 || input.temperature() > 22) {
        music.play(music.stringPlayable("C D C D C D C D ", 200), music.PlaybackMode.LoopingInBackground)
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    } else if (input.lightLevel() < 120 || input.lightLevel() > 130) {
        music.play(music.stringPlayable("G B G B G B G B ", 200), music.PlaybackMode.LoopingInBackground)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        music.stopMelody(MelodyStopOptions.All)
        basic.showIcon(IconNames.Yes)
    }
})
