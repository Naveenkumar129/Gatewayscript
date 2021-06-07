// This demonstrates GatewayScript (ECMA) use of console to make log entries.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

// Taken from IBM knowledgecenter
//    http://www-01.ibm.com/support/knowledgecenter/SS9H2Y_7.0.0/com.ibm.dp.xi.doc/console_js.html

console.emerg("emergency");
console.alert("alert");
console.critical("critical");
console.error("error");
console.warn("warn");
console.notice("notice");
//Both of the following methods log at "info" level
console.info("info") ;
console.log("log");
//Both of the following methods log at "debug" level
console.debug("debug");
console.trace("trace");

session.output.write("Output may be seen in System Log and any log target that is looking for event/category 'gatewayscript-user'");

// For outputting to other logs see:
//     logtarget 'gatewayscript-log'
// which outputs to:
//     log file: logtemp://gatewayscript-log
// where the output to this is of form:
/*
Sat Sep 20 2014 08:52:46 [0x8580005c][gatewayscript-user][emerg] mpgw(GatewayScript-Explore-MPGW): tid(2534416)[request][192.168.1.112]: emergency
Sat Sep 20 2014 08:52:46 [0x8580005c][gatewayscript-user][alert] mpgw(GatewayScript-Explore-MPGW): tid(2534416)[request][192.168.1.112]: alert
Sat Sep 20 2014 08:52:46 [0x8580005c][gatewayscript-user][critic] mpgw(GatewayScript-Explore-MPGW): tid(2534416)[request][192.168.1.112]: critical
Sat Sep 20 2014 08:52:46 [0x8580005c][gatewayscript-user][error] mpgw(GatewayScript-Explore-MPGW): tid(2534416)[request][192.168.1.112]: error
Sat Sep 20 2014 08:52:46 [0x8580005c][gatewayscript-user][warn] mpgw(GatewayScript-Explore-MPGW): tid(2534416)[request][192.168.1.112]: warn
Sat Sep 20 2014 08:52:46 [0x8580005c][gatewayscript-user][notice] mpgw(GatewayScript-Explore-MPGW): tid(2534416)[request][192.168.1.112]: notice
*/
