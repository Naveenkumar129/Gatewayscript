// Accessing INPUT and named context example.
// The rule input is context named 'INPUT'.
// The context named 'fetched_file' is the output from a fetch action..
// This demonstrates GatewayScript (ECMA) combining INPUT context with a fetched on-board file.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

// Read the rule input (INPUT) as a JSON object
session.INPUT.readAsJSON (function (error_1, json_from_INPUT) {
    if (error_1) {
      // an error occurred when parsing the content, e.g. invalid JSON object
      // uncatched error will stop the processing and the error will be logged
      throw error_1;
    }
    
    // Read fetched file from output context variable 'fetched_file' of previous action
    session.name("fetched_file").readAsJSON (function (error_2, json_from_fetched_file) {
        if (error_2) {
          // an error occurred when parsing the content, e.g. invalid JSON object
          // uncatched error will stop the processing and the error will be logged
      throw error_2;
    }
    session.output.write({
        "JSON_FROM_INPUT": json_from_INPUT,
        "JSON_FROM_FETCHED_FILE": json_from_fetched_file});

    });
});

/* Sample output =>
   where input is of form:
     curl --data-binary @array-string-INPUT.json http://192.168.1.70/combine-INPUT-FETCHED_FILE
{
    "JSON_FROM_INPUT": {
        "reverseArray": [
            1,
            2,
            3,
            4
        ],
        "popArray": [
            1,
            2,
            3,
            4
        ],
        "sortArray": [
            1,
            4,
            3,
            2
        ],
        "uppercaseString": "Put all this to UpperCase",
        "lengthString": "12345678"
    },
    "JSON_FROM_FETCHED_FILE": {
        "fetched_data": "from DataPower-based file"
    }
}
*/