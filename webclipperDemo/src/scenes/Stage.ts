import Phaser from "phaser";
import { textStyles } from "../constants/styles";

export class Stage extends Phaser.Scene {
  constructor() {
    super("Stage");
  }

  preload() {}

  create() {
    const text = this.add.text(100, 400, "We are in the first Stage", textStyles.debug);
  }
}
