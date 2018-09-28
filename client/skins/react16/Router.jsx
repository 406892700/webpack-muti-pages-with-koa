import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Index from './pages/Index.jsx'
import ErrorBoundaries from './pages/ErrorBoundaries';
import Portals from './pages/Portals.jsx';

class App extends Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={ Index }></Route>
                <Route path="/errorBoundaries" component={ ErrorBoundaries }></Route>
                <Route path="/portals" component={ Portals }></Route>
            </Router>
        )
    }
}

export default App;