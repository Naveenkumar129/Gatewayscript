var hm = require('header-metadata');
var nxPrefix = 'man';
var nameSpaceSuffix = 'JSONTOSOAP'
var statuscode = hm.response.statusCode;
var statusdesc;

const nsPrefix = nxPrefix;
const nameSpace = "http://xgw.org.co.il/" + nameSpaceSuffix + "/";

if (statuscode == '200') {
    statuscode = '0';
    statusdesc = 'Success';

    session.input.readAsJSON(function (error, json) {
        if (error) {
            console.error('@@@AB Input is not valid JSON. ', error);
            session.output.write(error);
        } else {
            var prop = json.name;
            var output = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:' + nxPrefix + '="http://www.w3.org/2001/XMLSchema">' +
                '<soapenv:Header />' +
                '<soapenv:Body>' +
                '<' + nsPrefix + ':' + 'Document_OUT xmlns:ns0="urn:Document_OUT" xmlns:ns1="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsi="http://www.w3.org/2001/XMLSchema">' +
                '<' + nsPrefix + ':name>' + prop + '</' + nsPrefix + ':name>' +
                '</' + nsPrefix + ':' + 'Document_OUT>' +
                '</soapenv:Body>' +
                '</soapenv:Envelope>';

            hm.current.set('Content-Type', 'text/xml');
            session.output.write(output);
        }
    })
} else {
    statuscode = '1';

    session.input.readAsJSON(function (error, json) {
        if (error) {
            console.error('Input is not valid JSON. ', error);
        } else {
            AnnotationID = 1;
            statusdesc = json["Message"];
            var output = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" >' +
                '<soapenv:Header />' +
                '<soapenv:Body>' +
                '<' + nsPrefix + ':' + 'Document_OUT xmlns:ns0="urn:mg_iBOLT_FileNet_Methods_CreateAnnotation_Document_OUT" xmlns:ns1="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsi="http://www.w3.org/2001/XMLSchema">' +
                '<' + nsPrefix + ':StatusCode>' + statuscode + '</' + nsPrefix + ':StatusCode>' + '<' + nsPrefix + ':StatusDesc>' + statusdesc + '</' + nsPrefix + ':StatusDesc>' +
                '<' + nsPrefix + ':AnnotationID>' + AnnotationID + '</' + nsPrefix + ':AnnotationID>' +
                '</' + nsPrefix + ':' + 'Document_OUT>' +
                '</soapenv:Body>' +
                //'</soapenv:Body>' +// Added
                '</soapenv:Envelope>';

            hm.current.set('Content-Type', 'text/xml');
            session.output.write(output);
        }
    })
}