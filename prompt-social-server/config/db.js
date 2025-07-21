const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config');

async function connectDB() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

function closeDB() {
    return mongoose.connection.close(() => {
        console.log('MongoDB connection closed');
    });
}

module.exports = { connectDB, closeDB };
