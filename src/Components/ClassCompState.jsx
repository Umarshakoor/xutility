import React, { Component } from "react";
// export class ClassComp // name export
export class ClassCompState extends Component {
    constructor() {
        super();
        this.state = {
            name: 'classState'
        }
    }
    updateName() {
        this.setState({ name: "XPro" })
    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <h2>{this.props.name}</h2>
                <button onClick={() => this.updateName()}>Click me</button>
            </div>
        )
    }
}
