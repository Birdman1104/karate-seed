import { lego } from "@armathai/lego";
import { eventCommandPairs } from "./EventCommandPairs";

export const unmapCommands = (): void => {
    eventCommandPairs.forEach((pair) => {
        lego.command.off(pair.event, pair.command);
    });
};
