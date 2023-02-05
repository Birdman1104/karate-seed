import { lego, legoLogger } from "@armathai/lego";
import "phaser";
import "phaser/plugins/spine/dist/SpinePlugin";
import BootScene from "./app/scenes/BootScene";
import MainScene from "./app/scenes/MainScene";
import PreloadScene from "./app/scenes/PreloadScene";

const config = {
    transparent: false,
    antialiasGL: false,
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    input: {
        mouse: {
            preventDefaultWheel: false,
        },
    },
    scale: {
        parent: "phaser-game",
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    },
    plugins: {
        scene: [
            {
                key: "SpinePlugin",
                plugin: window.SpinePlugin,
                mapping: "spine",
            },
        ],
    },
    physics: {
        default: "matter",
        matter: {
            enableSleeping: true,
            gravity: {
                y: 0,
            },
            debug: {
                showBody: true,
                showStaticBody: true,
            },
        },
    },
    antialias: true,
    scene: [PreloadScene, BootScene, MainScene],
};
window.addEventListener("load", () => {
    legoLogger.start(lego, Object.freeze({}));
    new Phaser.Game(config);
});
