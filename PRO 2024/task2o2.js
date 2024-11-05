// const double = x => x * 2;
// const triple = x => x * 3;
// const addFour = x => x + 4;
// const subtractThree = x => x - 3;

// const functionsArray = [
//     triple,
//     addFour,
//     subtractThree,
//     double,
//     Math.sqrt,
// ];

// const number = 10;

// // const GetNumber = function(index, currentResult, array) {
// //     if (index == 0) {
// //         return array[index](currentResult);
// //     }
// //     return array[index](GetNumber(index-1, currentResult, array));
// // }

// // getNumber(functionsArray.lenght -1, 10, functionsArray);

// const result = functionsArray.reduce((acc, func) => func(acc), number);

// console.log(result);

// const addString = y => x => x + y;

// const add2 = addString("2");
// const add3 = addString("3");
// const add4 = addString("4");

// console.log(add4("text"));


// const createName = () => {
//     const myName = "Anders";

//     return () => {
//         console.log(`My name is ${myName}`);
//     }
// }

// const name = createName();
// name();

// const Student = ({ name, age, gender, university }) => {
//     var _name = name;
//     var _age = age;
//     var _gender = gender;
//     var _university = university

//     return {
//         getName: () => _name,
//         getAge: () => _age,
//         getGender: () => _gender,
//         getUniversity: () => _university,

//         setUniversity: newUniversity => _university = newUniversity,
//     };
// }

// const me = Student({ name: 'Mark', age: 22, gender: 'male', university: 'Oxford' });
// console.log(me.getUniversity());
// me.setUniversity("Cambridge");
// console.log(me.getUniversity());

// private property: textToAdd
// one function generateText() string variable x    - return func string y

// const tg = TextGenerator({textToAdd: `.....`});
// const fun = tg.generateText("First Text");
// console.log(fun("Second Text"));
// tg.TextToAdd("^__^");
// console.log(fun("Second Text"));

// function textGenerator({ textToAdd = ''}) {
//     let _textToAdd = textToAdd;
//     return {
//         getTextToAdd: function() {
//             return _textToAdd;
//         },
//         setTextToAdd: function(value) {
//             _textToAdd = value;
//         },
//         generateText: function(x) {
//             return function(y) {
//                 return `${x} ${_textToAdd} ${y}`;
//             };
//         }
//     };
// }

// const tg = textGenerator({textToAdd: `.....`});
// const fun = tg.generateText("First Text");
// console.log(fun("Second Text"));
// tg.setTextToAdd("^__^");
// console.log(fun("Second Text"));
// tg.setTextToAdd("fuckityfuck");
// console.log(fun("Second Text"));

// function createCounter() {
//     let count = 0;
//     return {
//         increment: function () {
//             count += 1;
//         },
//         getCount: function () {
//             return count;
//         }
//     }
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.getCount());

// counter.increment();
// console.log(counter.getCount());

// counter.increment();
// console.log(counter.getCount());

// function createBankAccount() {
//     let balance = 0;
// }



// const numbers = [1, 2, 5, 9, 12, 18, 24, 31, 38, 44]

// const allEven = numbers.every(x => x % 2 == 0);              // SOME / EVERY
// const someEven = numbers.some(x => x % 2 == 0);
// console.log(allEven);
// console.log(someEven);

// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return function (c) {
//                 return f(a, b, c);
//             }
//         };
//     };
// }

// function sum(a, b, c) {
//     return a+ b + c;
// }

// let addCurrying = curry(sum);
// addCurrying(5)(6)(7);                    // Passing each argument


// const double = x => x * 2;
// const triple = x => x * 3;
// const addFour = x => x + 4;
// const subtractThree = x => x - 3;

// const functionsArray = [
//     triple,
//     addFour,
//     subtractThree,
//     double,
//     Math.sqrt,
// ];

// const getNumber = function(index, currentResult, array) {
//     if ( index == 0 ) {
//         return array[index](currentResult);
//     }
//     return array[index](getNumber(index - 1, currentResult, array));
// }
// getNumber(functionsArray.length - 1, 10, functionsArray);



// function countDown(number) {
//     if (number <= 0) {
//         console.log("Done!");
//         return;
//     }
//     console.log(number);

//     countDown(number - 1);
// }

// countDown(5);


// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n*factorial(n-1);
// }

// console.log(factorial(5));

// const add = (x, y, z) => x + y + z;
// console.log(add(1,2,3))
// console.log(add.apply(null, [1, 2, 3]));


// const add = (x, y, z) => x + y + z;
// var func1 = add.bind(null, 1, 2);
// var func2 = add.bind(null, 10);
// func1(10); // 13
// func2(1, 5); // 16




// const priceArray = [800, 200, 100, 300, 700];

// const initialValue = 0;

// const totalSum = priceArray.reduce((accumulator, sumArray) => {
//     return accumulator + sumArray;
// }, initialValue);

// console.log(totalSum);               // initial value to accu, first position array to sumArray. Then 800 to accu, 200 to sum Array etc.

// let instance = null;

// const personJSON = `{"name": "Jane", "Age": 22, "gender": "female"}`;
// const parsedPerson = JSON.parse(personJSON);


// class Person{
//     constructor(jsObject) {
//         if (!instance) {
//             this.name = jsObject.name;
//             this.age = jsObject.age;
//             this.gender = jsObject.gender;
//             instance = this;
//         } else {
//             return instance;
//         }
//     }
// }

// const personJane = new Person(parsedPerson);
// console.log(personJane);

// const john = new Person("John", 22, 'male');
// const barbara = new Person("Barbara", 27, 'female');

// console.log(john);
// console.log(barbara);


// class Car {
//     constructor(gas) {
//           this.gas = gas;
//           this.actions = [];
//       }
  
//       setGasLevel(val) {
//           this.gas = val;
//           this.notifyAll();
//       }
  
//       subscribe(observer) {
//           this.actions.push(observer);
//       }
  
//       unsubscribe(observer) {
//           this.actions.filter(function(el) {
//               return el !== observer;
//           });
//       }
  
//       notifyAll() {
//           return this.actions.forEach(function(el) {
//               el.update(this);
//           }.bind(this));
//       }
//   }
  
//   class Consumption {
//       update(car) {
//           car.gas = car.gas + 1;
//       }
//   }
  
//   var c = new Car(1);
//   var co = new Consumption();
//   c.subscribe(co);
//   c.setGasLevel(11); // 12
//   c.unsubscribe(co);
//   c.setGasLevel(10); // 11


// class  Dishes {
//     constructor(name, nationality) {
//         this.name = name;
//         this.nationality = nationality;
//     }    
// }

// class Pizza extends Dishes {
//     constructor(name, nationality) {
//         super(name, nationality);
//     }
// }

// class Pasta extends Dishes {
//     constructor(name, nationality) {
//         super(name, nationality);
//     }
// }

// class Chicken extends Dishes {
//     constructor(name, nationality) {
//         super(name, nationality);
//     }
// }

// class FoodFactory {
//     createPizza() {
//         throw new Error("Method createPizza must be implemented");
//     }
//     createPasta() {
//         throw new Error("Method createPasta must be implemented");
//     }
//     createChicken() {
//         throw new Error("Method createChicken must be implemented");
//     }
// }

// class AmericanRestaurant extends FoodFactory {
//     createPizza() {
//         return new Pizza("American Pizza", "America")
//     }
//     createChicken() {
//         return new Chicken("American Chicken", "America");
//     };
// }

// class ChineseRestaurant extends FoodFactory {
//     createChicken() {
//         return new Chicken("Chinese Chicken", "Chinese");
//     }
//     createPasta() {
//         return new Pasta("Chinese Pasta", "Chinese");
//     };
// }

// class ItalianRestaurant extends FoodFactory {
//     createPasta(){
//         return new Pasta("Italian Pasta", "Italy");
//     }
//     createPizza() {
//         return new Pizza("Italian Pizza", "Italy");
//     };
// }

// const americanRestaurant = new AmericanRestaurant();
// const italianRestaurant = new ItalianRestaurant();
// const chineseRestaurant = new ChineseRestaurant();

// console.log(americanRestaurant.createPizza());
// console.log(italianRestaurant.createPasta());
// console.log(chineseRestaurant.createChicken());
 


// class Pizza {
//     constructor(nationality) {
//         this.nationality = nationality;
//     }
//     getName() {
//         return "I am a " + this.nationality + " pizza.";
//     }
// }

// class ItalianPizza extends Pizza {
//     constructor() {
//         super("Italian");
//     }
// }

// class AmericanPizza extends Pizza {
//     constructor() {
//         super("American");
//     }
// }

// class Chicken {
//     constructor(nationality) {
//         this.nationality = nationality;
//     }
//     getName() {
//         return "I am a " + this.nationality + " chicken.";
//     }
// }

// class AmericanChicken extends Chicken {
//     constructor() {
//         super("American");
//     }
// }

// class ChineseChicken extends Chicken {
//     constructor() {
//         super("Chinese");
//     }
// }

// class Pasta {
//     constructor(nationality) {
//         this.nationality = nationality;
//     }
//     getName() {
//         return "I am a " + this.nationality + " pasta.";
//     }
// }

// class ItalianPasta extends Pasta {
//     constructor() {
//         super("Italian");
//     }
// }

// class ChinesePasta extends Pasta {
//     constructor() {
//         super("Chinese");
//     }
// }

// class AmericanRestaurant {
//     chicken = new AmericanChicken();
//     pizza = new AmericanPizza();
//     serveDish(type) {
//         switch(type) {
//             case `Pizza`:
//                 return this.pizza;
//             case `Chicken`:
//                 return this.chicken;
//             case `Pasta` : 
//                 console.log("Pasta is not served here");
//                 return;
//         }
//     }
// }


// class ChineseRestaurant {
//     chicken = new ChineseChicken();
//     pasta = new ChinesePasta();
//     serveDish(type) {
//         switch(type) {
//             case `Chicken`:
//                 return this.chicken;
//             case `Pasta`:
//                 return this.pasta;
//             case `Pizza` : 
//                 console.log("Pizza is not served here");
//                 return;
//         }
//     }
// }


// class ItalianRestaurant {
//     pasta = new ItalianPasta();
//     pizza = new ItalianPizza();
//     serveDish(type) {
//         switch(type) {
//             case `Pasta`:
//                 return this.pasta;
//             case `Pizza`:
//                 return this.pizza;
//             case `Chicken` : 
//                 console.log("Chicken is not served here");
//                 return;
//         }
//     }
// }

// //Create Restaurants
// const italianRestaurant = new ItalianRestaurant();
// const chineseRestaurant = new ChineseRestaurant();
// const americanRestaurant = new AmericanRestaurant();


// // Order a spesific dish from a spesific restaurant
// const dishPortal = (nationality, dish) => {
//     switch(nationality) {
//         case "American":
//             return americanRestaurant.serveDish(dish);
//         case "Chinese" :
//             return chineseRestaurant.serveDish(dish);
//         case "Italian" :
//             return italianRestaurant.serveDish(dish);
//     }
// }

// // Implementation
// const dish = dishPortal("Italian", "Pasta");
// console.log(dish.getName());

// const aDish = dishPortal("American", "Pizza");
// console.log(aDish.getName());




// TASK 2.5 Task 2.5 || TASK 2.5 Task 2.5 || TASK 2.5 Task 2.5 ||


// //Parent Class
// class Shape {
//     draw() {
//         console.log("A undefined draw method");
//     }
// }


// //Child Class 1
// class Circle extends Shape {
//     draw() {
//         console.log("I am a circle !");
//     }
// }

// // Child Class 2
// class Rectangle extends Shape {
//     draw() {
//         console.log("I am a rectangle !");
//     }
// }

// // Child Class 3
// class Square extends Shape {
//     draw() {
//         console.log("I am a square !");
//     }
// }


// // Create the factory and define getShape
// class ShapeFactory {
//     circle = new Circle();
//     rectangle = new Rectangle();
//     square = new Square(); 
//     getShape(type) {
//         switch(type) {
//             case("circle") : 
//                 return this.circle;
//             case("rectangle") :
//                 return this.rectangle;
//             case("square") :
//                 return this.square;
//         }
//     }
// }

// const factory = new ShapeFactory();
// factory.getShape("circle").draw();


// class Coffe {
//     constructor(size, flavor) {
//         this.size = size;
//         this.flavor = flavor;
//     }
//     getDescription() {
//         return `${this.size} and ${this.flavor} coffe`;
//     }
// }

// class Latte extends Coffe {
//     getDescription() {
//         return `${this.size} ${this.flavor} Latte`;
//     }
// }

// class Espresso extends Coffe {
//     getDescription() {
//     return `${this.size} ${this.flavor} Espresso`;
//     }
// }

// class Cappuccino extends Coffe {
//     getDescription() {
//         return `${this.size} ${this.flavor} Cappuccino`;
//     }
// }

// class CoffeShop {
//     serveCoffe(type, size, flavor) {
//         switch(type) {
//             case "Latte":
//                 return new Latte(size, flavor);
//             case "Espresso":
//                 return new Espresso(size, flavor);
//             case "Cappuccino":
//                 return new Cappuccino(size, flavor);
//             default:
//                 console.log("Sorry the icecream machine is broken");
//                 return null;
//         }
//     }
// }

// const myCoffeShop = new CoffeShop();
// const myLatte = myCoffeShop.serveCoffe("Latte", "Large", "Vanilla");
// console.log(myLatte.getDescription());


// 

// class Coffe {
//     constructor(size, flavor, type) {
//         this.size = size;
//         this.flavor = flavor;
//         this.type = type;
//     }
//     getDescription() {
//         return `Order up on a ${this.size} ${this.flavor} ${this.type}`;
//     }
// }

// class CoffeShop {
//     serveCoffe(type, size, flavor) {
//         return new Coffe(size, flavor,type);
//     }
// }

// const coffePortal = (type, size, flavor) => {
//     const coffeeShop = new CoffeShop();
//     return coffeeShop.serveCoffe(type, size, flavor);
// };

// const myCoffe = coffePortal("Ice tea", "Small", "China");
// console.log(myCoffe);

// function weirdAssClosure() {
//     console.log("Hey you !")
//     return function () {
//         console.log("Yes you !");                // Returning Function
//         return function () {
//             console.log("Well this is weird");
//         }
//     }
// }

// weirdAssFunction()()();

// function createCounter(count) {
//     return {
//         increment: function() {
//             count += 1
//         },
//         currentValue: function() {
//             return count
//         }
//     }
// }

// const myCounter = createCounter(3);
// const anotherCounter = createCounter(-2);

// console.log(myCounter.currentValue());
// myCounter.increment();
// console.log(myCounter.currentValue());

// console.log(anotherCounter.currentValue());
// anotherCounter.increment();
// console.log(anotherCounter.currentValue());

class Vehicle {                                                                     // Question 3. Parent Class with a method to return the description of the car.
    constructor(wheels, doors, color) {
        this.wheels = wheels;
        this.doors = doors;
        this.color = color;
    }
    vehicleInfo() {
        console.log(`This car has ${this.wheels} wheels, ${this.doors} doors and a ${this.color} color. `)
    }
}

class Car extends Vehicle {                                                         // Question 4.1
    constructor(wheels, doors, color, topSpeed) {
        super(wheels, doors, color);                                                // Inherited from parent class
        this.topSpeed = topSpeed;                                                   // New property for max speed of car
    }
    getTopSpeed() {                                                                 // Method to indicate the top speed of the car.
        console.log(`This car has a whooping top speed of ${this.topSpeed}.`);
    }
}
        
class Truck extends Vehicle {                                                       // Question 4.2
    constructor(wheels, doors, color, maxLoadWeight) {
        super(wheels, doors, color);                                                // Inherited from parent class
        this.maxLoadWeight = maxLoadWeight;                                         // New property for max load weight of truck
    }
    getMaxLoadWeight() {                                                            // Method which returns a string for max load weight
        console.log(`This truck has a max load weight of ${this.maxLoadWeight}`);   
    }
}


const json_car = '{"wheels": 4, "doors": 4, "color": "white"}'                      // Question 1. Integers do not use "". Info from example in Schema
const js_car = JSON.parse(json_car); 




class VehicleFactory {
    create(type) {
        switch(type) {
            case "Car":
                return new Car(js_car);
            case "Truck":
                return new Truck(js_truck);
        }
    }
}

class CarFactory {

}





// const json_car = '{"wheels": 4, "doors": 4, "color": "white"}'                      // Question 1. Integers do not use "". Info from example in Schema


// //Convert JSON object to JS Object

// const js_car = JSON.parse(json_car);                                                 // Question 2. Parsing the json to create a JS. If it was the other way around it would be a Stringify.


All of the code below should be placed under the “Create CarFactory and a Car” comment.
Create an instance of the VehicleFactory, giving it the “car” vehicle type as an input parameter as a
string. This instance will only create cars.
Using this new factory instance and the “create” function inside that factory (from Question 5),
create a Car with the js_car object you created in Question 2 as an input parameter (in the form of a
JavaScript object).



This class is responsible for the creation of the vehicle objects (both “Car” and “Truck”).
This class takes a single input parameter called “type”.
The class should have a method used to create instances of both types of Vehicles.
The “create” method should take the desired vehicle specification (JavaScript object) as an input
parameter, the relevant vehicle object should be created and returned based on the received
“type”. Create this method.

Make a class that is responsible for the creation of vehicle objects. Both "Car" and "Truck".
This class takes a single parameter called "type". The class should have a method to take the desired
vehicle spesification (javascript object) as an input parameter, the relevant vehicle object should be
created and returned based on the recieved "type"