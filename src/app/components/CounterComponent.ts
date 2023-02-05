import { lego } from "@armathai/lego";

export class CounterComponent extends Phaser.GameObjects.Container {
    private bkg: Phaser.GameObjects.Sprite;
    private label: Phaser.GameObjects.Text;
    private laps = 0;

    public constructor(scene) {
        super(scene);
        lego.event.on("GameModelScoreUpdate", this.onScoreUpdate, this);
        this.init();
    }

    private init(): void {
        this.initBkg();
        this.initLabel();
    }

    private initBkg(): void {
        this.bkg = this.scene.add.sprite(0, 0, "game-ui", "counter-bkg.png");
        this.add(this.bkg);
    }

    private initLabel(): void {
        this.label = this.scene.add.text(-170, -5, `Laps: ${this.laps}`, {
            fontSize: "40px",
        });
        this.label.setOrigin(0, 0.5);
        this.add(this.label);
    }

    private onScoreUpdate(newScore: number): void {
        this.laps = newScore;
        this.label.setText(`Laps: ${this.laps}`);
    }
}
