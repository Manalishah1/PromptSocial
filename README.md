# PromptSocial

PromptSocial is a full-stack social platform for sharing and discovering AI prompts. Users can create, share, like, and add results to prompts for various AI models (GPT-4, Claude, etc.). Built with Node.js, Express, MongoDB, Apollo GraphQL server, and React.

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
## Flowchart

<img width="2725" height="3840" alt="image" src="https://github.com/user-attachments/assets/d124e99d-4f1c-43d4-9fb4-772596163028" />

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

  <img width="1033" height="484" alt="image" src="https://github.com/user-attachments/assets/002ead37-5417-4e9c-9691-465978bfb980" />

* Explore, add prompts, like prompts, and interact with AI prompt results

 <img width="1033" height="582" alt="image" src="https://github.com/user-attachments/assets/2e08e292-e17c-4b73-ac64-be71dd2db669" />

 <img width="503" height="582" alt="image" src="https://github.com/user-attachments/assets/f55f3c78-20d6-4fee-a820-94a5f45d7a5b" />

---

## Error Handling

* Duplicate user errors are handled on backend, showing clear messages on frontend
* GraphQL errors require backend to be running and proper connection string in `.env`
* CORS is enabled in backend for smooth frontend-backend communication

---

## Future Enhancements

* Export prompts to various formats (JSON, CSV, TXT)
* Analytics dashboard for prompt performance tracking
* Category-based subscriptions and notifications
* JWT authentication with OAuth/SAML integration

