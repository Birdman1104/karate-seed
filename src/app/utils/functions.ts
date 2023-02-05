import { INinePatchConfig, NinePatch } from "@koreez/phaser3-ninepatch";
import { Scene } from "phaser";
import TextStyle = Phaser.Types.GameObjects.Text.TextStyle;
import Sprite = Phaser.GameObjects.Sprite;
import Text = Phaser.GameObjects.Text;
import Graphics = Phaser.GameObjects.Graphics;

export const makeNinePatch = (scene: Phaser.Scene, config: INinePatchConfig): NinePatch => {
    const { x = 0, y = 0, width, height, key, frame, patchesConfig } = config;
    return new NinePatch(scene, x, y, width, height, key, frame, patchesConfig);
};

export const createText = (scene: Phaser.Scene, x: number, y: number, content: string, style: TextStyle): Text => {
    const text = scene.add.text(x, y, content, style);
    text.setOrigin(0.5, 0.5);
    text.setPadding(10, 10, 10, 10);
    return text;
};

export const createSprite = (scene: Phaser.Scene, texture: string, frame?: string): Sprite => {
    const sprite = scene.add.sprite(0, 0, texture);
    frame && sprite.setFrame(frame);
    return sprite;
};

export const toUpperCase = (str: string): string => {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => {
        return match.toUpperCase();
    });
};

export const formatTimeText = (secondsLeft: number, fullTime = true): string => {
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft %= 3600;
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    if (fullTime) {
        return `${hours}h ${minutes}m ${seconds}s`;
    } else {
        let str = "";
        const arr: { time: number; letter: string }[] = [
            { time: hours, letter: "h" },
            { time: minutes, letter: "m" },
            { time: seconds, letter: "s" },
        ];
        arr.forEach((el) => {
            el.time && (str += ` ${el.time}${el.letter}`);
        });
        return str || "0s";
    }
};

export const getTexture = (() => {
    let texture;

    return (scene: Scene, _config: any): Graphics => {
        if (!texture) {
            // texture = new Graphics();
            // texture.
        }

        return new Graphics(scene);
    };
})();
