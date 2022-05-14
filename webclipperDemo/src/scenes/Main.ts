import Phaser from "phaser";
import { textStyles } from "../constants/styles";

export class Main extends Phaser.Scene {
  key: Phaser.Input.Keyboard.Key;

  constructor() {
    super("Main");
    this.key = undefined;
  }

  preload() {
    this.load.image("logo", "assets/logo.png");
  }

  create() {
    // Display something
    const logo = this.add.image(400, 100, "logo");
    const text = this.add.text(100, 400, "Hit the space bar", textStyles.debug);

    // An animation
    this.tweens.add({
      targets: logo,
      y: 120,
      duration: 1500,
      ease: "Sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Keys
    this.key = this.input.keyboard.addKey("SPACE");
  }

  update() {
    if (this.key.isDown) {
      console.log("Space pressed");
      //this.scene.launch("Stage");
      //this.scene.stop();
    }
  }
}
