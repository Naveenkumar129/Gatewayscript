// String examples.
// This demonstrates various GatewayScript (ECMA) String functions.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var largeString = 'Have a nice day today';

var string_examples = {};

string_examples.largeString = largeString;
string_examples.largeString_charAt_1 = largeString.charAt(1);
string_examples.largeString_charCodeAt_1 = largeString.charCodeAt(1);
string_examples.String_fromCharCode = String.fromCharCode(97, 98, 99, 100);
string_examples.largeString_indexOf_day = largeString.indexOf("day");
string_examples.largeString_lastIndexOf_day_ = largeString.lastIndexOf("day");
string_examples.largeString_split_space = largeString.split(" ");
string_examples.largeString_toUpperCase = largeString.toUpperCase();
string_examples.largeString_toLowerCase = largeString.toLowerCase();
string_examples.largeString_replace_day_night = largeString.replace("day", "night");
string_examples.largeString_substring_1_3 = largeString.substring(1, 3);
// Note that the following is a property, not a function
string_examples.largeString_length_ = largeString.length;

session.output.write(string_examples);

/* Sample output:
{
    "largeString": "Have a nice day today",
    "largeString_charAt_1": "a",
    "largeString_charCodeAt_1": 97,
    "String_fromCharCode": "abcd",
    "largeString_indexOf_day": 12,
    "largeString_lastIndexOf_day_": 18,
    "largeString_split_space": [
        "Have",
        "a",
        "nice",
        "day",
        "today"
    ],
    "largeString_toUpperCase": "HAVE A NICE DAY TODAY",
    "largeString_toLowerCase": "have a nice day today",
    "largeString_replace_day_night": "Have a nice night today",
    "largeString_substring_1_3": "av",
    "largeString_length_": 21
}
*/