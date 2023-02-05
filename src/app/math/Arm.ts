export class Arm {
    private _x: number;
    private _y: number;
    private _length: number;
    private _angle: number;
    private _parent: Arm;
    private _child: Arm;
    private _isFirst: boolean;

    public constructor(x = 0, y = 0, length = 50, angle = 0, parent = null) {
        this._x = x;
        this._y = y;
        this._length = length;
        this._angle = angle;
        this._parent = parent;
        this._isFirst = false;
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

    public get length(): number {
        return this._length;
    }

    public set length(value: number) {
        this._length = value;
    }

    public get angle(): number {
        return this._angle;
    }

    public set angle(value: number) {
        this._angle = value;
    }

    public get parent(): Arm {
        return this._parent;
    }

    public set parent(value: Arm) {
        this._parent = value;
    }

    public get child(): Arm {
        return this._child;
    }

    public set child(value: Arm) {
        this._child = value;
    }

    public get isFirst(): boolean {
        return this._isFirst;
    }

    public set isFirst(value: boolean) {
        this._isFirst = value;
    }

    public get endXForFK(): number {
        let angle = this._angle;
        let parent = this._parent;

        while (parent) {
            angle += parent.angle;
            parent = parent.parent;
        }

        return this._x + Math.cos(angle) * this._length;
    }

    public get endYForFK(): number {
        let angle = this._angle;
        let parent = this._parent;

        while (parent) {
            angle += parent.angle;
            parent = parent.parent;
        }

        return this._y + Math.sin(angle) * this._length;
    }

    public get endXForIK(): number {
        return this._x + Math.cos(this._angle) * this._length;
    }

    public get endYForIK(): number {
        return this._y + Math.sin(this._angle) * this._length;
    }

    public pointAt(x: number, y: number): void {
        const dx = x - this._x;
        const dy = y - this._y;
        // const d = Math.atan(dx / dy);
        if (!this._child) {
            // TODO
            this._angle = Math.atan2(this.parent.y, this.parent.x);
            // this._angle = Math.atan2(this.y - this.parent.y, this.x - this.parent.x);
        } else {
            this._angle = Math.atan2(dy, dx);
        }
    }

    public drag(x: number, y: number, totalLength: number): void {
        // const damping = 0; //1 - this._index / totalLength; //* 0.3;
        // console.log(x, y);
        this.pointAt(x, y);

        if (this._parent && this._child) {
            this._x = (this._parent.x + this._child.x) / 2;

            this._y = (this._parent.y + this._child.y) / 2;
        } else if (!this._parent) {
            this._x = this._child.x / 2;
            this._y = this._child.y / 2;
        } else {
            this._x = x - Math.cos(this._angle) * this._length;
            this._y = y - Math.sin(this._angle) * this._length;
        }

        if (this._parent) {
            this._parent.drag(this._x, this._y, totalLength);
        }
    }
}
