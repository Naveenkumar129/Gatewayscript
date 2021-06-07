// Getting local file / use of stylesheet parameter example.
// This demonstrates use of the DataPower GatewayScript (ECMA) urlopen function.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var urlopen = require ('urlopen');

// The stylesheet parameter "filename" is defined in the advanced tab of the script action
var filename = session.parameters.filename;
console.alert("Filename: " + filename);

urlopen.open(filename, function (error, response) {
     if (error) {
           session.output.write("openCallback error: " + error.errorMessage+"\n");
     } else {
        if (response.statusCode != 200) {
            // in this case, a non-200 statusCode indicates a problem reading the file
            session.output.write("Unable to open the file, statusCode: " + 
                                  response.statusCode + ", reasonPhrase: " + 
                                  response.reasonPhrase);
        } else {
             response.readAsJSON(function(readError, someJSON) {
                if (readError) {
                    session.output.write("read file error: " + readError.toString());
                } else {
                    session.output.write({"filename": filename, "file-content": someJSON} );
                }
             });
        }
     }
});

/* Sample output:
{
    "filename": "local:///GatewayScript-Explore-DATA/someJSON.json",
    "file-content": {"someJSON": "from DataPower-based file"}
}
*/
