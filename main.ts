radio.onReceivedNumber(function (receivedNumber) {
    vijandkogel = game.createSprite(4 - receivedNumber, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        vijandkogel.change(LedSpriteProperty.Y, 1)
    }
    if (vijandkogel.isTouching(ruimteschip)) {
        levens += -1
        vijandkogel.delete()
    } else {
        basic.pause(500)
        vijandkogel.delete()
    }
})
input.onButtonPressed(Button.A, function () {
    ruimteschip.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    jouwkogel = game.createSprite(ruimteschip.get(LedSpriteProperty.X), 3)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        jouwkogel.change(LedSpriteProperty.Y, -1)
    }
    basic.pause(500)
    jouwkogel.delete()
    radio.sendNumber(jouwkogel.get(LedSpriteProperty.X))
})
input.onButtonPressed(Button.B, function () {
    ruimteschip.change(LedSpriteProperty.X, 1)
})
let jouwkogel: game.LedSprite = null
let vijandkogel: game.LedSprite = null
let ruimteschip: game.LedSprite = null
radio.setGroup(33)
ruimteschip = game.createSprite(2, 4)
let levens = 3
basic.forever(function () {
    if (levens == 0) {
        game.gameOver()
    }
})
