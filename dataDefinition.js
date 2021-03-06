module.exports.Location = function( address, city, state ) {
  this.address = address; 
  this.city = city;
  this.state = state;
  this.phoneNum = null;

}

module.exports.Profile = function( name, pword, tasks ) {  
  var dataDef = require('./dataDefinition.js');
  this.name = name;
  this.pword = pword; 
  this.phoneNum = null;
  this.Schedule = new dataDef.Schedule( tasks );

}

module.exports.Schedule = function( tasks ) {
  this.currentTime = 0;
  this.currentDate = 0;
  this.optimizScore = 0;
  this.owner = 0;
  this.tasks = tasks;

}

module.exports.Task = function( name, date, time, address, city, state, recurring ) {
  var dataDef = require('./dataDefinition.js')
  this.name = name;
  this.date = date;
  this.time = time;
  this.recurring = recurring;
  this.Location = new dataDef.Location( address, city, state );  
  this.priority = 0;
  this.length = 0;
  this.cost = 0;
  this.type = 0;

}



