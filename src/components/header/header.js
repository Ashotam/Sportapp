import React, {Component} from 'react';
import "./header.css"

import jsonFile from "../../base";

class Header extends Component {

    state = {
        enter: false,
        class: 'openedLogin',
        userData: {
            mail: "",
            password: ""
        }
    };

    login = () => {
        this.setState({
            enter: true
        })

    };


    getInfo = (e, tag) => {

        let prevUserData = this.state.userData;
        if (tag === 'mail') {
            prevUserData.mail = e.target.value;
        } else {
            prevUserData.password = e.target.value;
        }

        this.setState({
            userData: prevUserData
        });

    };

    sendData = () => {
        let dataToSend = this.state.userData;
        // need to send data to server
        let d = jsonFile;
        for (let dKey in d) {
            if (d[dKey].email === dataToSend.mail && d[dKey].password === dataToSend.password) {
                console.log( d[dKey]);
                return true;
            } else (console.log("wrong email or password"))
        }
    };

    render() {
        return (
            <div style={{backgroundColor: 'black'}}>
                <div className={'wrapper'}>
                    <div className={"header"}>

                        <div className={"logo"}>
                            <div className={'img'}/>
                            <div className={"logoName"}>ArmBuilding</div>
                        </div>

                        {!this.state.enter ?
                            <div className={'loginPart'}>
                                <div className={"registration"}>Sign in</div>
                                <div className={`login`}
                                     onClick={this.login}>Login
                                </div>
                            </div>
                            :
                            <div className={'openedLogin'}>

                                <div className={'header_inputs'}>
                                    <input type="text" placeholder={'Email'} value={this.state.userData.mail}
                                           onChange={(e) => this.getInfo(e, 'mail')}/>
                                    <input type="password" placeholder={'password'}
                                           value={this.state.userData.password}
                                           onChange={(e) => this.getInfo(e, 'pass')}/>

                                </div>
                                <div className={`login ${this.state.enter && this.state.class}`}
                                     onClick={this.sendData}>Login
                                </div>

                            </div>
                        }

                    </div>
                </div>
            </div>

        );
    }
}

export default Header;