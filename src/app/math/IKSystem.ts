import { Arm } from "./Arm";

export class IKSystem {
    private _x: number;
    private _y: number;
    private _arms: Arm[];
    private _lastArm: Arm;
    private _firstArm: Arm;

    public constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
        this._arms = [];
        this._lastArm = null;
    }

    public get x(): number {
        return this._x;
    }

    public set x(value: number) {
        this._x = value;
    }

    public get y(): number {
        return this._y;
    }

    public set y(value: number) {
        this._y = value;
    }
    public get arms(): Arm[] {
        return this._arms;
    }

    public get lastArm(): Arm {
        return this._lastArm;
    }

    public set lastArm(value: Arm) {
        this._lastArm = value;
    }

    public addArm(length: number, index: number): void {
        const arm = new Arm(index, this._x, this._y, length, 0);

        if (this._lastArm) {
            arm.x = this._lastArm.endXForIK;
            arm.y = this._lastArm.endYForIK;
            arm.parent = this._lastArm;
            this._lastArm.child = arm;
        } else {
            arm.x = this._x;
            arm.y = this._y;
        }

        this.lastArm = arm;

        this._arms.push(arm);
    }

    public drag(x: number, y: number): void {
        this._lastArm.drag(x, y, this._arms.length);
    }
}
