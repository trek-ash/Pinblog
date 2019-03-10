const app = require('express')();
const Blog = require('./models/blog');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Yash:W5y15xshFT9f1Dbb@cluster0-uzvnf.mongodb.net/Pinblog?retryWrites=true',{ useNewUrlParser: true})
  .then(()=>{
    console.log("Database Connected");
  })
  .catch(()=>{
    console.log("Connection failed");
  })
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
})
app.get('',(req,res,next)=>{
  Blog.find().then(blogs=>{
    res.status(201).json({
      message: "Blogs Fetched",
      Blogs: blogs
    })
  })
})
app.get('/api/addblogdetails',(req,res,next)=>{

  res.status(201).json({
    'Message': 'Reached details',

  })
})
app.post('/api/addblogdetails',(req,res,next)=>{
  console.log(req.body.id);
  const blog = {
    _id: req.body.id,
    title: req.body.title,
    brief: req.body.brief,
    content: req.body.content
  }
  Blog.updateOne({_id: req.body.id},blog).then(resdata=>{
    res.status(201).json({
      'Message': 'Blog added Successfully'
    });
  });

})
app.post('/api/addbloginfo',(req,res,next)=> {
  const blog = new Blog({
    title: req.body.title,
    brief: req.body.brief
  })

  blog.save().then( resdata => {
    res.status(201).json(resdata);
  })


});

module.exports=app;
