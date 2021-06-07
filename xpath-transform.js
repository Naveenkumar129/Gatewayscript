var transform = require('transform');
var doc = XML.parse(
    '<books xmlns="http://publisher.com/books">' +
    '  <book><title>JavaScript</title><price>22.99</price></book>' +
    '  <book><title>XSLT</title><price>35</price></book>' +
    '</books>');

var options = { 'expression': '//ns1:book[1]/ns1:title/text()',
                'xmldom': doc,
                'namespace': { 'ns1': 'http://publisher.com/books' }
              };
              
transform.xpath(options, function(err, xmlNodeList) {
  if (err) {
    session.out.write(err);
  }
  else {
//  xmlNodeList = 'JavaScript'
    session.output.write(xmlNodeList);
  }
});
