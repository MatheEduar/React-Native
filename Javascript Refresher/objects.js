// Sintaxe de um objeto
const person = {
    name: "Matheus", // Declaração de Atributo
    greet() {
     console.log("Hi! I am " + this.name);
    }    // Declaração de método
};

// Chamando método
person.greet();

// Spread Operator 
const copiedPerson = {...person};
console.log(copiedPerson);
