(:
 XML input converted to JSON output extracting XML components using JSONiq.
 This demonstrates JSONiq XML to JSON.
 Author: Steve Edwards, Escala Ltd.
 Date  : 2015-11-17.
 Note  : this code is for demonstration purposes only, not production - level.
 Read the input as XML document :)


declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare option jsoniq-version "0.4.42";
declare option output:method "json";
let $in_xml :=  .
return 
{"firstTitle" : string($in_xml/*[local-name() = 'books']/*[local-name() = 'book'][1]/*[local-name() = 'title']/text()) }

(:
Input of form:/
<books xmlns="http://publisher.com/books">
    <book><title>JavaScript</title><price>22.99</price></book>
    <book><title>XSLT</title><price>35</price></book>
</books>

curl -d '<books xmlns="http://publisher.com/books"><book><title>JavaScript</title><price>22.99</price></book><book><title>XSLT</title><price>35</price></book></books>' http://192.168.1.72:8082/xml-to-json
Output: {"firstTitle":"JavaScript"}
:)
