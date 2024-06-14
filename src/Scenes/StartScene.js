class StartScene extends Phaser.Scene {
    constructor() {
        super("startScene");
        this.spaceKey = null;
    }

    preload() {

    }

    create() {
        document.getElementById('description').innerHTML = '<h2>endScene.js</h2>'
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        this.add.text(200, 25, "Jumperman", 20).setOrigin(0.5);
        this.add.text(200, 25, "Press space to start the game.", 20).setOrigin(0.5);
        if(Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
            this.scene.start("platformerScene");
        }
    }

}
