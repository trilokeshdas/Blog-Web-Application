import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
var email;
var username;
var password;
var titles=[];
var contents=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>
{
    res.render("index.ejs");
})

app.get("/compose",(req,res)=>
{
    res.render("compose.ejs");
})
app.get("/SignUp",(req,res)=>
{
    res.render("signUp.ejs");
})
app.post("/",(req,res)=>
{
    email=req.body["username"];
    username=req.body["email"];
    password=req.body["password"];
    res.render("index.ejs",{
     userName:req.body["username"],
     userEmail:req.body["email"],
     userPassword: req.body["password"]
    });
})
app.get("/posts",(req,res)=>
{
    res.render("posts.ejs");
})
app.post("/posts",(req,res)=>
{
    
    titles.push(req.body["Title"]);
  
    contents.push(req.body["Content"])
    console.log(req.body["Title"]);
    res.render("posts.ejs",{
        title: titles,
        content: contents
    });
})
app.get("/about",(req,res)=>
{
    res.render("about.ejs");
})
app.get("/contact",(req,res)=>
{
    res.render("contact.ejs");
})
app.listen(port,(req,res)=>
{
    console.log(`Listening to port ${port}`);
})