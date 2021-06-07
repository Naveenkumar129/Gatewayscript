// DataPower user-defined module client example
// This demonstrates GatewayScript (ECMA) user-defined module client.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var query_parameters_module = require ('modules/query-parameters-module');

// Call function in module
var query_parameters = query_parameters_module.query_parameters();

session.output.write(query_parameters);

/* 
    Sample URI:
        /query-parameters-module-client?accountNumber=81&state=CA
    Sample output:
        {"accountNumber":"81","state":"CA"}
*/