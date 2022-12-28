input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Heart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Pitchfork)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Skull)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
    basic.clearScreen()
})
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
	
})
