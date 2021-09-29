const { MongoClient } = require('mongodb');
require('dotenv/config');

const client = new MongoClient(process.env.MONGO_CONNECT);

const connect = async () => {
    try {
        await client.connect();
    } catch (err) {
        console.error(err);
    } finally {
        console.log("mongodb connected...")
    }
}

module.exports.connect = connect;
module.exports.client = client;