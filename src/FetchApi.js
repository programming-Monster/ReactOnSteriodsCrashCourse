import React, { Component } from "react";

class FetchApi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading : false,
            character : {}
         };
    }

    componentDidMount() {
        this.setState({loading : true})
        fetch('https://swapi.dev/api/people/2')
        .then(response => response.json())
        .then(data => {
            this.setState({
                character : data,
                loading: false
            })
        })
    }
    render() {
        const text = this.state.loading ? 'Loading ...' : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        );
    }
}

export default FetchApi;