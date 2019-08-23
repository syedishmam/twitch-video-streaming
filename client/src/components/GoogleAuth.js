import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '569810483363-ag3m1mtv4veh4nvvnvk5gvs5aeabtv7h.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
            });
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) { 
            return <div>Sign In Unverified</div>
        } else if(this.state.isSignedIn) {
            return <div>Signed In</div>
        } else {
            return <div>Not Signed In</div>
        }
    }

    render() {
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;