// Calling external system example.
// This demonstrates use of the DataPower GatewayScript (ECMA) urlopen function.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

// For a simple demonstration, this example calls this same service, but with a different URI.
var target = 'http://127.0.0.1/array-string';

var urlopen = require ('urlopen');

var data_to_post = {
    "reverseArray": [
        1, 2, 3, 4
    ],
    "popArray": [
        1, 2, 3, 4
    ],
    "sortArray": [
        1, 4, 3, 2
    ],
    "uppercaseString": "Put all this to UpperCase",
    "lengthString": "12345678"
};

// The urlopen options, target is defined above:
var options = {
    target: target,
    method: 'post',
    contentType: 'application/json',
    timeout: 60,
    data: data_to_post
};

// Open connection to target and post data:
urlopen.open (options, function (error, response) {
    if (error) {
        // an error occurred during request sending or response header parsing
        session.output.write ("urlopen connect error: " + JSON.stringify(error));
    } else {
        // read response data
        // Without further processing, response will be:
        //     {"statusCode":200,"reasonPhrase":"OK","headers":{"X-Backside-Transport":"FAIL FAIL","Content-Type":"application/json","Date":"Fri, 19 Sep 2014 22:50:57 GMT"}}
        // get the response status code
        var responseStatusCode = response.statusCode;
        if (responseStatusCode == 200) {
            response.readAsJSON(function(error, responseData) {
                if (error) {
                    // error while reading response
                    session.output.write("readAsJSON error: " + JSON.stringify(error));
                } else {
                    var urlopenOutput = {"urlopenOutput" : {"statusCode": responseStatusCode,
                                                            "urlopenResponse": responseData}
                                        };
                    session.output.write(urlopenOutput);
                } 
            });
        } else {
            session.output.write ("urlopen target return statusCode " + responseStatusCode);
        }
    }
});

/* Sample output:
{
    "urlopenOutput": {
        "statusCode": 200,
        "urlopenResponse": {
            "reverseArrayResult": [
                4,
                3,
                2,
                1
            ],
            "popArrayResult": 4,
            "sortArrayResult": [
                1,
                2,
                3,
                4
            ],
            "uppercaseStringResult": "PUT ALL THIS TO UPPERCASE",
            "lengthStringResult": 8
        }
    }
}
*/
