const typeResolvers = {
    User: {
        id: (user) => user._id.toString(),
    },
    Prompt: {
        id: (prompt) => prompt._id.toString(),
    },
    Result: {
        createdAt: (result) => {
            const date = result.createdAt instanceof Date ? result.createdAt : new Date(result.createdAt);
            return !isNaN(date) ? date.toISOString() : null;
        },
    },
};

module.exports = typeResolvers;
