require(__dirname + '/Resources/config.js');

const fs = require('fs');
const net = require('net');

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
init_files.forEach((mapFile) => {
    console.log('Loading Map: ' + mapFile);
    var map = require(config.data_paths + mapFile);
    maps[map.room] = map;
})
