// Calling external system example.
// This demonstrates use of the DataPower GatewayScript (ECMA) to transorm JSON to another JSON format.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

// Read the action input context as a JSON object
session.input.readAsJSON (function (error, input_json) {
    if (error) {
      // an error occurred when parsing the content, e.g. invalid JSON object
      // uncatched error will stop the processing and the error will be logged
      throw error;
    }
    var result =
    {"order":
    	{"order-date":
            	{"day": input_json.o.od.y,
    			 "month": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][(input_json.o.od.m - 1)],
                 "year" : input_json.o.od.y + 2000
            	}
    	},
    	"customer": {"name": input_json.o.c.cn, "address": input_json.o.c.ad, "phone": input_json.o.c.ph},
    	"order-number": input_json.on,
    	"date-time-received": new Date().toLocaleDateString() + ' - ' + new Date().toTimeString()
    };
    session.output.write(result);
});

/*
Sample input:
{
    "o": {
        "c": {
            "cn": "Apex",
            "ad": "999 Hollywood Ave, Los Angeles, CA",
            "ph": "00-1-999-999-9999"
        },
        "od": {
            "d": 31,
            "m": 9,
            "y": 15
        }
    },
    "on": "ABC-123"
}
Sample output: 
{
    "order": {
        "order-date": {
            "day": 15,
            "month": "Sep",
            "year": 2015
        }
    },
    "customer": {
        "name": "Apex",
        "address": "999 Hollywood Ave, Los Angeles, CA",
        "phone": "00-1-999-999-9999"
    },
    "order-number": "ABC-123",
    "date-time-received": "18 February 2015 - 11:32:05 GMT+0000 (GMT)"
}
 */
