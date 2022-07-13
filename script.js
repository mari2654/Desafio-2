let idade=18;

if(idade >=18){
console.log("Pode entrar na festa!");
}else{
    console.log("Não pode entrar na festa!");
}


let maiorIdade=true;
console.log(!maiorIdade);

let mes="Dezembro";
if((mes==="Janeiro")||(mes==="Dezembro")){
    console.log("Faz aniversário em jan e dez");
}else{
    console.log("Não faz aniversário em jan ou dez");
}

let name="Raisa";
if(name.charAt(0) === "R"){
    console.log(name, "seu nome começa com a letra R");
}else{
console.log("Sua inicial não é R");
}

let sobrenome="Silva";
if( (sobrenome.length >= 6) || (nome.charAt(0) === "E") ){
    console.log(`Seu sobrenome: ${sobrenome} tem +6 letras ou começa com a letra E`);
}else{
    console.log(`Seu sobrenome: ${sobrenome} não tem +6 letras ou não começa com a letra E`)
}