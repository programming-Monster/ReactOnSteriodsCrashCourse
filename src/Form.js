import React, { Component } from 'react'

class Form extends Component {
    state = {  
        firstName : '',
        lastName : '',
        isFriendly : true,
        gender : '',
        favColor : ''
    };

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({ isFriendly : checked}) : this.setState({
        [name] :value
        })
    }
    render() {
        return (
            <div>
            <input 
                type='text'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}/> <br />

            <input 
                type='text'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}/> <br />

            {/*textarea*/}
            <textarea 
                value={"text here ..."}
                onChange={this.handleChange}/> <br />

            {/*radio*/}
            <label>
            Male
            <input 
                type='radio'
                name='gender'
                value='male'
                onChange={this.handleChange}/> <br />
            </label>

            <label>
            Female
            <input 
                type='radio'
                name='gender'
                value='female'
                onChange={this.handleChange}/> <br />
            </label>

            {/*Checkbox*/}
            <label>
            <input 
                type='checkbox'
                name='isFriendly'
                checked={this.state.isFriendly}
                onChange={this.handleChange}/>
                is Friendly ?
            </label>

            {/*selectbox*/}
            <label>
            Choose Color
            <select
                value={this.state.favColor}
                onChange={this.handleChange}
                name='favColor'>
                <option value='red'>red</option>
                <option value='green'>green</option>
                <option value='blue'>blue</option>
                <option value='yellow'>yellow</option>
            </select>
            </label>
            <h1>{this.state.firstName} {this.state.lastName}</h1>

            <h1>You are {this.state.favColor}</h1>
            </div>
        );
    }
}

export default Form;