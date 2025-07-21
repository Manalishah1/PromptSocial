const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('../schema/typeDefs');
const { resolvers } = require('../schema/resolvers/index');
const { isProd } = require('./config');

function createApolloServer() {
    return new ApolloServer({
        typeDefs,
        resolvers,
        introspection: !isProd,
        playground: !isProd,
    });
}

module.exports = createApolloServer;
