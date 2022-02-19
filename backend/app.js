const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const DataModel = require("./models/post");
const Product = require("./models/display");
const Users = require("./models/users");
const Orders = require("./models/order");
const Sample = require("./models/sample");
const app = express();

mongoose
    .connect(
       " mongodb+srv://faisal:faisal@cluster0.y3cxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS,PUT"
    );
    next();
});

app.post("/api/posts/kansaz", (req, res, next) => {
    const posts = new DataModel({
        Name: req.body.Name,
        Date: req.body.Date,
        Delivered: req.body.Delivered,
        EmptyRecived: req.body.EmptyRecived,
        Balanced: req.body.Balanced,
        CashRecived: req.body.CashRecived,
        CashBalanced: req.body.CashBalanced,
    });
    posts.save().then(createdPost => {
        
        res.status(201).json({
            message: "Post added successfully",
            id: createdPost._id
        });
    })
});




app.get("/api/posts/kansaz", (req, res, next) => {
    DataModel.find().then(documents => {
        console.log(documents)
        res.status(200).json({
            message: "Posts fetched successfully!",
            documents: documents
            
            
        });
        
        
    });
});


app.get("/api/posts/kansaz/:id", (req, res, next) => {
    DataModel.findById(req.params.id).then(data => {
        if (data) {
            res.status(200).json(data)
        }
        else {
            res.status(404).json({ mesage: "Post not Found" })
        }
    })
})


app.put("/api/posts/kansaz/:id", (req, res, next) => {
    const posts = new DataModel({
    _id: req.body._id,
        Name: req.body.Name,
        Date: req.body.Date,
        Delivered: req.body.Delivered,
        EmptyRecived: req.body.EmptyRecived,
        Balanced: req.body.Balanced,
        CashRecived: req.body.CashRecived,
        CashBalanced: req.body.CashBalanced,
    });
    DataModel.updateOne({ _id: req.params.id }, posts).then(result => {
        res.status(200).json({ message: "Update successful!" });
    });
});
app.delete("/api/posts/kansaz/:id", (req, res, next) => {
    DataModel.deleteOne({ _id: req.params.id }).then(result => {
        res.status(200).json({ message: "Post deleted!" });
    });
});

module.exports = app;
