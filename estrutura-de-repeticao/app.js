const ListaDeArgumentos = process.arg.slice(2);

console.log('----------Executando um FOR-------------------');
for(let ControladorFor = 0; ControladorFor < ListaDeArgumentos.length; ControladorFor++){
    console.log(`Posição ${ControladorFor} valor lido = ${ListaDeArgumentos[ControladorFor]}`);
}