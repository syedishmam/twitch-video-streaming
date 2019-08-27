import React from 'react';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

import {createStream} from '../../actions'

class StreamCreate extends React.Component {
    //When submit button is clicked, function runs and calls action creator which 
    //posts formValues to db.json in localhost:3001
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {createStream})(StreamCreate);