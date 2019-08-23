import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '569810483363-ag3m1mtv4veh4nvvnvk5gvs5aeabtv7h.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;