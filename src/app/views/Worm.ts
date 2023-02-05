export class Worm extends Phaser.GameObjects.Container {
    private wormAnimation: Phaser.GameObjects.Sprite;
    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.createAnimations();
    }

    private createAnimations(): void {
        this.scene.anims.create({
            key: "idle",
            frames: this.scene.anims.generateFrameNumbers("worm", { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 8,
            repeat: -1,
        });
        this.scene.anims.create({
            key: "jump",
            frames: this.scene.anims.generateFrameNumbers("worm", { frames: [8, 9, 10, 11, 12, 13, 14, 15] }),
            frameRate: 8,
            repeat: 1,
        });
        this.scene.anims.create({
            key: "hit",
            frames: this.scene.anims.generateFrameNumbers("worm", { frames: [16, 17, 18, 19] }),
            frameRate: 8,
            repeat: 1,
        });
        this.scene.anims.create({
            key: "die",
            frames: this.scene.anims.generateFrameNumbers("worm", { frames: [24, 25, 26, 27, 28, 29] }),
            frameRate: 8,
            repeat: 1,
        });
    }
}
