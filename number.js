// Number examples.
// This demonstrates various GatewayScript (ECMA) Number functions and operations.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.
// Extra reference:
// Chapter 11. Numbers
// http://speakingjs.com/es5/ch11.html

var addResult = 9 + 10 -8;
var multiplyResult = 9 * 12;
var parseIntResult = parseInt('0xA');
var parseFloatResult = parseFloat('1.234');
var eResult = 3e2;

session.output.write({
        "addResult": addResult,
        "multiplyResult" : multiplyResult,
        "parseIntResult": parseIntResult,
        "parseFloatResult": parseFloatResult,
        "eResult": eResult
});

/* Sample output:
{
    "addResult": 11,
    "multiplyResult": 108,
    "parseIntResult": 10,
    "parseFloatResult": 1.234,
    "eResult": 300
}
*/