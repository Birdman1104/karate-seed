import { Tree } from "./Tree";

export class GameView extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;
    private tree: Tree;

    public constructor(public scene) {
        super(scene);
        this.init();
    }

    private init(): void {
        // this.initBkg();
        // this.initTree();
        this.initAnimation();
    }

    private initBkg(): void {
        const { width, height } = this.scene.scale.gameSize;
        this.bkg = this.scene.add.sprite(width / 2, height / 2, "bkg.jpg");
        this.bkg.setInteractive();
        this.bkg.on(Phaser.Input.Events.POINTER_MOVE, (_pointer, _x, _y) => {
            // this.localAngle = Phaser.Math.Angle.Between(0, 1, x - this.iks.x, y - this.iks.y);
            // console.log(this.localAngle);
        });
        this.add(this.bkg);
    }

    private initTree(): void {
        const { width: w, height: h } = this.scene.scale.gameSize;
        this.tree = new Tree(this.scene);
        this.tree.setPosition(w / 2, h - 70);
        this.add(this.tree);
    }

    private initAnimation(): void {
        //
    }
}
