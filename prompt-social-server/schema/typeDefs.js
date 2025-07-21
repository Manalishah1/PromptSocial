const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum ModelType {
    GPT4
    GPT35
    CLAUDE
    GEMINI
    MISTRAL
    LLAMA
    OTHER
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Result {
    output: String
    createdAt: String
    username: String
  }

  type Prompt {
    id: ID!
    title: String!
    body: String!
    tags: [String!]!
    model: ModelType!
    likes: Int!
    author: User!
    results: [Result!]
  }

  input ResultInput {
    output: String!
    username: String
  }

  type Query {
    prompts: [Prompt!]!
    promptById(id: ID!): Prompt
    promptsByModel(model: String!): [Prompt!]!
    promptsByTags(tags: [String!]!): [Prompt]
    filteredPrompts(search: String, model: String, tags: [String!]): [Prompt!]!
    allUsers: [User!]!
    userById(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
    addPrompt(
      title: String!
      body: String!
      tags: [String!]!
      model: ModelType!
      authorId: ID!
      results: [ResultInput!]
    ): Prompt!
    likePrompt(id: ID!): Prompt!
    addResultToPrompt(promptId: ID!, output: String!, username: String): Prompt!
    login(username: String!): User!
  }
`;

module.exports = { typeDefs };
