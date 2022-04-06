.concat(buffer.toString("utf-8").split(" ")[0])

concat(buffer.toString("utf-8").split(" ")[1])

 res += buf.slice(0, cr).toString(enc);

const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

var result = hmac.update(Buffer.from(decodeURIComponent(params), 'utf-8')).digest('base64');

var bh = crypto.createHmac('sha256', key).update(sb).digest();

const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'a secret');
hmac.update('some data to hash');
console.log(hmac.digest('hex'));
-------

The `Hash` class is a utility class for creating hashes of data. It can be used in the following ways:
-  As a [ stream ] [ ] which is both readable and writable, the data is written to generate a computed hash digest on the readable side

-  Use the [ `hash.update()` ] [ ] and [ `hash.digest()` ] [ ] methods to generate the computed hash.
---------
Hmac`Class is a tool for creating encrypted Hmac digests. It can be used in two ways :
-as  [ stream ] [ _] , which is both readable and writable, the data is written to generate a computed HMAC digest in terms of readability.
-  Use the [ `hmac.update()` ] [ ] and [ `hmac.digest()` ] [ ] methods to generate the computed HMAC digest.
