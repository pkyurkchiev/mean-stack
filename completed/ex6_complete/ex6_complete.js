// Required libraries.
// express, body-parser, mongojs
var express = require('express');
var app = express();
var bodyParser   = require('body-parser');
var mongojs = require('mongojs');

// Add rigth mongoDb address.
var url = 'mongodb://localhost:27017/mydb2';
var db = mongojs(url, ['products']);

var products;


// To support JSON-encoded bodies.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// Creating method return default black page.
	// Return html.
    let html = '<body style="background: bisque"><h1>Welcome to EX #3</h1></body>';
    res.send(html);
});

app.get('/products', function (req, res) {
	// Create GET type method to return all products or just a single product filter by id.
	// Check code status 400 and 403 for errors.
	// Return products.
	
    if(req.query.id){
		db.products.findOne({ _id: mongojs.ObjectId(req.query.id) }, function (err, product) {
			if (err) {
				res.send(err);
			}
			res.json(product);
		});
    } else {
		db.products.find(function (err, products) {
			if (err) {
				res.send(err);
			}
			res.json(products);
		});
    }
});

app.post('/products', function (req, res) {
	// Create POST type method for insert new product.
	// Check code status 400 for errors.
	// Return product list length.
	
    let product = req.body;
    if (!product.name) {
        req.status(400);
        req.json({
            "error": "Bad Data"
        });
    } else {
        db.products.save(product, function (err, product) {
            if (err) {
                res.send(err);
            }
            res.json(product);
        });
    }
});

app.listen(3000);