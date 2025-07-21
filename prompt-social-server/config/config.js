const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI must be defined in .env');
}

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = NODE_ENV === 'production';

module.exports = {
    PORT,
    MONGODB_URI,
    NODE_ENV,
    isProd,
};
