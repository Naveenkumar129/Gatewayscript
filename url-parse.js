// Parsing URL example using built-in 'url' module to parse URLs.
// This demonstrates use of the DataPower GatewayScript (ECMA) url parse function.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var serviceVars = require ( 'service-metadata' ); // import the service variables functions
var url = require ( 'url' ); // import the URL parsing functions

var urlStr = serviceVars.URLIn;   // get URL of input request
var urlObject = url.parse(urlStr, true, true);  // URL details in JSON

session.output.write(urlObject);

/*
Returns the following with 2nd, 3rd parameters = true, true:
{
    "protocol": "http:",
    "slashes": true,
    "auth": null,
    "host": "192.168.1.70:80",
    "port": "80",
    "hostname": "192.168.1.70",
    "hash": null,
    "search": "?param1=val1&param2=val2",
    "query": {
        "param1": "val1",
        "param2": "val2"
    },
    "pathname": "/url-parse",
    "path": "/url-parse?param1=val1&param2=val2",
    "href": "http://192.168.1.70:80/url-parse?param1=val1&param2=val2"
}
From IBM KnowledgeCenter:
url.parse(urlStr, [parseQueryString], [slashesDenoteHost])

urlStr	A URL specified as a string.

parseQueryString
- A Boolean value that indicates whether the query string is parsed by the querystring module.
- The string is parsed if true and not otherwise.
  The default is false.
  
slashesDenoteHost
- A Boolean value that indicates whether to interpret a name that follows a double-slash as a host name.
- For example, if true, the string //foo/bar is treated as
	{ host: 'foo', pathname: '/bar' }
  rather than as
  	{ pathname: '//foo/bar' }.
  The default is false.
*/
