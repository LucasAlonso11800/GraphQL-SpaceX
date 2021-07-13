import React from 'react';
// components
import Launches from './components/Launches';
// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="container">
                <h1>SpaceX</h1>
                <Launches />
            </div>
        </ApolloProvider>
    );
}

export default App;
