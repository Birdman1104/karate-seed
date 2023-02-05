export class ResultView extends Phaser.GameObjects.Container {
    private blocker: Phaser.GameObjects.Graphics;

    public constructor(scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        this.initBlocker();
    }

    private initBlocker(): void {
        const { width, height } = this.scene.scale.gameSize;

        const gr = this.scene.add.graphics();
        gr.fillRect(0, 0, width, height);
        gr.fillStyle(0x000000, 0);

        this.add((this.blocker = gr));
    }
}
