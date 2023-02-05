import { lego } from "@armathai/lego";
import { initGameModelCommand } from "./InitGameModelCommand";
import { initHeadModelCommand } from "./InitHeadModelCommand";

export const initModelsCommand = (): void => {
    lego.command
        //
        .execute(initHeadModelCommand)
        .execute(initGameModelCommand);
};
