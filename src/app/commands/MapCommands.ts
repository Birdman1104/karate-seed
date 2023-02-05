import { lego } from "@armathai/lego";
import { eventCommandPairs } from "./EventCommandPairs";

export const mapCommands = (): void => {
    eventCommandPairs.forEach((pair) => {
        lego.command.on(pair.event, pair.command);
    });
};
