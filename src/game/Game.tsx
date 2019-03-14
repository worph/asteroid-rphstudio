import * as React from 'react';
import './Game.css';
import Scene = Phaser.Scene;
import {phaserReactService} from "./phaser/PhaserReactService";
import {CSSProperties} from "react";
import {Menu} from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer/Drawer";
import axios, {AxiosInstance} from "axios";
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import StarIcon from '@material-ui/icons/Star';
import Chip from "@material-ui/core/Chip/Chip";
import { Redirect } from 'react-router-dom';
import ResizeDetector from 'react-resize-detector';
import {BootScene} from "./asteroid/scenes/bootScene";
import {GameScene} from "./asteroid/scenes/gameScene";
import Fab from "@material-ui/core/Fab";

interface State {
    redirectTo: string;
    open: boolean;
    overlayStyle: CSSProperties;
    scores:{};
}

class AsteroidGame extends React.Component<any, State> {
    state: State = {
        redirectTo:"",
        open:false,
        overlayStyle: {
            position: "absolute",
            left: "100px",
            top: "150px",
            width: "150px",
            height: "150px"
        },
        scores:{}
    };
    private game: Phaser.Game;
    private config: GameConfig;
    private canvaName = 'game';
    private httpClient: AxiosInstance;

    componentDidMount() {

        phaserReactService.eventEmitter.on("redirect",url => {
            this.setState({redirectTo:url});
        });
        this.httpClient = axios.create();
        setTimeout(() => {
            let elementById = document.getElementById(this.canvaName);
            let offsetWidth = elementById.offsetWidth;//window.innerWidth,
            let offsetHeight = elementById.offsetHeight;//window.innerHeight,
            this.setState({
                overlayStyle: {
                    position: "absolute",
                    left: elementById.getBoundingClientRect().left + "px",
                    top: elementById.getBoundingClientRect().top + "px",
                    width: offsetWidth + "px",
                    height: offsetHeight + "px"
                }
            });
            this.config = {
                title: "NetAsteroid",
                url: "",
                version: "1.0",
                width: offsetWidth,
                height: offsetHeight,
                type: Phaser.AUTO,
                parent: this.canvaName,
                scene: [BootScene, GameScene],
                input: {
                    keyboard: true,
                    mouse: true,
                    touch: true,
                    gamepad: true
                },
                physics: {
                    default: "arcade",
                    matter: {
                        debug: false,
                        gravity: {
                            x : 0.0,
                            y: 0.0
                        },
                    },
                },
                backgroundColor: "#000000",
            };
            this.game = new Phaser.Game(this.config);
        }, 0);
    }

    componentWillUnmount() {
        phaserReactService.destroy();
        this.game.destroy(true);
    }

    update(){
        /*this.httpClient.get(phaserReactService.parameters.apiServer+'/asteroid-game/highscores').then(response => {
            let data = response.data;
            this.setState({scores:data});
        });*/
    }

    renderRedirect = () => {
        if (this.state.redirectTo!=="") {
            return <Redirect to={this.state.redirectTo} />
        }
        return <div></div>;
    };

    onResize = (width,height) => {
        //console.log(width+"/"+height)
        //resize overlay
        this.setState({
            overlayStyle: {
                position: this.state.overlayStyle.position,
                left: this.state.overlayStyle.left,
                top: this.state.overlayStyle.top,
                width: width+"px",
                height: height + "px"
            }
        });
        this.setState({overlayStyle:this.state.overlayStyle})
        //resize game
        if(this.game != undefined) {
            //this.game.resize(width, height);
            phaserReactService.resize(width,height);
        }
    };

    public render() {
        return (<ResizeDetector
                handleWidth
                handleHeight
                onResize = {this.onResize}
                render={({ width, height }) => (
                    <div className="fullSpace">
                        {this.renderRedirect()}
                        <div id="caneva-overlay" className="pointerOff" style={this.state.overlayStyle}>
                            <Drawer open={this.state.open}
                                    onClose={()=>{this.setState({open:false})}}
                                    style={{maxWidth:"50%",wordBreak: "break-all"}}
                            >
                                <Typography component="h1">

                                </Typography>
                                <Chip
                                    style={{margin:"20px"}}
                                    label={"Hello "+ phaserReactService.parameters.name}
                                />
                                <Typography component="div"> <List>
                                    <ListItem>High Scores</ListItem>
                                    {Object.keys(this.state.scores).map(key => {
                                        let score = this.state.scores[key];
                                        return <ListItem key={key}>
                                            <ListItemIcon>
                                                <StarIcon />
                                            </ListItemIcon>{key + " : " +score}</ListItem>;
                                    })}
                                </List>
                                </Typography>
                            </Drawer>
                            <div style={{position: 'relative'}}>
                                <Fab
                                    className="pointerOn"
                                    style={{
                                        position: 'absolute',
                                        top: "10px",
                                        right: "10px",
                                    }}
                                    onClick={()=>{this.setState({open:true});this.update();}}
                                ><Menu/></Fab>
                            </div></div>
                        <div id={this.canvaName}></div>
                    </div>
                )}
            />
        );
    }
}

export default AsteroidGame;
