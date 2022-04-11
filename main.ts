radio.onReceivedNumber(function (receivedNumber) {
    vijandkogel = game.createSprite(4 - receivedNumber, 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        vijandkogel.change(LedSpriteProperty.Y, 1)
    }
    if (vijandkogel.isTouching(ruimteschip)) {
        levens += -1
        music.ringTone(131)
        vijandkogel.delete()
        if (levens == 2) {
            leven1 = game.createSprite(1, 0)
            leven2 = game.createSprite(2, 0)
            for (let index = 0; index < 4; index++) {
                leven3 = game.createSprite(3, 0)
                basic.pause(200)
                leven3.delete()
                basic.pause(200)
            }
            leven1.delete()
            leven2.delete()
        }
        if (levens == 1) {
            leven1 = game.createSprite(1, 0)
            for (let index = 0; index < 4; index++) {
                leven2 = game.createSprite(2, 0)
                basic.pause(200)
                leven2.delete()
                basic.pause(200)
            }
            leven1.delete()
        }
        if (levens == 0) {
            game.gameOver()
        }
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
let leven3: game.LedSprite = null
let leven2: game.LedSprite = null
let leven1: game.LedSprite = null
let levens = 0
let ruimteschip: game.LedSprite = null
radio.setGroup(33)
ruimteschip = game.createSprite(2, 4)
levens = 3
leven1 = game.createSprite(1, 0)
leven2 = game.createSprite(2, 0)
leven3 = game.createSprite(3, 0)
basic.pause(1000)
leven1.delete()
leven2.delete()
leven3.delete()
