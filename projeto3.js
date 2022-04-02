var prompt = require('prompt-sync')()
 for (let batman_missao = 0; batman_missao < 2; batman_missao++) {
 console.log(' o batman te solicitou para uma missao vc aceita 1 sim 0 nao')
 batman_missao = prompt()
 if ( batman_missao <= 0 )
 console.log('ele usa suas abilidades de persuasao e insiste ')
 }
let batgirl={    
saude:10,
armas:4,
casaço:10,                                   
forca:9,
golpe:4,
}
let bandido={    
saude:5,
forca:4,
golpe2:1,
};  
function batalha(saude , golpe ){
console.log('vida inimigo - ')   
console.log(  saude  = saude - golpe)
}
function estatos (saude , casaço ){
 console.log('estatos personagen ')   
console.log( saude )
console.log(casaço)
}
//primeira batalha
for (let primeira_missao = 0; primeira_missao < 2; primeira_missao++) {
console.log('derepente no radio da pulicia vc escuta atençao central temos um 10 14 na rua  brownsville numero 10  \n vc vai ate la 1 sim , 0 nao ')
primeira_missao = prompt()
if ( primeira_missao <= 0 )
console.log(' vc tem sertesa q nao vai vai para o local do crime a policia nao vai chegar a tenpo e pessao vao morrer ')}
if( primeira_missao = 2 )
console.log(' quando vc chega ao local vc ve um casal descutindo ele parece nervoso esta com uma faca na mao ela esta com\n  um olho roxo , o suspeito ja tem pasagem pela pulicia por feminicídio')
 console.log(' 1 chega com calma tentando alcamalos ou 0 ataca sem do nen piedade ')
 let casal = prompt('')
    if ( casal <= 0 )
 batalha(bandido.saude , batgirl.golpe ) , console.log(' vc acerta o primeiro soco ele ainda esta meio sonzo qual golpe  vc quer usar 1 ou 2 ')
let casalluta=prompt('')
if( casalluta= 2  || 1)
batalha(bandido.saude , batgirl.golpe )
batalha(bandido.saude , batgirl.golpe ),console.log('vc  acerta mais dois socos ele cai e vc ajuda a garota a pulicia chega é vc vai enbora ')
if(casal = 1 )
console.log('vc conten a situacao ate pucia chegar ')
//segunda parte batalhas genericas diminuir estatus
estatos(saude , casaço)