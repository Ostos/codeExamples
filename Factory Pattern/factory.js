//FACTORY PATTERN

function Car( options ) {
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

function Truck( options){
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function ( options ) {

  if( options.vehicleType === "car" ){
    this.vehicleClass = Car;
  }
  if( options.vehicleType === "truck"){
    this.vehicleClass = Truck;
  }

  return new this.vehicleClass( options );

};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( { 
            vehicleType: "convertible", 
            color: "yellow", 
            doors: 6 } );

console.log( car instanceof Car ); 
console.log( car );