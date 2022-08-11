const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// clearing - put first to clear the console before other methods
console.clear();

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a smiley face %s string", "😊");

// Styled
console.log("%c I am some stylized text", "font-family: arial");

// warning!
console.warn("I am signifying a warning");

// Error :|
console.error("Warning! I am an text signifying an error!");

// Info
console.info("I am informative text");

// Testing
const p = document.querySelector("p");

console.assert(
  p.classList.contains("Erroneous String"),
  "Nope - that's incorrect!"
);

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Kyrie");
console.count("Kyrie");
console.count("Kevin Durant");
console.count("Kevin Durant");
console.count("Kevin Durant");

// timing
console.time("fetching data");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

//table
console.table(dogs);
