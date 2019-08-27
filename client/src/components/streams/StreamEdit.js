import React from 'react';
import {connect} from 'react-redux';

class StreamEdit extends React.Component {
    render() {
        return <div>StreamEdit</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
}

export default StreamEdit;