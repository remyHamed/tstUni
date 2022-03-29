
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
}