import { GameModel } from "./GameModel";
import { ObservableModel } from "./ObservableModel";

class HeadModel extends ObservableModel {
    protected emitEventsFor = ["gameModel"];
    private _gameModel: GameModel = null;

    public constructor() {
        super("Head");
        this.makeObservable();
    }

    public set gameModel(value: GameModel) {
        this._gameModel = value;
    }

    public get gameModel(): GameModel {
        return this._gameModel;
    }

    public init(): void {
        //
    }

    public initGameModel(): void {
        this._gameModel = new GameModel();
        this._gameModel.init();
    }
}

const Head = new HeadModel();

export default Head;
