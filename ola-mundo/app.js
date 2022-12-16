/* Aplicação java script para estudos no curso Devaria */

const ReadLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const MinhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(MinhaPrimeiraConstanteString);


let LeituraDeCampo;
ReadLine.question('Por favor, digite alguma coisa: ', input => {
    LeituraDeCampo = input;
    console.log(`o usuário digitou: ${LeituraDeCampo}`);
});

