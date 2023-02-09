// Required libraries.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var products = [
    {id:1, name:'PC - Alienware', price:400},
    {id:2, name:'Keyboard - Steelseries Apex M800', price:60.25},
    {id:3, name:'Mouse - Razer Mamba', price:40.20},
    {id:4, name:'Monitor - Dell UltraSharp 34 Curved', price:749.99},
    {id:5, name:'Laptop - Lenovo IdeaPad 700-15', price:960.99}
];

// To support JSON-encoded bodies.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
	// Creating method return default black page.
	// Return html.
	
    let html = '<div style="background: bisque"><h1>Welcome to End-to-end JavaScript applications!</h1></div>';
    response.send(html);
});

app.get('/products', function(request,response) {	
	// Create GET type method to return all products or just a single product filter by id.
	// Return products.
	
    if(request.query.id)
	{
        let result = products.filter( function(product){ return (product.id==request.query.id); } );
        response.send(result);
    } else {
        response.send(products);
    }
});

app.post('/products', function(request,response) {
	// Create POST type method for insert new product.
	// Return product list length.
    
    products.push(request.body);
    response.send({ count:products.length });
});

app.listen(3000);
