import * as React from 'react'
import {Route} from 'react-router-dom'
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";
const logo = require('./logo.svg');

export default class HomePage extends React.Component<any, any> {
    state={
        name:""
    };
    render() {
        const LinkToGame = (props) => <Link to={(window.location.pathname+"/game/"+this.state.name).replace("//","/")} {...props} />;
        return (
            <div className="fullSpace mainFrame">
                <Paper elevation={3} style={{padding:"20px",margin:"auto"}} className="playButtonFrame">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Typography component="h1">
                        Asteroid.io
                    </Typography>
                    <TextField
                        label="Name"
                        value={this.state.name}
                        onChange={(event)=>{this.setState({name:event.target.value})}}
                        margin="normal"
                    />
                    <Typography className="playButtonFrame">
                        <Button
                            variant="raised"
                            className="playButton"
                            component={LinkToGame}
                            disabled={this.state.name.replace(" ","")===""}
                        >
                            PLAY!!
                        </Button>
                    </Typography>
                </Paper>
            </div>
        )
    }
}