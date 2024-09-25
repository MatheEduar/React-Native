const hobbies = ["Programar", "Treinar", "Jogar", "Cozinhar"]; // Declaração de arrays

for (let hobby of hobbies) { // Percorrendo Arrays com for loops
    console.log(hobby);
}

// Métodos de Arrays

// Map
console.log(hobbies.map( hobbie => { // Cria um novo array, percorrendo todos os elementos e fazendo o que a função faz 
    return "Hobby: "+ hobbie;
}))

// Push
hobbies.push('Dançar'); //Adiciona elemento no fim da lista

// Spread Operator 
const NovoArray = [...hobbies];

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4,6));

console.log(hobbies);

// Destructing

const hobbies_destruction = ["Rage", "Fight"];

const [hobbie1, hobbie2] = hobbies_destruction;

console.log(hobbie1, hobbie2);
