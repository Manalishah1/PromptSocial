const { ApolloError } = require('apollo-server-express');
const User = require('../../models/User');
const Prompt = require('../../models/Prompt');

const mutations = {
    createUser: async (_, { username, email }) => {
        try {
            const user = new User({ username, email });
            await user.save();
            return user;
        } catch (err) {
            if (err.code === 11000) {
                throw new ApolloError('Username or email already exists', 'DUPLICATE_USER');
            }
            throw new ApolloError('Failed to create user');
        }
    },

    addPrompt: async (_, { title, body, tags, model, authorId, results = [] }) => {
        const author = await User.findById(authorId);
        if (!author) throw new Error('Invalid authorId');

        const prompt = new Prompt({
            title,
            body,
            tags,
            model,
            likes: 0,
            author: author._id,
            results: results.map(r => ({
                output: r.output,
                username: r.username,
                createdAt: new Date(),
            })),
        });

        await prompt.save();
        return await prompt.populate('author');
    },

    likePrompt: async (_, { id }) => {
        const prompt = await Prompt.findById(id);
        if (!prompt) throw new Error('Prompt not found');

        prompt.likes += 1;
        await prompt.save();
        return await prompt.populate('author');
    },

    addResultToPrompt: async (_, { promptId, output, username }) => {
        const prompt = await Prompt.findById(promptId);
        if (!prompt) throw new Error('Prompt not found');

        prompt.results.push({
            output,
            createdAt: new Date(),
            username,
        });

        await prompt.save();
        return await prompt.populate('author');
    },

    login: async (_, { username }) => {
        const user = await User.findOne({ username });
        if (!user) throw new Error('User not found');
        return user;
    },
};

module.exports = mutations;
