// Math examples.
// This demonstrates various GatewayScript (ECMA) Math functions.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.
// Extra reference:
// Chapter 11. Numbers
// http://speakingjs.com/es5/ch11.html

session.output.write({
        "E": Math.E,
        "PI": Math.PI,
        "random": Math.random(),
        "sqrt": Math.sqrt(100),
        "max": Math.max(1, 2, 3, 4, 5, 10, 6, 7),
         "pow": Math.pow(10, 3)
});

/* Sample output:
{
    "E": 2.718281828459045,
    "PI": 3.141592653589793,
    "random": 0.3516485255677253,
    "sqrt": 10,
    "max": 10,
    "pow": 1000
}
*/