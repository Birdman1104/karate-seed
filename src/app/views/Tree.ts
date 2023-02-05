export class Tree extends Phaser.GameObjects.Sprite {
    public constructor(public scene) {
        super(scene, 0, 0, "game-ui", "tree.png");
        this.setOrigin(0.5, 1);
    }
}
