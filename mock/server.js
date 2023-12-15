

// server is a mock server for testing

const { json } = require("express");

// it loads data from a json file and serves it
class Server {
    constructor(file) {
        this.data = require(file);
    }

    filterById(id){
        return this.data.filter(a => a.id == id);
    }
}

class ProctorDatabase extends Server{
    constructor(file) {
        parent(file);
    }
}


const server = new Server('./proc.json');

console.log(server.filterById(7755));