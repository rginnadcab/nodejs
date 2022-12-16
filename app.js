const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended : true }));

const errorMiddleware = require("./middleware/error");

app.get("/",(req,res) =>{
    res.send("test_1 is running");
})

// Routes import
const user = require("./routes/userRoute");

app.use("/api/user/",user);


app.use(errorMiddleware);


module.exports = app;