// Required libraries.
// express, body-parser.
var express = require('express');
var app = express();
var bodyParser   = require('body-parser');
var mongoDb = require('mongodb');

// Add rigth mongoDb address.
var url = "mongodb://localhost:27017/mydb2"
var products;

mongoDb.MongoClient.connect(url, function (err,db){
     products = db.collection("products");
});

// To support JSON-encoded bodies.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// Creating method return default black page.
	// Return html.
    let html = '<body style="background:bisque"><h1>Welcome to EX #3</h1></body>';
    res.send(html);
});

app.get("/products", function (req,res) {
	// Create GET type method to return all products or just a single product filter by id.
	// Check code status 400 and 403 for errors.
	// Return products.
	
    if(req.query.id){
        var id = Number(req.query.id);
        products.findOne( { id: id }, function (err, document) {
            if(err){
                res.status(400).send(err);
            }
            else if(document === null){
                res.status(403).send("Not found");
            }
            else{
                res.send(document);
            }
        });
    } else {
        products.find().toArray(function (err, docs) {
            res.send(docs);
        });        
    }
});

app.post("/products", function (req,res) {
	// Create POST type method for insert new product.
	// Check code status 400 for errors.
	// Return product list length.
	
    products.insert(req.body, function (err, ret) {
        if(err){
            res.status(400).send(err);
        } else {
            res.send(ret);
        }
    });
});

app.listen(3000);