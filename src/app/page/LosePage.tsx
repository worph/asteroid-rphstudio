import * as React from 'react'
import {Route} from 'react-router-dom'
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";
import {phaserReactService} from "../../game/phaser/PhaserReactService";
const logo = require('./logo.svg');

interface EndResult{
    currentScore:number;
    highScore:number
    isHighScore:boolean;
}

export default class LosePage extends React.Component<any, any> {
    state={
        name:""
    };

    end:EndResult;
    resetView = true;

    componentWillMount(): void {
        if(phaserReactService.parameters!==undefined) {
            this.end = phaserReactService.parameters.end;
        }
    }

    render() {
        const LinkToHome = (props) => <Link to={("/").replace("//","/")} {...props} />;
        return (
            <div className="fullSpace mainFrame">
                <Paper elevation={3} style={{padding:"20px",margin:"auto"}} className="playButtonFrame">
                    <Typography component="h1">
                        You Died!!
                        {this.end && <div>
                            {this.end.isHighScore &&<div>But at least you did an high score!</div>}
                            {!this.end.isHighScore &&<div>And you didn't even made an high score!</div>}
                            <div>Current score : {this.end.currentScore}</div>
                            <div>High score : {this.end.highScore}</div>
                        </div>}
                    </Typography>
                    <Typography component="h1">
                        {this.resetView?<Button
                            variant="raised"
                            onClick={()=>{window.location.href="/"}}
                        >
                            Retry
                        </Button>:
                        <Button
                            variant="raised"
                            component={LinkToHome}
                        >
                            Retry
                        </Button>}
                    </Typography>
                </Paper>
            </div>
        )
    }
}