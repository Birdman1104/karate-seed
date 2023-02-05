import Head from "../../models/HeadModel";

export const increaseScoreCommand = (): void => {
    Head.gameModel.score++;
};
