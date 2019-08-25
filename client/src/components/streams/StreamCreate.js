import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {createStream} from '../../actions'

class StreamCreate extends React.Component {
    //If input has been clicked on and then off, and validate() gives error
    //display the error message
    renderError ({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className= `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    //When submit button is clicked, function runs and calls action creator which 
    //posts formValues to db.json in localhost:3001
    onSubmit(formValues) {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

//If form is empty return errors in object, otherwise return empty object
const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if(!formValues.description) {
        errors.description = 'You must enter a description!';
    }

    return errors;
}

//reduxForm wrapped into a variable that is then sent to connect()
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate); 

export default connect(null, {streamCreate})(formWrapped);