const MongoClient = require('mongodb').MongoClient

const uri = 'mongodb+srv://omarAsfor:1234@cluster0.qvqpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const config = require('../config')

module.exports = {
    getCollection
}

// Database Name
const dbName = 'earthBnB_db'

var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        return collection
    } catch (err) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    try {
        // const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(dbName)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}




