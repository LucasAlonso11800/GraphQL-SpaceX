import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import Launches from './components/Launches';
import Launch from './components/Launch';
import Logo from './Logo.png'
// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
            <div className="container">
                <img src={Logo} alt="SpaceX-logo"/>
                <Route exact path="/" component={Launches} />
                <Route exact path="/launch/:flight_number" component={Launch} />
            </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
