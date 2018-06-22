
import React from "react";

class User extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <p>User Name: {this.props.username}</p>
                        <p>User Age: {this.props.userage}</p>
                        <img src={this.props.userphoto}></img>
                    </div>
                </div>
            </div>
        );
    }
}
export default User