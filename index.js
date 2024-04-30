// const http = require('http')
// const data = require('./data')
// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-Type':'application\json'})
//   res.write(JSON.stringify(data))
//   res.end()
// }).listen(4500)

const { required } = require("nodemon/lib/config")








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








// mongo db database conection

const dbConnect = require('./mongodb')

const main = async ()=>{
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}

main()