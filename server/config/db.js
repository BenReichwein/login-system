const mongoose = require('mongoose');
const { database } = require('../../keys');

const db = async () => {
    try {
        await mongoose.connect(
            database,
            { useNewUrlParser: true },
            { useUnifiedTopology: true },
            () => console.log('[CONNECTED] - Database'))
        } catch (err) {
            console.log(`Error: ${err}`)
            throw err;
        }
    }

module.exports = db;