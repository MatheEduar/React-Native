const user = "Matheus"; // Strings
let age = 23; // Integers
const hasHobbies = true; // Booleans

age = 24; // Mudança de variável

// Arrow Function
const sumarizeUser3 = (userName, userAge, userHasHobbies) => {
    return 'User: ' + userName 
    + '\nAge: ' + userAge 
    + '\nHobbies: ' + userHasHobbies
};

// Versão Compacta (Com apenas um comando)
const add = (a, b) => a + b;

// Versão Compacta  (Com apenas um argumento)
const addOne = a => a + 1;

// Versão sem argumento
const showOne = () => 1;


// Função Anônima 
const sumarizeUser2 = function (userName, userAge, userHasHobbies) { 
    return 'User: ' + userName 
    + '\nAge: ' + userAge 
    + '\nHobbies: ' + userHasHobbies
};

// Função Nomeada
function sumarizeUser1(userName, userAge, userHasHobbies) { // Variáveis Locais 
    return 'User: ' + userName + '\nAge: ' + userAge + '\nHobbies: ' + userHasHobbies // Interpolação de Strings
};



const frase = sumarizeUser1(user, age, hasHobbies);
console.log(frase);
