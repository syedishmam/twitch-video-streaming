import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


const PageOne = () => {
    return (
        <div>
            <Link to="/pagetwo">Navigate to Page 2</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            PageTwo 
            <button>Click Me!</button>
            <Link to="/">Navigate to Page 1</Link>
        </div>
    )
}
class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pagetwo" component={PageTwo} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App; 