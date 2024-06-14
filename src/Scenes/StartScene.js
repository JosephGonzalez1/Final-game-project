class StartScene extends Phaser.Scene {
    constructor() {
        super("startScene");
    }

    preload() {

    }

    create() {
        document.getElementById('description').innerHTML = '<h2>endScene.js</h2>'
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.rKey)) {
            this.scene.start("platformerScene");
        }
    }

}
