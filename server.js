require(__dirname + '/Resources/config.js');

const fs = require('fs');
const net = require('net');

require('./packet.js')

//load init files
const init_files = fs.readdirSync(__dirname + "/Initializers");
init_files.forEach((initFile) => {
    console.log('Loading Initializer: ' + initFile);
    require(__dirname + "/Initializers/" + initFile);
})

//load models
const model_files = fs.readdirSync(__dirname + "/Models");
model_files.forEach((modelFile) => {
    console.log('Loading Model: ' + modelFile);
    require(__dirname + "/Models/" + modelFile);
})

//load model_file maps
maps = {};
const map_files = fs.readdirSync(config.data_paths.maps);
map_files.forEach((mapFile) => {
    console.log('Loading Map: ' + mapFile);
    var map = require(config.data_paths.maps + mapFile);
    maps[map.room] = map;
})

//create server and listen
net.createServer((socket) => {
    console.log("socket connected")
    
    var C_inst = new require('./client.js')
    var thisClient = new C_inst()

    thisClient.socket = socket
    thisClient.initiate();

    socket.on('error', thisClient.error)
    socket.on('end', thisClient.end)
    socket.on('data', thisClient.data)
}).listen(config.port)

console.log("Initialization complete. Server running on port " + config.port + " in " + config.environment + " environment.")