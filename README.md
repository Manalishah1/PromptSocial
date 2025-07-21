# PromptSocial

PromptSocial is a full-stack social platform for sharing AI prompts. It uses MongoDB, Apollo GraphQL server, and React for frontend.

---

## About This Project

This project is primarily a **learning exercise** focused on GraphQL with Apollo Server and Client. It demonstrates how to implement GraphQL queries and mutations, set up resolvers, and integrate with a MongoDB database using Mongoose. The frontend uses Apollo Client to interact seamlessly with the GraphQL backend, managing user authentication, prompt creation, and real-time data fetching without REST APIs.


## Features

- User registration 
- User login
- Create, like, and search AI prompts
- Multiple AI model support (GPT4, Claude, etc.)
- Real-time prompt results and interactions

---

## Tech Stack

- **Backend:** Node.js, Express, Apollo Server, Mongoose (MongoDB)
- **Frontend:** React, Apollo Client
- **Database:** MongoDB

---

## Setup Instructions

### Backend

1. Clone the repository and navigate to the backend folder
2. Create a `.env` file with the following content:

```
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

3. Install dependencies:
```bash
npm install
```

4. Start the backend server:

```bash
npm run dev
```

### Frontend

1. Navigate to the frontend folder
2. Create a `.env` file with the following content:

```
REACT_APP_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

3. Install dependencies:

```bash
npm install
```

4. Start the frontend dev server:

```bash
npm start
```

---

## Usage

* Open the frontend URL (default: `http://localhost:3000`)
* Register a new user or log in with an existing username
* Explore, add prompts, like prompts, and interact with AI prompt results

---

## Error Handling

* Duplicate user errors are handled on backend, showing clear messages on frontend
* GraphQL errors require backend to be running and proper connection string in `.env`
* CORS is enabled in backend for smooth frontend-backend communication

