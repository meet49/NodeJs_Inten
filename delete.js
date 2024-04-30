const dbConnect = require('./mongodb')


const delet = async () => {
    const db = await dbConnect()
    const result = await db.deleteMany({name:'iphone 14 pro'})
    if (result.acknowledged) {
        console.log(result)
    }
}

delet()
