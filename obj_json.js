// const jsonObject = `{"name": "John", "age": 30, "car": null}`;
// console.log(jsonObject);

// const obj = JSON.parse(jsonObject);
// console.log(obj);




// const jsObject = {name: "John", age: 30, car: null};

// const newJSON = JSON.stringify(jsObject);
// console.log(newJSON);

// const convertJSON = json2xml(jsonObject);
// console.log(convertJSON);

// const jsonObject = `{"name": "John", "age": 30, "car": null}`;
// console.log(jsonObject);

// const convertJson = json2xml(jsonObject);
// console.log(convertJson);

const jsonData = '{"name": "John", "age": 30, "car": null}';
console.log(jsonData);
const object = JSON.parse(jsonData);
console.log(JSON.stringify(object, null, 5));