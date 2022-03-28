
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
      
    var manha = prompt(' 7  horas o despertador toca vc acorda1  ? ou dormi mas um pouco 2')
    var cafe = prompt ('para o cafe vc tem  cafe e toradas1 ou baicom com ovos2  ')
    var ir_tabalhar = prompt ('sao 8 da mannha vc tem q ir ao trabalho  1 vc  pode ir de moto ou  2 vc pode pegar carona com oseu pai ')


    var bliblioteca = prompt ('vc chega apo trabalho as 9 e 14 oxq vc faz o cafe1 ou organisa os arquivos2 ')
    console.log (' o tenpo passa de vagar as pessoas entao e sain , vc comversa com alguns amigos ')


 if (manha == 1) {
  console.log (' ao acordar vc ve seu pai preparando um Café Irlandês meio apresado ')



 }else if (manha ==  2 )  { 
var atrso = prompt('se passa uma hora vc corda com as ligacoes do trabalho 1oq vc faz corre para o trabalho sem comer , 2 pega um pao  e corre para a sua moto ')


 }if ( ir_tabalhar == 1    ){   
console.log( ' vc se atrasa um pouco mas chega a blioteca ')



 }if (ir_tabalhar == 2       ) { 
console.log (' quando vc fala com o gordom ele recebe uma ligaccao urgemte e sai sem te responder  , ')
console.log (' vc chega a sua moto uma  durante a viagen a sua moto trava o pedal de canbio vc consegue evitar um asidenti q vc faz 1 tenta conccertar ou 2 liga para o dick ')
var moto_quebada = prompt('')

console.log('vc reslove ligar para o dick  ele chega é em 5 minutos resolve o problema , vc chega ao trabalho atrasada   45  minutos ')

 }
                

}

function rotina2 ( ) {
var sai_tranpo = console.log(' agora sao 9 horas , 1 vc tem alguns docmentos novos para organisar , alguns livros  novos para catalogar ç   ')
var faculdade = console.log(' depdo de  algum tenpo vc temina as suas atividades    oq vc faz agora 1pega um cafe  , ou 2 adianta a materia da facudade ')
var dick = prompt('')
if ( dick  ==1   ){
console.log('vc rebe uma mensagen 1 vc olha 2 nao ')

}else if ( dick == 2 ){
casaço - 1 
console.log(' durante os estudos vc coxilou , vc acorda com o demina ti encarando , te da um sanduiche , \ne diz  quer tem motrar uma coisa ,  vc sabe q provavelmente é mintira . 1 vc entra no jogo dele 2 vc espulsa ele como senpre ')
}
console.log(' vc tem q estar na faculdade as 5 \n quando vc acabade comer algumas pessoas chegam vc vai falar com eles , e ti dao uma lista de livros 1984, de George Orwell\nO Lobo da Estepe \n Dom Casmurro\n meu desfruto \n cem chances')
console.log('algus vao enbora ficam apenas 2  , 1 vc se senta com eles ou 2 volta ao trabalho    ')
var blibliotra  = prompt ('')
console.log(' vc se destrai com a cconversa e esquece da facudade as 5 horas vc olha noa celular e ja sao 4 34       ')
// diminuir a bateria do celular 
}
//confrito da historia q define se vc vai ver o batman ou nao 


function facudade ( ) {  
console.log(` hoje vc essas aulas Algoritmos e Programação, 
Análise e Projeto de Algoritmos,
Análise e Projeto de Software,
Arquitetura e Organização de Computadores I,
Arquitetura e Organização de Computadores II,
Banco de Dados I,
Banco de Dados II, 
Circuitos Digitais`)
     console.log('vc sai da faculdade cansanda sao 11 e meai da noite  , muita cansanda vc qur sair da faculdade mas um grupo te pedi ajuda para estudar ' )
  console.log(' muito cansada depois das aulas oq vc faz 1 vai sosinah ou 2 pede carona 2 ou 3 oferece cara para alguem ')   
var voltarcasa1 = prompt('')

// diminuir istatos 


}


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
