import * as EventEmitter from "eventemitter3";

export class PhaserReactService {
    private _parameters:any;
    eventEmitter = new EventEmitter();
    gameDestroyedCallback:(()=>void)[] = [];
    onResizeCallBack:((width: number, height: number)=>void)[] = [];

    get parameters(): any {
        return this._parameters;
    }

    set parameters(value: any) {
        this._parameters = value;
    }

    onDestroyEvent(callback:()=>void){
        this.gameDestroyedCallback.push(callback);
    }

    destroy(){
        this.gameDestroyedCallback.forEach(value => {
            value();
        });
        this.gameDestroyedCallback = [];
        this.parameters = {};
    }

    onResizeEvent(callback:(width: number, height: number)=>void){
        this.onResizeCallBack.push(callback);
    }

    resize(width: number, height: number) {
        this.onResizeCallBack.forEach(value => {
            value(width,height);
        });
    }
}

export let phaserReactService = new PhaserReactService();