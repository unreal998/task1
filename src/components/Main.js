import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div >
                    <div>
                        <button onClick={() => this.props.changeUsername("Ann")}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main