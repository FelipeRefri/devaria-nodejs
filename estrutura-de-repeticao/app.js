const ListaDeArgumentos = process.argv.slice(2);

console.log('----------Executando um FOR-------------------');
for(let ControladorFor = 0; ControladorFor < ListaDeArgumentos.length; ControladorFor++){
    console.log(`Posição ${ControladorFor} valor lido = ${ListaDeArgumentos[ControladorFor]}`);
}

console.log('------------------------ Executando um WHILE ------------------');
let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('------------------------ Executando um DO WHILE ------------------');
let controladorDoWhile = 0;
do{
    console.log(`Posicao ${controladorDoWhile} valor lido = ${listaArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile < listaArgumentos.length)

console.log('------------------------ Executando um FOR OF ------------------');

for(const argumento of listaArgumentos){
    console.log(`Valor lido = ${argumento}`);
}