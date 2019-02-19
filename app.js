

//let myPerson = {
// firstName: "Paula",
// lastName: "Suarez",
// fullName: function () {
// return this.firstName + " " + this.lastName;
// }
//}

//replacing above with below

function Person(firstName, lastName) {
    // construct the object using the arguments
    this.firstName = firstName;
    this.lastName = lastName;

    // a method which returns the full name
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

let myPerson = new Person("P", "Suarez");
console.log(myPerson.fullName());

//Exercise
//Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

//The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

function p (name, age){
    //construct
    this.name = name;
    this.age = age;

    //method
    this.describe = function(){
        return this.name + " " + this.age + ' years old.';
    }


}

let jack = new p("Jack", 25);
let jill = new p("Jill", 24);
console.log(jack.describe());
console.log(jill.describe());