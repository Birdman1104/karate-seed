import { lego } from "@armathai/lego";
import { assets } from "../../assets/assetsNames/assets";
import { atlases } from "../../assets/assetsNames/atlases";
import { audioAssets } from "../../assets/assetsNames/audio";
import { shaders } from "../../assets/assetsNames/shaders";
import { spines } from "../../assets/assetsNames/spines";
import { videos } from "../../assets/assetsNames/videos";
import { initModelsCommand } from "../commands/InitModelsCommand";
import { mapCommands } from "../commands/MapCommands";
import { SceneNames } from "../enums/Scenes";

export default class PreloadScene extends Phaser.Scene {
    public constructor() {
        super({ key: SceneNames.Preload });
    }

    private preload(): void {
        console.log("Starting Asset loading");
        this.loadAssets();
        this.loadAtlases();
        this.loadSpriteSheet();
        // this.loadAudio();
        // this.loadSpines();
        // this.loadShaders();
    }

    private init(): void {
        //
    }

    private create(): void {
        console.log("Asset loading is completed");
        lego.command.execute(mapCommands);
        this.scene.start(SceneNames.Main);
        lego.command.execute(initModelsCommand);
    }

    private loadAssets(): void {
        if (assets.length === 0) return;
        assets.forEach((el) => {
            const { name, path } = el;
            this.load.image(name, path);
        });
    }

    private loadAtlases(): void {
        if (atlases.length === 0) return;
        atlases.forEach((el) => {
            this.load.atlas(el, `./assets/atlas/${el}.png`, `./assets/atlas/${el}.json`);
        });
    }

    private loadSpriteSheet(): void {
        ["worm"].forEach((el) => {
            this.load.spritesheet(el, `./assets/spritesheets/${el}-spritesheet.png`, {
                frameWidth: 24,
                frameHeight: 24,
            });
        });
    }

    private loadAudio(): void {
        if (audioAssets.length === 0) return;
        audioAssets.forEach((el) => {
            const { name, path } = el;
            this.load.audio(name, path);
        });
    }

    private loadVideo(): void {
        if (videos.length === 0) return;
        audioAssets.forEach((el) => {
            const { name, path } = el;
            this.load.video(name, path);
        });
    }

    private loadShaders(): void {
        if (shaders.length === 0) return;
        shaders.forEach((el) => {
            const { name, path } = el;
            this.load.glsl(name, path);
        });
    }

    private loadSpines(): void {
        if (spines.length === 0) return;
        spines.forEach((el) => {
            const { key, atlasURL, jsonURL, preMultipliedAlpha } = el;
            this.load.spine(key, jsonURL, atlasURL, preMultipliedAlpha);
        });
    }
}
