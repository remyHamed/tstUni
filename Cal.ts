
export class Cal {
    _figures:number[];

    constructor(){
        this._figures = [];
    }

    set figures(args: number[]) {
        for(let i = 0; i < args.length; i++)
            this._figures.push(args[i]);
    }

    get figures(){
        return this._figures;
    }

    add():number {
        let sum = 0;
        for (let index = 0; index < this._figures.length; index++)
            sum += this._figures[index];
        return sum;
    }

    less():number {
        let res = this._figures[0];
        for (let index = 1; index < this._figures.length; index++)
            res = res - this._figures[index];
        return res;
    }

    mul():number {
        let res = this._figures[0];
        for (let index = 1; index < this._figures.length; index++)
            res *= this._figures[index];
        return res;
    }

    div():number {
        let res = this._figures[0];
        for (let index = 1; index < this._figures.length; index++)
            res /= this._figures[index];
        return res;
    }

}