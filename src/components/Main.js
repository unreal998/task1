import React from "react";
import { Link } from 'react-router-dom';
class Main extends React.Component {
    render() {
        return (
            <div>
                    <div>
                        <h1>The Main Page</h1>
                    </div>
                    <div>
                        <button onClick={() => this.props.changeUsername()}>Change the Username</button>
                    </div>
                    <Link to = "/user"><h1>The User Page</h1></Link>
            </div>
            
        );
    }
}
export default Main