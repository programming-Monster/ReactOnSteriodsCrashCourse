import React, { Component } from 'react';

class Conditional extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn : true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return  {
                loggedIn : !prevState.loggedIn
            }
        })
    }
    
    render() {
        const bt = this.state.loggedIn ? 'Log out' : 'Log In'
        const dt = this.state.loggedIn ? 'currently signed In' : 'logged Out'
        return (
            <div>
                <button onClick={this.handleClick}>{bt}</button>
                <h1>{dt}</h1>
            </div>
        );
    }
}

export default Conditional;
