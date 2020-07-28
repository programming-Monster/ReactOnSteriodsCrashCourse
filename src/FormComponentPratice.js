import React from 'react';

function formComponentPratice (props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    type='text'
                    placeholder='firstName'
                    name='firstName'
                    onChange={props.handleChange}
                    value={props.firstName} /> <br />

                <input
                    type='text'
                    placeholder='lastName'
                    name='lastName'
                    onChange={props.handleChange}
                    value={props.lastName} /> <br />

                <input
                    placeholder='age'
                    type='number'
                    onChange={props.handleChange}
                    name='age'
                    value={props.age}
                /> <br />

                <input type='checkbox'
                /> <br />

                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='female'
                        checked={props.gender === 'female'}
                        onChange={props.handleChange} />
                        Female
                </label> <br />

                <label>
                    <input
                        type='radio'
                        name='gender'
                        value='male'
                        checked={props.gender === 'male'}
                        onChange={props.handleChange} />
                        Male
                </label> <br />

                <label>
                    <select
                        onChange={props.handleChange}
                        value={props.location}
                        name='location'>
                        <option value=''>select</option>
                        <option value='usa'>USA</option>
                        <option value='nigeria'>NIGERIA</option>
                        <option value='turkey'>TURKEY</option>
                    </select>
                </label>

                <label>
                    Vegan
                    <input
                        type='checkbox'
                        onChange={props.handleChange}
                        name='isVegan'
                        value={props.isVegan} />
                </label>

                <label>
                    kosher
                    <input
                        type='checkbox'
                        onChange={props.handleChange}
                        name='isKosher'
                        value={props.isKosher} />
                </label>

                <label>
                    isLactoseFree
                    <input
                        type='checkbox'
                        onChange={props.handleChange}
                        name='isLactoseFree'
                        value={props.isLactoseFree} />
                </label>
                <button>Submit</button>

                <hr />

                <p
                    style={{ display: props.firstName ? 'flex' : 'none' }}>
                    Your name is {props.firstName}</p>
                <p
                    style={{ display: props.lastName ? 'flex' : 'none' }}>
                    Your lastName is {props.lastName}</p>
                <p
                    style={{ display: props.age ? 'flex' : 'none' }}>
                    You are {props.age} years old</p>
                <p
                    style={{ display: props.location ? 'flex' : 'none' }}>
                    you are currently in {props.location}</p>
                <p
                    style={{ display: props.gender ? 'flex' : 'none' }}>
                    You are a {props.gender}</p>

                <p>
                    vegan {props.isKosher ? 'yes' : 'no'} <br />
                    kosher {props.isVegan ? 'yes' : 'no'} <br />
                    lactose free {props.isLactoseFree ? 'yes': 'no'} <br />

                </p>
            </form>

        </div>
    )
}
export default formComponentPratice