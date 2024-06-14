class EndScene extends Phaser.Scene {
    constructor() {
        super("endScene");
        this.tKey = null;
    }

    preload() {

    }

    create() {
        document.getElementById('description').innerHTML = '<h2>endScene.js</h2>'
        this.tKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    }

    update() {
        this.add.text(750, 300, "Game over", 500).setOrigin(0.5);
        this.add.text(750, 350, "Press T to restart the game.", 500).setOrigin(0.5);
        this.add.text(750, 400, "Code and map by William and Joseph Gonzalez", 500).setOrigin(0.5);
        this.add.text(750, 450, "Sprites and sounds created by Kenny Assets", 500).setOrigin(0.5);
        if(Phaser.Input.Keyboard.JustDown(this.tKey)) {
            this.scene.start("startScene");
        }
    }

}
