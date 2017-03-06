'use strict'
const VAT = 0.2;
var products = [
    {id:1, name:"PC - Alienware", price:400},
    {id:2, name:"Keyboard - Steelseries Apex M800", price:60.25},
    {id:3, name:"Mouse - Razer Mamba", price:40.20},
    {id:4, name:"Monitor - Dell UltraSharp 34 Curved", price:749.99},
    {id:5, name:"Laptop - Lenovo IdeaPad 700-15", price:960.99}
]

var accountBalance = 1000.00;

function withdraw(amount, callback){
    // If [amount] is more than [accountBalance] use the 
    //   callback function to pass the error message. Eg callback("Insufficient funds.");
    
    // Otherwise withdraw [amount] from [accountBalance] and call the 
    //    callback function with no parameters
}
function calculateVAT(amount){
    // Use the [VAT] constat to calculate the tax from [amount] and return tax.
}
function buy(product, callback){
    // Call the withdraw function passing in the price of [product]
    //   along with an anonymous function Eg function(err){...}

    // Inside the anonymous function check if err is "true". If err is "true" (error exists)
    //   pass the error back to the caller using the callback function. Eg callback(err)
    
    // If the err is "false" (no error), continue by calling the calculateVAT function to
    //   receive the tax. 
    // Build up the respose messages using console.log()
    // Expected output:
    // You bought a Keyboard - Steelseries Apex M800 for $60.25
    // VAT: $12.05
    // Don't forget to call the callback function!
}
buy(products[2], function(err){
    if(err){
        console.log(err);
    }
    else 
	{
        console.log("Your balance is $" + accountBalance.toFixed(2));
    }
});
