/**
 * hash和加解密
 */

const crypto = require('crypto');
const fs = require('fs');


module.exports = {
  sha1(str) {
    var sha1 = crypto.createHash("sha1");
    sha1.update(str);
    var res = sha1.digest("hex");
    return res;
  },
  sha1File(filepath) {
    return new Promise((resolve, reject) => {
      var fd = fs.createReadStream(filepath);
      var hash = crypto.createHash('sha1');
      hash.setEncoding('hex');

      fd.on('end', function () {
        hash.end();
        //console.log(hash.read()); // the desired sha1sum
        resolve(hash.read())
      });

      // read all file and pipe it (write it) to the hash object
      fd.pipe(hash);
    })
  },
  checkFileSha1(filepath, sha1_value) {
    return this.sha1File(filepath) === sha1_value
  },
  md5(str) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
  },
  base64(str){
    return (new Buffer(str)).toString('base64')
  },
  decodeBase64(str){
    return new Buffer(str, 'base64').toString();
  }
}