import { gql } from '@apollo/client';

export const ADD_PROMPT = gql`
  mutation AddPrompt(
    $title: String!
    $body: String!
    $tags: [String!]!
    $model: ModelType!
    $authorId: ID!
    $results: [ResultInput!]
  ) {
    addPrompt(
      title: $title
      body: $body
      tags: $tags
      model: $model
      authorId: $authorId
      results: $results
    ) {
      id
      title
      body
      likes
      model
      results {
        output
        createdAt
        username
      }
      author {
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!) {
    createUser(username: $username, email: $email) {
      id
      username
      email
    }
  }
`;

export const ADD_RESULT_TO_PROMPT = gql`
  mutation AddResultToPrompt($promptId: ID!, $output: String!, $username: String!) {
    addResultToPrompt(promptId: $promptId, output: $output, username: $username) {
      id
      results {
        output
        createdAt
        username
      }
    }
  }
`;

export const GET_PROMPTS = gql`
  query GetAllPrompts {
    prompts {
      id
      title
      body
      tags
      model
      likes
      author {
        id
        username
      }
      results {
        output
        createdAt
        username
      }
    }
  }
`;

export const LIKE_PROMPT = gql`
  mutation LikePrompt($id: ID!) {
    likePrompt(id: $id) {
      id
      likes
    }
  }
`;

export const GET_PROMPTS_BY_FILTERS = gql`
  query GetPromptsByFilters($search: String, $model: String, $tags: [String!]) {
    filteredPrompts(search: $search, model: $model, tags: $tags) {
      id
      title
      body
      tags
      model
      likes
      author {
        username
      }
      results {
        output
        createdAt
        username
      }
    }
  }
`;

