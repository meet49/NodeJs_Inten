

const { MongoClient } = require('mongodb')
const url = 'mongodb+srv://msopash:Meetopash@cluster0.go2b5dc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const databaseName = 'productDB'
const client = new MongoClient(url)

async function dbConnect() {
    let result = await client.connect()
    db = result.db(databaseName)
    return db.collection('products')
}

module.exports =  dbConnect;
