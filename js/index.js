// Iteration 1: Names and Input

let hacker1= "Juan"

console.log("The diver's name is " + hacker1)

let hacker2 = "Ariadna"

console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker2.length > hacker1.length) {

    console.log(`It seems that the navigator has the longest name, is has ${hacker2.length} characters!`)

}

// Iteration 3: Loops

let hacker1Loop = "";

for (let i = 0; i < hacker1.length; i++) {

    hacker1Loop += hacker1[i].toUpperCase() + " ";

}

console.log(hacker1Loop.trim())

let hacker2Loop = "";

for (let i = hacker2.length - 1; i >= 0; i--) {

    hacker2Loop += hacker2[i];

  }

  console.log(hacker2Loop)

  if (hacker1.localeCompare(hacker2) < 0) {

    console.log("The driver's name goes first.");

  } else if (hacker1.localeCompare(hacker2) > 0) {

    console.log("Yo, the navigator goes first definitely.");

  } else {

    console.log("What?! You both have the same name?");

  }