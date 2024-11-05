class Vehicle {                                                                     
    constructor(jsObject) {
        this.wheels = jsObject.wheels;
        this.doors = jsObject.doors;
        this.color = jsObject.color;
    }
    vehicleInfo() {
        return(`This vehicle has ${this.wheels} wheels, ${this.doors} doors and a ${this.color} color. `)
    }
}
                                                        
class Car extends Vehicle {                                                         
    constructor(jsObject) {
        super(jsObject);                                                
        this.topSpeed = jsObject.topSpeed;                                                   
    }
    getTopSpeed() {                                                                 
        return(`This car has a whooping top speed of ${this.topSpeed}.`);
    }
}
        
class Truck extends Vehicle {                                                       
    constructor(jsObject) {
        super(jsObject);                                                
        this.maxLoadWeight = jsObject.maxLoadWeight;                                         
    }
    getMaxLoadWeight() {                                                            
        return(`This truck has a max load weight of ${this.maxLoadWeight}`);   
    }
}

class VehicleFactory {
    constructor(type) {
        this.type = type;
    }
    create(jsObject) {                                                                  
        switch(this.type) {
            case("Car"):
                return new Car(jsObject);                           
            case("Truck"):
                return new Truck(jsObject);                      
        }
    }
}

const json_car = '{"wheels": 4, "doors": 4, "color": "white"}'                      
const js_car = JSON.parse(json_car);                                                

Object.defineProperty(js_car, "topSpeed", {                                         
    value: 150,
    enumerable: true,
    writable: true,
});

const carFactory = new VehicleFactory("Car");                                              
const newCar = carFactory.create(js_car);
console.log(newCar.vehicleInfo());                                                                
console.log(newCar.getTopSpeed());                                                               

const json_truck = `{"wheels": 18, "doors": 2, "color": "yellow"}`                  
const js_truck = JSON.parse(json_truck);                                            

Object.defineProperty(js_truck, "maxLoadWeight", {                                    
    value: 2000,
    enumerable: true,
    writable: true,
});

const truckFactory = new VehicleFactory("Truck");                                     
const newTruck = truckFactory.create(js_truck);
console.log(newTruck.vehicleInfo());                                                             
console.log(newTruck.getMaxLoadWeight());                                                        


