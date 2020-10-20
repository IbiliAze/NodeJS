const uuid = require('uuid');
const Site = function(name, floor){
    this.name = name;
    this.floor = floor;
    this.id = uuid.v4();
};



module.exports = Site;