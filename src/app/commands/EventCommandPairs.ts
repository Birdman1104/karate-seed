import { increaseScoreCommand } from "./IncreaseScoreCommand";

export const eventCommandPairs: { event: any; command: any }[] = [
    {
        event: "BkgClick",
        command: increaseScoreCommand,
    },
];
