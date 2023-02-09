// import logic for loger
// need to comchare 3 stages info, warning, error
var log = {
            information: function (text) { 
                console.log('Information: ' + text);
            },
            warning:function (text) { 
                console.log('Warning: ' + text);
            },
            error:function (text) { 
                console.log('Error: ' + text);
            }
    };

module.exports = log;