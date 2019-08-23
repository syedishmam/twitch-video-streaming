import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {
    //When component mounts load OAuth library
    //Then get instance of auth
    //Then check if user is initially signed in or out and update state
    //Then continue to listen for any changes of sign in status. Run onAuthChange() when it does
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '569810483363-ag3m1mtv4veh4nvvnvk5gvs5aeabtv7h.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //Update state when sign in status changes
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    
    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if(this.props.signInStatus === null) { 
            return null
        } else if(this.props.signInStatus) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return {signInStatus: state.auth.isSignedIn} 
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);