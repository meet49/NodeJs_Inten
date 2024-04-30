const dbConnect = require('./mongodb')


const update = async () => {
    const db = await dbConnect()
    const result = await db.updateOne(
        {name:'iphone 14'},{
            $set:{name:'iphone 14 pro'}
        }
    )
    if (result.acknowledged) {
        console.log(result)
    }
}

 update()
