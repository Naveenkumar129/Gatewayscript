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
