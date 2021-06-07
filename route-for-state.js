// Dynamic routing example - accessing route information from JSON.
// This demonstrates setting the routing uri for outgoing calls.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

// The following more likely to be obtained from incoming URI / context:
var customer_state = "CA";

// The following more likely to have been accessed from a file:
var state_info = {
    "east": {
        "states": [
            "NC",
            "NY"
        ],
        "http_service_route": "http://east"
    },
    "west": {
        "states": [
            "CA",
            "OR"
        ],
        "http_service_route": "http://west"
    },
    "south": {
        "states": [
            "FL",
            "TX"
        ],
        "http_service_route": "http://south"
    }
};

// Now access routing 

var region_states = null;
var route = null;
// In the folloowing 'region' will be each of the keys ('east', 'west', 'south'):
for (var region in state_info) {
   console.critical(region);
   region_states = state_info[region].states;
   if ((region_states.indexOf(customer_state)) != -1) {
      route = state_info[region].http_service_route;
      console.alert(region);
      break;
   };
}

// The route could be used to set the backend routing dynamically, but here it
// is just output:
session.output.write(route);

/* Sample output:
    http://east
*/