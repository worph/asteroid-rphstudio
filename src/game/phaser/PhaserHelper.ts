declare interface GraphicsParam{
    scene:Phaser.Scene,opt:any
}

declare interface BodyState {
    velocity:{
        x:number,
        y:number
    }
    angularVelocity:number
}

declare interface PhysicsParameters{
    default?:string;
    matter?:MatterJsParameters
}

declare interface MatterJsParameters{
    //see GameConfig
    debug?: boolean,
    gravity?: {
        x : number,
        y: number
    },
    setBounds?: {
        x: number,
        y: number,
        width: number,
        height: number,
        thickness: number
    },
    enableSleeping?: boolean
}