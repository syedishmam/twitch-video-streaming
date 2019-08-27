import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchStreams} from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    /*Displays Edit/Delete buttons next to a stream if the currentUserId matches
    the userId that created the stream */
    renderAdmin(stream) {
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <button className="ui button negative">Delete</button>
                </div>
            )
        }
    }

    //Map array of streams and display on the screen when called inside render function
    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        });
    }

    renderCreate() {
        if(this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), /*Takes an object and returns an array of it's values*/
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);