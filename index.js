var recado = "Você está prestes a entrar no melhor site de Mangás do Brasil";
alert(recado);
var nome = prompt("NOME: ");
//OBTER DIA ATUAL
var diaAtual = new Date().getDate();
//OBTER MÊS ATUAL (DE 0 A 11)
var mesAtual = new Date().getMonth();
//OBTER ANO ATUAL
var anoAtual = new Date().getFullYear();

var dia = prompt("DIA: ");
var mes = prompt("MÊS: ");
var ano = prompt("ANO: ");

alert("NOME: " +nome+ "\nDATA DE NASCIMENTO: " +dia+ "/" +mes+ "/" +ano);

var idade = anoAtual - ano;

if( ((ano == 2004) && (mes >= (mesAtual +1)) && (dia > diaAtual)) || ((ano == 2003) && (mes >= (mesAtual +1))) ){
    idade = idade - 1;
}
if((idade >= 18)){
    alert(idade + " ANOS: MAIOR DE IDADE?! A loja é totalmente sua, meu caro!");
}
else{
    alert(idade + " ANOS! MENOR DE IDADE?! Calma meu bom! Tu ainda é muito novo para compras online!");
}
console.log(nome);