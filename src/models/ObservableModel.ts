import { lego } from "@armathai/lego";

const getUUID = (() => {
    let i = 0;
    return () => `${++i}`;
})();

export class ObservableModel {
    protected emitEventsFor: string[];

    // eslint-disable-next-line @typescript-eslint/naming-convention
    protected __name__: string;
    private _uuid: string;

    public constructor(name: string) {
        this.__name__ = name;
        this._uuid = getUUID();
    }

    public get uuid(): string {
        return this._uuid;
    }

    protected makeObservable(...props: string[]): void {
        lego.observe.makeObservable(this, ...props);
    }

    protected createObservable(property: string, value: any): void {
        lego.observe.createObservable(this, property, value);
    }

    protected removeObservable(...properties: string[]): void {
        lego.observe.removeObservable(this, ...properties);
    }

    protected initialize(...args: any[]): void {
        void args;
    }

    protected destroy(): void {
        //
    }
}
