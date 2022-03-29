    
var prompt = require('prompt-sync')();
console . log ('apresentacao    esse jogo se passa em gotham    e a personagem pricipal é barbara gordom a batgirl \n uma das pesornagem do universo batman \n o seu obigetivo é chegar em casa viva  ' )

// barbar gordao filha do comisario de pulicia jim gordao . recem aceita da univercidade de gotham 
// seu obijetivo é chegar en casa viva  , a sua rotina é traalhoa 8 horas na bliblioteca , 8 da noite faculdade 

// personagens batman alfred jim gordom dick graysom luke fox demian wayne
// mais escolhas isso  e um jogo
var saude = 10 
var bateria_celular = 100
var dinhero = 230
var armas   = 4
var casaço = 10
//coreçao de  testo 

function rotina1 ( )  {
      //mais opisoes deixar mais claro ir para a faculdade 
    var manha = prompt(' 7  horas o despertador toca vc acorda1  ? ou dormi mas um pouco 2')
if (manha == 1 ){
console.log(' ao acordar vc ve sua casa bagunsado e seu pai indo para o trabalho  , oq vc faz 1 pergunta aonde ele vai 2 , espera ele sair ele liga para seu namorado  , 3 se aruma para o trabalho ')
 var acordar = prompt()
}else if ( acordar == 1 ){
console.log(' seu pai diz vou ao trabalho querida , parece q ouve um fugitivo em  arkham ')


}if ( acordar == 2 ){
console.log('ele atende mas diz q esta ocupado talvez eu te encontre na faculdade ')

}if (acordar == 3 ){
console.log(' vc se arruma toma cafe   \n coomo vc quer ir para o trbalho  1 ape 2 de moto  ou 3 liga para o demian e pede carona ')
var deimian = pprompt ( ' ')


}if ( deimian == 1 ){
console. log ('  depois de uma caminhada de  20 minutos dick passa por vc de carro é overece carona   ')// fazer algo mais 



}if ( deimian == 2  ){
console. log ('  vc chega a faculdade  depois de alguns minutos   ')





}if ( deimian == 3   ){
    console. log ('  ele atende  e pergunta oq vc quer , vc responde  quer carona para a faculdade   \n  ele diz nao oq vc responde 1 tchau ou 2 manda ele se fuder ')
    var conversa = prompt('')
    
    


}if ( conversa == 1    ){
    console. log ('  ele disliga')
    
    
    
} if (conversa == 2 ){
     console.log(' vai vc tu tu tu ')

}



}







 
                


// faculdade dimuiir estatos usar hora 
function rotinafacu ( ) {
var faculdade = console.log('  ja na faculdade o vc vai 1 direto parra as aulas  2 toma um cafe 3 vai para a biblioteca estudar  ')

var  facu = prompt('')
if ( facu   ==1   ){
console.log( ` hoge vc tem essas aulas sao Algoritmos e Programação, 
 Análise e Projeto de Algoritmos,
 Análise e Projeto de Software,
 Arquitetura e Organização de Computadores I,`)







}else if ( facu  == 2 ){

console.log('durante a primeira a primeira aula o professor faz uma pergunta oq é um algoritimo , oq vc responde  ')




}
console.log(' vc tem q estar na faculdade as 5 \n quando vc acabade comer algumas pessoas chegam vc vai falar com eles , e ti dao uma lista de livros 1984, de George Orwell\nO Lobo da Estepe \n Dom Casmurro\n meu desfruto \n cem chances')
console.log('algus vao enbora ficam apenas 2  , 1 vc se senta com eles ou 2 volta ao trabalho    ')
var blibliotra  = prompt ('')
console.log(' vc se destrai com a cconversa e esquece da facudade as 5 horas vc olha noa celular e ja sao 4 34       ')
// diminuir a bateria do celular 
}
//confrito da historia q define se vc vai ver o batman ou nao 


// function facudade ( ) {  
// console.log(` hoje vc essas aulas Algoritmos e Programação, 
// Análise e Projeto de Algoritmos,
// Análise e Projeto de Software,
// Arquitetura e Organização de Computadores I,
// Arquitetura e Organização de Computadores II,
// Banco de Dados I,
// Banco de Dados II, 
// Circuitos Digitais`)
//      console.log('vc sai da faculdade cansanda sao 11 e meai da noite  , muita cansanda vc qur sair da faculdade mas um grupo te pedi ajuda para estudar ' )
//   console.log(' muito cansada depois das aulas oq vc faz 1 vai sosinah ou 2 pede carona 2 ou 3 oferece cara para alguem ')   
// var voltarcasa1 = prompt('')

// diminuir istatos 





function rotina3( ) {
    console.log ('depois de muito transito vc chega ao centro da cidade perto da tore wheyne acontece um acideti tudo parado o q vc faz 1 vai pela calsada ')
    console.log(' 2 liga para seu pai  e avisa q vai se atrasar \n 3 vai pelo beco do crime ')
var volta4 = prompt ('')
if (volta == 3 ){
console.log(' vc nao mais crinça sabe de tudo q acontece nece lugar crimes trafico etc etc ')
console.log('na saida do beco vc ve uma crianca magra chorando 1 a juda ou 2 continua seu trageto ')
var golpe = prompt ('   ')
}else if ( golpe == 1 ){
console.log(' vc caio em um golpe     das sonbras aparece um homen armado   ele diz passa tudo boneca')
console.log( ' oq vc faz 1 obodece ou 2 tenta fugir ')
var golpe_2 = prompt(' 1 vc entrega seu celular mais ele te ataca ') //diminuir vida 
console.log (' durante a briga vc ouve um barulho das sonbras sugem o batman ele derrota o baldido em pocos segundos logo depis a policia aparece ')

}
 
}
  
  
 
// finais da historia onde vc pode vagalume e ver o batman talves ajudalo 

//faser umtro ciclos 


//final da historia ou vai para o hospital e ve o batman ou vai pra casa sam e salva
    rotina1()