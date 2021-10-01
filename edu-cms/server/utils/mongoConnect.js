const mongoose = require('mongoose');
require('dotenv/config');

const connect = async (database) => {

    let db;
    switch(database) {
        case "testDatabase":
            db = process.env.TEST_DATABASE;
            break;
    }

    try {
        await mongoose.connect(db);
    } catch (err) {
        res.status(500).send({
            status_code: 500,
            message: "An error has happend while attmping to connect to mongodb..."
        })
    } finally {
        console.log("Connected to the test_database...")
    }
}

const disconnect = async () => {
    try {
        await mongoose.disconnect()
    } catch (err) {
        res.status(500).send({
            status_code: 500,
            message: "An error has happned while trying to disconnect from mongodb..."
        })
    } finally {
        console.log("Disconnected from the test_database...")
    }
}

module.exports.connect = connect;
module.exports.disconnect = disconnect;