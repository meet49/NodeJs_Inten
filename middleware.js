module.exports = reqFilter=(req,res,next)=>{
    if(!req.query.age){
      res.send("Please Provide Age...")
    }
    else if(req.query.age<18){
      res.send("You are not acess this page...")
    }
    else{
      next()
    }
  }
  