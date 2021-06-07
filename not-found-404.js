// Setting HTTP response code example.
// This demonstrates use of the DataPower GatewayScript (ECMA) setting HTTP response code.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var hm = require('header-metadata');
var sm = require('service-metadata');
hm.response.statusCode = "404 Not Found";
hm.response.set ('Content-Type', 'text/html');
console.error('Triggered in not-found-404.js, 404 Not Found');
sm.mpgw.skipBackside = true;
session.output.write('<html><head><title>Resource not found</body></html>');

/*
<html><head><title>Resource not found</body></html>Steves-MacBook-Air:~ steve$ curl http://192.168.1.70/not-found-404 -v
* About to connect() to 192.168.1.70 port 80 (#0)
*   Trying 192.168.1.70... connected
* Connected to 192.168.1.70 (192.168.1.70) port 80 (#0)
> GET /not-found-404 HTTP/1.1
> User-Agent: curl/7.21.4 (x86_64-apple-darwin12.2.0) libcurl/7.21.4 OpenSSL/0.9.8z zlib/1.2.5 libidn/1.20
> Host: 192.168.1.70
> Accept: *
> 
< HTTP/1.1 404 Not Found
< X-Backside-Transport: FAIL FAIL
< Connection: Keep-Alive
< Transfer-Encoding: chunked
< Content-Type: text/html
< 
* Connection #0 to host 192.168.1.70 left intact
* Closing connection #0

*/
