// const http = require('http')
// const data = require('./data')
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application\json'})
//   res.write(JSON.stringify(data))
//   res.end()
// }).listen(4500)


// // CRUD Operation Without using database


// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'crud')
// const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath, 'this is a simple file') // create file

// fs.readFile(filePath, 'utf8', (err, item) => {
//   console.log(item)
// }) // read file

// fs.appendFile(filePath, 'for fruits', (err) => {
//   if (!err) console.log("file is update")
// }) // update file

// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//   if (!err) {
//     console.log("file name is update")
//   }
// }) //rename file name

// fs.unlinkSync(`${dirPath}/fruits.txt`) // delete the file 






// const express = require('express')
// const path = require('path')
// const app = express()

// // how to get the code

// // app.get('',(req,res)=>{
// //   res.send('welcome this is home page')
// // })

// // app.get('/about',(req,res)=>{
// //   res.send("this this about page")
// // })
// // app.get('/help',(req,res)=>{
// //   res.send("this is help page")
// // })

// // how to show the componet or file in the website

// const publicPath = path.join(__dirname,'public')

// // app.use(express.static(publicPath)) // using this url in file name  is show with extenstion
// app.set("view engine",'ejs')


// app.get('/about',(req,res)=>{
//   res.sendFile(`${publicPath}/about.html`)
// })
// app.get('',(req,res)=>{
//   res.sendFile(`${publicPath}/index.html`)
// })
// app.get('/profile',(req,res)=>{

//   const user={
//     name:'Meet Sojitra',
//     email:'meetsojitra49@gmail.com',
//     mobile:'9726771777',
//     city:'surat'
//   }

//   res.render('profile',{user})
// })
// app.listen(5000)










// const express = require('express')
// const reqFilter = require('./middleware')
// const app = express()
// const route = express.Router()


// route.use(reqFilter)
// // const reqFilter=(req,res,next)=>{
// //   if(!req.query.age){
// //     res.send("Please Provide Age...")
// //   }
// //   else if(req.query.age<18){
// //     res.send("You are not acess this page...")
// //   }
// //   else{
// //     next()
// //   }
// // }

// // app.use(reqFilter)


// app.get('/',(req,res)=>{
//   res.send('Home Page')
// })

// route.get('/users',(req,res)=>{
//   res.send('User Page')
// })

// app.use('/',route)

// app.listen(5000)








// // mongo db database conection

// const dbConnect = require('./mongodb')

// const main = async ()=>{
//     let data = await dbConnect()
//     data = await data.find().toArray()
//     console.log(data)
// }

// main()




//mongoose database


// const express = require("express")
// require('./config')
// const Product = require('./model/product')
// const app = express()

// app.use(express.json())

// app.post('/create', async (req, res) => {
//     const data = new Product(req.body)
//     const result = await data.save()
//     console.log(req.body)
//     res.send(result)
// })

// app.get('/list', async (req, res) => {
//     const data = await Product.find()
//     console.log(data)
//     res.send(data)
// })

// app.delete('/delete/:_id', async (req, res) => {
//     const data = await Product.deleteOne(req.params)
//     console.log(data)
//     res.send(data)
// })


// app.put('/update/:_id', async (req, res) => {
//     const data = await Product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }
//     )
//     console.log(data)
//     res.send(data)
// })



// app.get('/search/:key', async (req, res) => {
//     console.log(req.params.key)
//     const data = await Product.find({
//         "$or":[
//             {"name":{$regex:req.params.key}}
//         ]
//     })
//     console.log(data)
//     res.send(data)
// })

// app.listen(5000)








// // file upload using multter pakage
// const express = require("express");
// const multer = require("multer");
// const app = express()

// // app.use(express.json())  

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, 'uploads')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("file_name")

// app.post('/upload', upload, (req, res) => {
//     res.send("upload")
// })

// app.listen(5000)







// //os module

// const os = require('os')
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())




//events

// const express = require("express");
// const EventEmitter = require("events")
// const app =express()
// const event = new EventEmitter()

// let count = 0

// event.on("countAPI",()=>{
//     count++
//     console.log("object",count)
// })

// app.get('/',(req,res)=>{
//     res.send("api call")
//     event.emit("countAPI")
// })
// app.get('/serch',(req,res)=>{
//     res.send("api call")
//     event.emit("countAPI")

// })
// app.get('/upload',(req,res)=>{
//     res.send("api call")
//     event.emit("countAPI")

// })

// app.listen(5000)
