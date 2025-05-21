const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

let JsonString=JSON.stringify(user);
let parsedUSer=JSON.parse(JsonString);


console.log(parsedUSer.name);
console.log(parsedUSer.age);
console.log(parsedUSer.email);
console.log(parsedUSer.isAdmin);