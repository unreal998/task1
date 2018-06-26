import React from "react";
class User extends React.Component {
    render() {
        return (
            <div className="user-content">
                <img src={this.props.userphoto}></img>
                <p>User Name: {this.props.username} </p>
                <p>User Age: {this.props.userage}</p>
            </div>
        );
    }
}
export default User