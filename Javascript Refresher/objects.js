// Sintaxe de um objeto
const person = {
    name: "Matheus", // Declaração de Atributo
    age: 23,
    greet() {
     console.log("Hi! I am " + this.name);
    }    // Declaração de método
};

// Chamando método
person.greet();

// Spread Operator 
const copiedPerson = {...person};
console.log(copiedPerson);


// Destruction 

function showName({name, age}){
    console.log(name);
    console.log(age);
}

const {age, name} = person;
console.log(name + " " + age);

showName(person);