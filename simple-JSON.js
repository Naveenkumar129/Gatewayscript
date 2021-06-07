// This demonstrates GatewayScript (ECMA) simple JSON creation.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var someJSON = {"hello": "This is", "there": "JSON"};

// Alternative
// var someJSON = new Object();
// someJSON.hello = "This is";
// someJSON.there = "JSON";

session.output.write(someJSON);

/* Sample output:
{
    "hello": "This is",
    "there": "JSON"
}
*/
