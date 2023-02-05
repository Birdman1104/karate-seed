import { Arm } from "./Arm";

export class FKSystem {
    private _x: number;
    private _y: number;
    private _lastArm: any;
    private _arms: Arm[];

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

    public get lastArm(): any {
        return this._lastArm;
    }

    public set lastArm(value) {
        this._lastArm = value;
    }

    public addArm(length): void {
        const arm = new Arm(0, 0, length, 0);

        this._arms.push(arm);

        if (this._lastArm) {
            arm.parent = this._lastArm;
        }
        this._lastArm = arm;

        this.update();
    }

    public rotateArm(index: number, angle: number): void {
        this._arms[index].angle = angle;
    }

    public update(): void {
        for (let i = 0; i < this.arms.length; i += 1) {
            const arm = this._arms[i];

            if (arm.parent) {
                arm.x = arm.parent.endXForFK;
                arm.y = arm.parent.endYForFK;
            } else {
                arm.x = this._x;
                arm.y = this._y;
            }
        }
    }
}
