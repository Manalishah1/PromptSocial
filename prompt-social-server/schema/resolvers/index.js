const typeResolvers = require('./typeResolvers');
const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
    ...typeResolvers,
    Query: queries,
    Mutation: mutations,
};

module.exports = { resolvers };
