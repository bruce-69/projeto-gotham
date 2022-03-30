    
var prompt = require('prompt-sync')();
console . log ('apresentacao    esse jogo se passa em gotham    e a personagem pricipal é barbara gordom a batgirl \n uma das pesornagem do universo batman \n o seu obigetivo é chegar em casa viva  ' )

// barbar gordao filha do comisario de pulicia jim gordao . recem aceita da univercidade de gotham 
// seu obijetivo é chegar en casa viva  , a sua rotina é traalhoa 8 horas na bliblioteca , 8 da noite faculdade 

// personagens batman alfred jim gordom dick graysom luke fox demian wayne
// mais escolhas isso  e um jogo


const barbara ={    

    saude : '10',
    bateria_celular : '100',
    dinhero : '230',
    armas   : '4',
    casaço : '10',
     

};
//coreçao de  testo 

function rotina1 ( )  {
      //mais opisoes deixar mais claro ir para a faculdade 
    var manha = prompt(' 7  horas o despertador toca vc acorda1  ? ou dormi mas um pouco 2')
if (manha == 1 ){
console.log(' ao acordar vc ve sua casa bagunsado e seu pai indo para o trabalho  , oq vc faz 1 pergunta aonde ele vai 2 , espera ele sair ele liga para seu namorado  , 3 se aruma para o trabalho ')


}if ( manha  == 2 ){
    console.log(' vc dorme ate as oito e mwia e perde a hora da primeira aula  oq vc faz 1 corre e pega sua moto , 2 pede carona a algun amogo 3 pede  um  taxí ') 

     var atraso = prompt('')

}if  (atraso == 1 )
console.log( '  vc chega a faculdade oq vc faz  1 corre para a aula ou 2 vai para uma cafeteria comer alguma coisa vc nao tomou cafe ainda  ')
var faculdade = prompt()
if ( faculdade == 1 )
rotinafacu( )


 if (  faculdade == 2 ){ 
console.log( `
vc chega ou balcom oq vc pede 
1Pão de Queijo Tradicional	com    Flat White	R$ 17, 50   
2Croissant Multigrãos	com  Café Americano Gelado	R$ 15,50  
3Croissant de Frango  com   Café Filtrado/Dia	10,35
`)
var cafe = prompt ( ' ')
if ( cafe == 1 )
(barbara.dinhero=- 17,50 )
console.log(barbara.dinhero )
console.log( '  come e volta para a aula ')
}



if ( cafe == 2 )
         
(barbara.dinhero=- 15,50 )
console.log(barbara.dinhero )       
console.log ( ' vc come  e vai para a sengunda aula')



if ( cafe == 3 )
(barbara.dinhero=- 10,35 )
console.log(barbara.dinhero)
console.log(  ' come e vai para  aula ')

}

 
                


// faculdade dimuiir estatos usar hora 
function rotinafacu ( ) {
var faculdade = console.log('  ao chegar na sala oq vc faz se 1 entra apresa e se senta 2  ')

var  facu = prompt('')
if ( facu   ==1   ){
console.log( ` hoge vc tem essas aulas sao Algoritmos e Programação, 
 Análise e Projeto de Algoritmos,
 Análise e Projeto de Software,
 Arquitetura e Organização de Computadores I,`)







}else if ( facu  == 2 ){

console.log('durante a primeira a primeira aula o professor faz uma pergunta oq é um algoritimo , oq vc responde 1  algoritimo é uma sequências de ações encadeadas para realizar uma tarefa, ')
console.log('2 nao sei , 3 um algoritmo é uma forma de realizar algoma tarefa de maneira mais eficientee ')
var pergunta_pro = prompt('')


}if ( pergunta_pro == 1 )  { 
console.log('  o profesor Thales  responde muito bem ')

}

}
//mais opisoes mais claro 


//resduzir estatus durante a aula 





// diminuir a bateria do celular 

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
 //pasagen de tenpo 
    console.log(' as aulas a cabarao oq vc faz 1 volta pra casa 2 fica e revisa algumas materias ou 3 vai pro o bar  ')
var volta4 = prompt ('')
// desnvlver historia 
}
 

  
  
 
// finais da historia onde vc pode vagalume e ver o batman talves ajudalo 

//faser umtro ciclos 


//final da historia ou vai para o hospital e ve o batman ou vai pra casa sam e salva
    rotina1()

     function  trabalho ( ){ 
       // trabalhpo biblioteca da fucudade denvolver histia eslhas 


     }


    //  final volta pra casa vc pode morrer no camino vc pode se sequestrada levar um tiro ver o batman etc etc 