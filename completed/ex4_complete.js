// Required libraries.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var products = [
    {id:1, name:"PC - Alienware", price:400},
    {id:2, name:"Keyboard - Steelseries Apex M800", price:60.25},
    {id:3, name:"Mouse - Razer Mamba", price:40.20},
    {id:4, name:"Monitor - Dell UltraSharp 34 Curved", price:749.99},
    {id:5, name:"Laptop - Lenovo IdeaPad 700-15", price:960.99}
];

// To support JSON-encoded bodies.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// Creating method return default black page.
	// Return html.
	
    var html = '<body style="background:bisque"><h1>Welcome to EX #1</h1></body>';
    res.send(html);
});

app.get("/products", function(req,res) {	
	// Create GET type method to return all products or just a single product filter by id.
	// Return products.
	
    if(req.query.id)
	{
        var response = products.filter( function(product){return (product.id==req.query.id);} );
        res.send(response);
    } else {
        res.send(products);
    }

});

app.post("/products", function(req,res) {
	// Create POST type method for insert new product.
	// Return product list length.
    products.push(req.body);
    res.send({count:products.length});
});

app.listen(3000);
