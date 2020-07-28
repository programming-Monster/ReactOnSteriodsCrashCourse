import React, { Component } from 'react'
import FormComponentPratice from './FormComponentPratice'

class FormPratice extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        isCool: '',
        location: '',
        gender: '',
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? this.setState({
            [name]: checked,
            dietryRestrictions: {
                [name]: checked
            }
        }) : this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <FormComponentPratice
                    {...this.state}
                    handleChange={this.handleChange} />
            </div>
        )
    }
}
export default FormPratice