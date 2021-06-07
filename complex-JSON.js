// This demonstrates GatewayScript (ECMA) nested JSON creation.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var outerJSON = {"outside": "On the outside"};
var middleJSON = {"middle": "In the middle"};
var innerJSON = {"inside" : "On the inside"};
outerJSON.middleJSON = middleJSON;
middleJSON.innerJSON = innerJSON;

session.output.write(outerJSON);

/* Sample output:
{
    "outside": "On the outside",
    "middleJSON": {
        "middle": "In the middle",
        "innerJSON": {
            "inside": "On the inside"
        }
    }
}
*/
