// Date examples.
// This demonstrates various GatewayScript (ECMA) Date functions.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var today = new Date();
var date_examples = {};

date_examples.date = today;
date_examples.getFullYear = today.getFullYear();
date_examples.getMonth = today.getMonth();
date_examples.getUTCMonth = today.getUTCMonth();
date_examples.getDay = today.getDay();
date_examples.getUTCDay = today.getUTCDay();
date_examples.getHours = today.getHours();
date_examples.getUTCHours = today.getUTCHours();

// Date from parsed string:
var utcNumber = Date.parse("2012-08-03T23:10:58.673Z");
var todayJSON = {"utcNumber": utcNumber, "date": new Date(utcNumber)};
date_examples.todayJSON = todayJSON,

session.output.write(date_examples);

/* Sample output:
{
    "date": "2014-09-19T12:06:22.597Z",
    "getFullYear": 2014,
    "getMonth": 8,
    "getUTCMonth": 8,
    "getDay": 5,
    "getUTCDay": 5,
    "getHours": 13,
    "getUTCHours": 12,
    "todayJSON": {
        "utcNumber": 1344035458673,
        "date": "2012-08-03T23:10:58.673Z"
    }
}
*/

