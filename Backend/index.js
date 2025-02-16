const express = require("express");
const cors = require("cors");
require("./connection")
const app = express();
const BlogModel = require('./models/model')
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here -- done

//Write your POST API here -- done
app.post("/add", async (req,res) => {
  try{
    const blog = new BlogModel(req.body);
    await blog.save();
    res.send({message: "Data Added!"});
  }
  catch(error){
    console.log(error);
  }
});


app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
