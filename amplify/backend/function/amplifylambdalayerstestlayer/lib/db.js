var pool = require('./nodejs/node_modules/pg').Pool;
exports.connection = ()=>{
    return pool;
}
exports.hello = () =>{
    return 'Hello';
};