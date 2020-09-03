// File: SubmitForm.js
// Date: 7/14/2020
// Note: Adding data to internal State object

import React from 'react';
import PropTypes from 'prop-types';

class SubmitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { 
                    objectID: 1,
                    name: 'John',
                    age: 30,
                }
            ]
        }
    }

    onSubmit = event => {
        event.preventDefault();
        
        const name = this.name.value;
        const age = this.age.value;
        const info = { name: name, age: age };
        const data = [...this.state.data, info];

        this.setState({
            data: data
        })
    };

    render() {
        return (
            <div className='container'>
                <h2>React State Management</h2>
                <hr />
                <div className='row'>
                    <form className='form' onSubmit={this.onSubmit}>
                        <input
                            className='form-contorl'
                            placeholder="Name"
                            ref={input => this.name = input}
                        />
                        <input
                            className='form-contorl'
                            placeholder="Age"
                            ref={input => this.age = input}
                        />
                        <button type='submit'>Save</button>
                    </form>            
                </div>

                <hr />
                <div className='row'>
                    {
                        this.state.data.map((info, index) => <Card key={index} info={info} />)
                    }
                </div>
            </div>
        )
    }
}

const Card = props =>
    <div className="col">
        <div className="card">
            <div className="card-body">
                <p className="card-title">
                    <span>Name: </span>
                    {props.info.name}
                </p>
                <p className="card-text">
                    <span>Age: </span>
                    {props.info.age}
                </p>
            </div>
        </div>
    </div>


SubmitForm.propTypes = {
    objectID: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number
}

export default SubmitForm;