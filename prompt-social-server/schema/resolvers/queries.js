const Prompt = require('../../models/Prompt');
const User = require('../../models/User');

const queries = {
    prompts: async () => await Prompt.find().populate('author'),

    filteredPrompts: async (_, { search, model, tags }) => {
        const query = {};
        if (search) query.title = { $regex: search, $options: 'i' };
        if (model) query.model = model;
        if (tags?.length) query.tags = { $in: tags };
        return Prompt.find(query).populate('author');
    },

    allUsers: async () => await User.find(),
};

module.exports = queries;
