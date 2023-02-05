import * as Stats from "stats.js";
import { SceneNames } from "../enums/Scenes";
import { MainView } from "../views/MainView";

export default class MainScene extends Phaser.Scene {
    private mainView: MainView;

    public constructor() {
        super({ key: SceneNames.Main });
    }

    public update(): void {
        this.mainView?.update();
    }

    private init(): void {
        this.initMainView();

        if (process.env.NODE_ENV !== "production") {
            this.initStatJS();
        }
    }

    private initMainView(): void {
        this.mainView = new MainView(this);
        this.add.existing(this.mainView);
    }

    private initStatJS(): void {
        const stats = new Stats();
        stats.showPanel(0);
        const update = (): void => {
            stats.begin();
            stats.end();
            requestAnimationFrame(update);
        };
        update();
        document.body.appendChild(stats.dom);
    }
}
