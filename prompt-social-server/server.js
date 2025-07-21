const express = require('express');
const cors = require('cors');
const createApolloServer = require('./config/apolloServer');
const { connectDB, closeDB } = require('./config/db');
const { PORT } = require('./config/config');

async function startServer() {
    const app = express();

    app.use(cors());
    app.use(express.json());

    const server = createApolloServer();
    await server.start();
    server.applyMiddleware({ app });

    await connectDB();

    const httpServer = app.listen(PORT, () => {
        console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });

    const shutdown = async () => {
        console.log('Shutting down server...');
        httpServer.close(async () => {
            await closeDB();
            console.log('Server closed');
            process.exit(0);
        });
    };

    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
}

startServer();
