import React from "react";
import { Link } from 'react-router-dom';
import "../sass/Main.sass";

class Main extends React.Component {
    
    render() {
        return (
            <div className="main">
                <h1>The Main Page</h1>
                <button onClick={() => this.props.changeUsername()}>Change Userdata</button>
                <Link to = "/user"><h1>The User Page</h1></Link>
            </div>
            
        );
    }
}
export default Main