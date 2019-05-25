var colors = require('colors');
var fs = require('fs');
var StatMode = require('stat-mode');


fs.readdir('.', 'utf-8', function(err, data) {
    console.log('Zawartosc katalogu'.blue.bgWhite);
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.green);
            console.log(data);
        });
    });
    
});




