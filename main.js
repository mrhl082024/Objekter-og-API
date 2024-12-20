import { handleInputs } from "./dom_handler.js";
import { fetchBreeds } from "./fetch_data.js";

//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.

let person = [
  {
    firstName: "Lars Henrik",
    lastName: "Roan Midtsæter",
    age: 24,
    job: false,
  },
  {
    firstName: "Bax",
    lastName: "Fyyy",
    age: 69,
    job: false,
  },
  {
    firstName: "Lars",
    lastName: "Krogsrud",
    age: 13,
    job: true,
  },
  {
    firstName: "Marius",
    lastName: "Aasen",
    age: 24,
    job: false,
  },
  {
    firstName: "Jesper",
    lastName: "Lotterud",
    age: 24,
    job: true,
  },
  ,
];
//------------------------------------------------------------------------------------------------------------------------------------------------

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name

const firstPerson = person[0];
console.log(firstPerson.firstName + " " + firstPerson["lastName"]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
person.forEach((e) => {
  e.fullName = function fullName() {
    return this.firstName + " " + this.lastName;
  };
});

console.log(person[1].fullName());
//------------------------------------------------------------------------------------------------------------------------------------------------

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.

person[2].age++;
person[2].job = !person[2].job;

console.log(person[2]);

//------------------------------------------------------------------------------------------------------------------------------------------------

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.

function fotballPubben(i) {
  {
    if (person[i].age >= 18) {
      return "It's party time " + person[i].firstName;
    } else {
      return "you're too young " + person[i].firstName;
    }
  }
}

for (let i = 0; i < person.length - 1; i++) {
  console.log(fotballPubben(i));
}

// person.forEach((person) => {
//   if (person.age >= 18) {
//     console.log("It's party time " + person.firstName);
//   } else {
//     console.log("You're too young " + person.firstName);
//   }
// });

//------------------------------------------------------------------------------------------------------------------------------------------------

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.

function university(person, degree) {
  switch (degree) {
    case "bachelors":
      person.age += 18;
      person.degree = "bachelors";
      person.student_loan = 6969;
      break;
    case "masters":
      person.age += 2;
      person.degree = "masters";
      person.student_loan = 6942069;
      break;
  }
}
university(person[1], "bachelors");
console.table(person[1]);
//------------------------------------------------------------------------------------------------------------------------------------------------

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.

(async () => {
  handleInputs();
  fetchBreeds();
})();

//------------------------------------------------------------------------------------------------------------------------------------------------

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
