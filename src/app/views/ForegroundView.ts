export class ForegroundView extends Phaser.GameObjects.Container {
    private modal: Phaser.GameObjects.Sprite;

    public constructor(scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initModal();
    }

    private initModal(): void {
        // const { width, height } = this.scene.scale.gameSize;
        // this.modal = this.scene.add.sprite(0, 0, modalTextureName);
        // this.modal.setOrigin(0);
        // this.modal.setInteractive();
        // this.modal.setVisible(false);
        // this.add(this.modal);
    }
}
