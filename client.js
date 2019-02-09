var now = require('performance-now')
var _ = require('underscore')

module.exports = function() {
    //these objects will be added at runtime...
    //this.socket = {}
    //this.user = {}

    this.initiate = function() {
        var client = this
        
        client.socket.write(packet.build(["HELLO", now().toString()]))

        console.log('client initiated')
    }

    this.data = function(data) {
        console.log("client data: " + data.toString())
    }

    this.error = function(err) {
        console.log("client error: " + err.toString())
    }

    this.end = function() {
        console.log("client closed")
    }
}