const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const cors = require('cors');

const schema = require('./schema/schema')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => console.log('Listening on 5000'));