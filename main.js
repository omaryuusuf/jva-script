const student = {
  name: "Amina",
  age: 20,
  course: "Data Science"
};

console.log(student);
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
const phone = {
  company: "Samsung",
  storage: "128GB",
  battery: "85%"
};

console.log(phone);
function Employee(name, salary, role) {
  this.name = name;
  this.salary = salary;
  this.role = role;
}

const emp1 = new Employee("Khalid", 500, "Manager");
console.log(emp1);
function Product(productName, price, inStock) {
  this.productName = productName;
  this.price = price;
  this.inStock = inStock;
}

const product1 = new Product("Laptop", 1200, true);
console.log(product1);
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const book1 = new Book("JavaScript Basics", "John Doe", 250);
console.log(book1);
class Teacher {
  constructor(name,subject,experience) {
    this.name = "Fatima";
    this.subject = "Math";
    this.experience = 5;
  }
}

const teacher1 = new Teacher();
console.log(teacher1);
class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
}

const account1 = new BankAccount("AC12345", "Abdirahman", 3000);
console.log(account1);
class Animal {
  constructor(type, color, age) {
    this.type = type;
    this.color = color;
    this.age = age;
  }
}

const animal1 = new Animal("Cat", "White", 2);
console.log(animal1);
const laptop = {
  brand: "Dell",
  ram: "8GB",
  price: 700
};

console.log(laptop.brand);
laptop.ram = "16GB";
console.log(laptop);
const user = {
  username: "Ali2025",
  email: "ali@example.com",
  age: 22
};

console.log(user.email);
user.email = "ali.new@example.com";
console.log(user);
const room = {
  roomNumber: 105,
  price: 50,
  type: "Single"
};

console.log(room.price);
room.price = 40;
console.log(room);
const car2 = {
  brand: "Honda",
  model: "Civic",
  year: 2019
};

car2.owner = "Omar";
car2["last-service-date"] = "2025-01-01";

console.log(car2);
const student2 = {
  name: "Maryam",
  grade: "A",
  school: "Afbaro Academy"
};

student2.age = 18;
student2["favorite-subject"] = "Physics";

console.log(student2);
const item = {
  itemName: "Milk",
  price: 2,
  category: "Food"
};

item.quantity = 30;
item["discount-percentage"] = 10;

console.log(item);
const menu = {
  burger: 5,
  pizza: 8,
  juice: 3
};

for (let item in menu) {
  console.log(item + " : $" + menu[item]);
}
const city = {
  population: 500000,
  mayor: "Hassan",
  area: "200 sq km"
};

for (let key in city) {
  console.log(key + " : " + city[key]);
}
const schedule = {
  math: "8:00 AM",
  english: "10:00 AM",
  science: "1:00 PM"
};

for (let subject in schedule) {
  console.log(subject + " : " + schedule[subject]);
}
const movie = {
  title: "Inception",
  duration: "2h 30m",
  rating: 9
};

const movieJSON = JSON.stringify(movie);
console.log(movieJSON);
const jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';

const userObj = JSON.parse(jsonString);

console.log(userObj.name);
console.log(userObj.age);
console.log(userObj.country);
const weather = {
  temperature: 32,
  humidity: "70%",
  condition: "Sunny"
};

let weatherJSON = JSON.stringify(weather);
let finalWeatherObj = JSON.parse(weatherJSON);

console.log(finalWeatherObj);
