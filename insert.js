const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect()
    const result = await db.insertMany(
        [
            { name: 'iphone 14', price: '200000', color: 'white', company: 'apple' },
            { name: 'iphone 14', price: '200000', color: 'white', company: 'apple' },
            { name: 'iphone 14', price: '200000', color: 'white', company: 'apple' }
        ]
    )
    if (result.acknowledged) {
        console.log(result)
    }
}
insert();