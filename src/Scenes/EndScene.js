class EndScene extends Phaser.Scene {
    constructor() {
        super("endScene");
    }

    preload() {

    }

    create() {
        document.getElementById('description').innerHTML = '<h2>endScene.js</h2>'
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.tKey)) {
            this.scene.start("platformerScene");
        }
    }

}
