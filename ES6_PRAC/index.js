/*Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to 
work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and 
insert `let` and `const`
John is the pet owner, and his name should be stored differently than the other names.*/



let name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        const name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

//------------------------------------------------------------------------------------------------------------


//task1

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly=arr=> {
    return arr.filter (person => person.friendly)
}


//task2-------------------------------------------------------------------------------------------------------
const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables=arr=> {
    return arr.map(carrot =>( { type: "carrot", name: carrot }))
}

//--------------------------------------------------------------------------------------------------------
/*function doMathSum(a, b) {
    return a + b
}

var produceProduct = function(a, b) {
    return a * b
}
*/

doMathSum=(a, b)=> { return a + b }

var produceProduct = (a, b)=> { return a * b }

//-----------------------------------------------------------------------------------
//task 3
//Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns 
//a string like the following:
//Hi Kat Stark, how does it feel to be 40?
function person(first, last, age) {
	var nameFirst = first;
	var nameLast = last;
	var years = age;

	//Do something

	return {
		nameFirst: first,
		nameLast: last,
		years: age
	}
};

var someone = person('John', 'Doe', 100);

console.log(someone.nameFirst); // John
console.log(someone.nameLast); // 24
console.log(someone.years); // 56

console.log(" hi "+someone.nameFirst+" "+someone.nameLast+ "how does it feel to be "+ someone.years)