const { stdin } = require('process');

const ReadLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

const ValidarNumeroInformado = (numero) =>{
        const resultado = Number.parseFloat(numero);
        if(!resultado){
            console.log('Número informaro não é válido!');
        }
        return resultado
    
}

const ValidarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado é inválido!');
            return null;
    }
}

ReadLine.question('Favor digitar um número: ', (numero1) => {
        const NumeroValidado1 = ValidarNumeroInformado(numero1);
        
        if(NumeroValidado1){
            ReadLine.question('Favor digitar outro número: ', (numero2) =>{
                const NumeroValidado2 = ValidarNumeroInformado(numero2);
            
                if(NumeroValidado2){
                    ReadLine.question('Favor informar o operador: ', (operador) => {
                        const OperadorValidado = ValidarOperador(operador);
                        if(OperadorValidado){
                            switch(OperadorValidado){
                                case '+' : console.log(`Operador selecionado + : ${NumeroValidado1} + ${NumeroValidado2} = ${NumeroValidado1 + NumeroValidado2}`);
                                    break;
                                case '-' : console.log(`Operador selecionado - : ${NumeroValidado1} - ${NumeroValidado2} = ${NumeroValidado1 - NumeroValidado2}`);
                                    break;
                                case '/' : console.log(`Operador selecionado / : ${NumeroValidado1} / ${NumeroValidado2} = ${NumeroValidado1 / NumeroValidado2}`);
                                    break;
                                case '*' : console.log(`Operador selecionado * : ${NumeroValidado1} * ${NumeroValidado2} = ${NumeroValidado1 * NumeroValidado2}`);
                                    break;
                                case '%' : console.log(`Operador selecionado % : ${NumeroValidado1} % ${NumeroValidado2} = ${NumeroValidado1 % NumeroValidado2}`);
                                    break;
                                default : break;
                                
                            }
                        }
                    });
                }
            });
        }
    })