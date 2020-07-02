const request = require('request')
const cheerio = require('cheerio')
const lineReader = require('line-reader');
const readline = require('readline-sync');

var tld = readline.question("[1] .com\n[2] .xyz\n[3] .net\n[4] .org\n\n> ");

if (tld == "1") {
    console.log("Starting Script for .com TLD - Reading from names.txt")
    lineReader.eachLine('names.txt', function(line) {
        request('https://www.domcomp.com/research1?q=' + line + '&tld=com', (error, response, html) => {
            if (!error && html.includes('true,')) {
                console.log("This domain is already registered :( | " + line + ".com")
            }
            if (!error && html.includes('false,')) {
                console.log("This domain is available!!! | " + line + ".com")
            }
        });
    });
}

if (tld == "2") {
    console.log("Starting Script for .xyz TLD - Reading from names.txt")
    lineReader.eachLine('names.txt', function(line) {
        request('https://www.domcomp.com/research1?q=' + line + '&tld=xyz', (error, response, html) => {
            if (!error && html.includes('true,')) {
                console.log("This domain is already registered :( | " + line + ".xyz")
            }
            if (!error && html.includes('false,')) {
                console.log("This domain is available!!! | " + line + ".xyz")
            }
        });
    });
}

if (tld == "3") {
    console.log("Starting Script for .net TLD - Reading from names.txt")
    lineReader.eachLine('names.txt', function(line) {
        request('https://www.domcomp.com/research1?q=' + line + '&tld=net', (error, response, html) => {
            if (!error && html.includes('true,')) {
                console.log("This domain is already registered :( | " + line + ".net")
            }
            if (!error && html.includes('false,')) {
                console.log("This domain is available!!! | " + line + ".net")
            }
        });
    });
}

if (tld == "4") {
    console.log("Starting Script for .org TLD - Reading from names.txt")
    lineReader.eachLine('names.txt', function(line) {
        request('https://www.domcomp.com/research1?q=' + line + '&tld=org', (error, response, html) => {
            if (!error && html.includes('true,')) {
                console.log("This domain is already registered :( | " + line + ".org")
            }
            if (!error && html.includes('false,')) {
                console.log("This domain is available!!! | " + line + ".org")
            }
        });
    });
}
