import { ObservableModel } from "./ObservableModel";

export class GameModel extends ObservableModel {
    protected emitEventsFor = ["score"];
    private _score: number = null;

    public constructor() {
        super("GameModel");
        this.makeObservable();
    }

    public get score(): number {
        return this._score;
    }

    public set score(value: number) {
        this._score = value;
    }

    public init(): void {
        this.score = 0;
    }
}
