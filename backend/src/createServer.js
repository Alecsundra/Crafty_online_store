//the server of youga grapgql-express server
const { GraphQLServer } = require('graphql-yoga');
//need to import the resolvers, answer where data comes from or what the data is doing in db
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

//create the GraphQL Yoga Server
function createServer() {
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db}),
    });
}

module.exports = createServer;