namespace SpriteKind {
    export const Interactable = SpriteKind.create()
}

function quest_3() {
    
    adventure.clearTextLog()
    PC = sprites.create(img`
            . . . . . . f f f f . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . f f f f f f f f f f . . . 
                    . . f f f f f b b f f f f f . . 
                    . . f f f f b b b b f f f f . . 
                    . . f f f f b b b b f f f f . . 
                    . . f f f f b b b b f f f f . . 
                    . f f f f b f b b f b f f f f . 
                    . f f f b 1 f b b f 1 b f f f . 
                    . . f f f b b f f b b f f f . . 
                    . . . f f f f b b f f f f . . . 
                    . . b b f f f f f f f f b b . . 
                    . . b b f f f f f f f f b b . . 
                    . . b b f f f f f f f f b b . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . . f f . . f f . . . . .
        `, SpriteKind.Player)
    CHEST = sprites.create(img`
            .55................................................55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55eeeeeeeeeeeeeeeeeeeee111111eeeeeeeeeeeeeeeeeeeee55.
                    .55dddddddddddddddddddd15555554dddddddddddddddddddd55.
                    .55dddddddddddddddddddd155ee554dddddddddddddddddddd55.
                    .55dddddddddddddddddddd15eeee54dddddddddddddddddddd55.
                    5555555555555555555555515eeee5455555555555555555555555
                    11111111111111111111111155ee55411111111111111111111111
                    55555555555555555555555155ee55455555555555555555555555
                    55555555555555555555555155ee55455555555555555555555555
                    444444444444444444444441555555444444444444444444444444
                    .55ddddddddddddddddddddd444444ddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                    111111111111111111111111111111111111111111111111111111
                    555555555555555555555555555555555555555555555555555555
                    555555555555555555555555555555555555555555555555555555
        `, SpriteKind.Interactable)
    CHEST.setScale(0.4, ScaleAnchor.Middle)
    controller.moveSprite(PC)
    tiles.setCurrentTilemap(tilemap`
        level1
    `)
    scene.cameraFollowSprite(PC)
    tiles.placeOnTile(PC, tiles.getTileLocation(10, 8))
    tiles.placeOnTile(CHEST, tiles.getTileLocation(7, 6))
    quest_4()
}

function quest_1() {
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 1 1 6 1 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f 1 1 f f 6 f . . . 
                . . f 6 f 1 f 1 1 f 1 f 6 f . . 
                . . f 6 f 1 1 1 1 1 1 f 6 f . . 
                . . f 6 6 f 1 1 1 1 f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . .
    `)
    adventure.addToTextlog("A mysterious spirit stops your journey through the forest")
    adventure.addToTextlog("Press (A) to Ask if she needs help")
    adventure.addToTextlog("Press (B) to Play with her")
    if (controller.A.isPressed()) {
        adventure.addToTextlog("How do you think you could help me?. He couldn't")
        adventure.addImageToTextLog(img`
            . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f 2 2 4 4 2 2 f e f f . 
                        . f e e 2 2 2 d d 2 2 2 e e f . 
                        . . f e 2 2 d d d d 2 2 e f . . 
                        . . . f 2 e 4 4 4 4 e 2 f . . . 
                        . . . . 2 2 2 2 2 2 2 2 4 e . . 
                        . . . . f 2 2 2 2 2 2 f d 4 . . 
                        . . . . f 4 2 2 5 4 4 f 4 4 . . 
                        . . . . . 2 2 . . . . . . . . . 
                        . . . . . 2 2 . . . . . . . . .
        `)
        quest_2()
    } else if (controller.anyButton.isPressed()) {
        adventure.addImageToTextLog(img`
            . . . . . . c c c c . . . . . . 
                        . . . . c c f f f f c c . . . . 
                        . . . c f f f f f f f f c . . . 
                        . . c f f f f b b f f f f c . . 
                        . . c f f f b b b b f f f c . . 
                        . . c f f f b b b b f f f c . . 
                        . . c f f f b b b b f f f c . . 
                        . c f f f 2 2 b b 2 2 f f f c . 
                        . c f f 2 2 2 b b 2 2 2 f f c . 
                        . . c f 2 2 b f f b 2 2 f c . . 
                        . . . c 2 f f b b f f 2 c . . . 
                        . . b b c f f f f f f c b b . . 
                        . . b b c f f f f f f c b b . . 
                        . . b b c f f f f f f c b b . . 
                        . . . . . c c c c c c . . . . . 
                        . . . . . c c . . c c . . . . .
        `)
        adventure.addToTextlog("You feel your body slowly becoming not yours as your eyes slowly close and you lose yourself to \"sleep\" But you aren't asleep you have become a cruel puppet of the forest with blood filed eyes waiting with the spirit for the next paserby")
        game.gameOver(false)
    }
    
}

function quest_5() {
    adventure.clearTextLog()
    controller.moveSprite(PC_AFTER_CHEST)
    tiles.setCurrentTilemap(tilemap`
        level1
    `)
    scene.cameraFollowSprite(PC_AFTER_CHEST)
    tiles.placeOnTile(PC, tiles.getTileLocation(10, 8))
    tiles.placeOnTile(CHEST, tiles.getTileLocation(7, 6))
}

function quest_4() {
    
    game.showLongText("You look in the dark rotting cheat made of rusty bolts and blood spatter wood, This is your only hope. You find a small dagger, light armor and bandages for your wounds. theres a note at the bottom. Those with no eyes see all ", DialogLayout.Bottom)
    PC_AFTER_CHEST = sprites.create(img`
            . . . . . . f f f f . . . . . . 
                    . . . . f f f f f f f f . . . . 
                    . . . f f f f f f f f f f . . . 
                    . . f f f f f b b f f f f f . . 
                    . . f f f f b b b b f f f f . . 
                    . . f f f f b b b b f f f f . . 
                    . . f f f f b b b b f f f f . . 
                    . f f f f 2 2 b b 2 2 f f f f . 
                    . f f f 2 2 2 b b 2 2 2 f f f . 
                    . . f f 2 2 b f f b 2 2 f f . . 
                    . . . f 2 f f b b f f 2 f . . . 
                    . . b b f f f f f f f f b b . . 
                    . . b b f f 2 2 2 2 f f b b . . 
                    . . b b f f 2 2 2 2 f f b b . . 
                    . . . . . 2 2 f f f f . . . . . 
                    . . . . . 2 f . . f f . . . . .
        `, SpriteKind.Player)
    sprites.destroy(PC)
    quest_5()
}

function quest_2() {
    adventure.addImageToTextLog(img`
        . . . . . . . . . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f 1 1 6 1 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f 1 1 f f 6 f . . . 
                . . f 6 f 1 f 1 1 f 1 f 6 f . . 
                . . f 6 f 1 2 1 1 2 1 f 6 f . . 
                . . f 6 6 2 2 1 1 2 2 6 6 f . . 
                . f 6 6 f f f f f f f f 6 6 f . 
                . . f f 2 2 5 3 3 5 2 2 f f . . 
                . . f 2 2 f 3 5 5 3 f 2 2 f . . 
                . . . 2 2 3 3 3 3 3 3 2 2 . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . .
    `)
    adventure.addToTextlog("You stumble back as the spirit Infront of you slowly becomes drenched in blood as she tears more of her previous \"Rescuer\" Apart making a horrendous gut wrenching sound ")
    adventure.addImageToTextLog(img`
        . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f 2 2 4 4 2 2 f e f f . 
                . f e e 2 2 2 d d 2 2 2 e e f . 
                . . f e 2 2 d d d d 2 2 e f . . 
                . . . f 2 e 4 4 4 4 e 2 f . . . 
                . . . 2 2 2 2 2 2 2 2 2 . . . . 
                . . . 2 f 2 2 2 2 2 2 f . . . . 
                . 2 2 2 2 2 2 2 2 2 2 f . . . . 
                . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                2 2 2 2 2 2 2 2 2 2 2 2 . . . .
    `)
    adventure.addToTextlog("Press (A) to join her in her fun ")
    adventure.addToTextlog("Press (B) to run into nothingness")
    if (controller.A.isPressed()) {
        adventure.addImageToTextLog(img`
            . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f 2 2 4 4 2 2 f e f f . 
                        . f e e 2 2 2 d d 2 2 2 e e f . 
                        . . f e 2 2 d d d d 2 2 e f . . 
                        . . . f 2 e 4 4 4 4 e 2 f . . . 
                        . . . 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 2 f 2 2 2 2 2 2 f . . . . 
                        . 2 2 2 2 2 2 2 2 2 2 f . . . . 
                        . 2 2 2 2 2 2 2 2 2 2 . . . . . 
                        2 2 2 2 2 2 2 2 2 2 2 2 . . . .
        `)
        adventure.addToTextlog("You start tearing into the corpse until the body is no more you have completed her game, The forest is now your home")
        adventure.addImageToTextLog(img`
            . . . . . . f f 2 2 . . . . . . 
                        . . . . f f f 2 2 2 2 2 2 . . . 
                        . . . f f f 2 2 2 2 2 2 2 . . . 
                        . . f f f e e 2 2 2 2 2 2 2 . . 
                        . . f f e 2 2 2 2 2 2 2 2 2 . . 
                        . . f e 2 f f 2 2 2 2 2 2 2 . . 
                        . . f f f f e e 2 2 2 2 2 f . . 
                        . f f e f 2 2 4 4 2 2 2 e f f . 
                        2 2 2 2 2 2 2 d d 2 2 2 e e f . 
                        . . 2 2 2 2 d d d d 2 2 e f . . 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
                        2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
                        2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
                        2 . . . 2 2 2 . 2 2 2 2 2 2 . . 
                        2 2 . . 2 2 2 . 2 2 2 2 2 2 . 2 
                        2 2 . . 2 2 2 . . 2 2 2 . . . 2
        `)
        game.over(false)
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("You find yourself stumbling around the suddenly pitch black forest and suddenly you fall into a cave you pick yourself up. \"YOU DO NOT BELLONG HERE\" A voice roars in your ear")
        adventure.addImageToTextLog(img`
            .55................................................55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55eeeeeeeeeeeeeeeeeeeee111111eeeeeeeeeeeeeeeeeeeee55.
                        .55dddddddddddddddddddd15555554dddddddddddddddddddd55.
                        .55dddddddddddddddddddd155ee554dddddddddddddddddddd55.
                        .55dddddddddddddddddddd15eeee54dddddddddddddddddddd55.
                        5555555555555555555555515eeee5455555555555555555555555
                        11111111111111111111111155ee55411111111111111111111111
                        55555555555555555555555155ee55455555555555555555555555
                        55555555555555555555555155ee55455555555555555555555555
                        444444444444444444444441555555444444444444444444444444
                        .55ddddddddddddddddddddd444444ddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
                        111111111111111111111111111111111111111111111111111111
                        555555555555555555555555555555555555555555555555555555
                        555555555555555555555555555555555555555555555555555555
        `)
        adventure.addToTextlog("You pick yourself up from you fall terrified of the cave yet its your safest option looking across the room you see a chest. Prepare yourself")
        quest_3()
    }
    
}

let PC_AFTER_CHEST : Sprite = null
let CHEST : Sprite = null
let PC : Sprite = null
music.play(music.createSong(assets.song`
        to_the_ballroom
    `), music.PlaybackMode.InBackground)
quest_1()
