//const {newfile} = require('/opt/nodejs/newfile.js');
const {hello, connection} = require('/opt/db.js');

exports.handler = async (event) => {
    console.log(newfile());
    return hello();
};
