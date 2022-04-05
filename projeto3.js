var prompt = require('prompt-sync')()
let batman_missao = '0 '
let batman_missao1 ='1' 
 while ( batman_missao1  > batman_missao  ++) {
 console.log(' o batman te solicitou para uma missao vc aceita 1 sim 0 nao')
 batman_missao = prompt()
 if ( batman_missao <= 0 )
 console.log('ele usa suas abilidades de persuasao e insiste ')
 }
let batgirl={    
saude:10,
casaço:10,                                   
forca:9,
golpe:4,
}
let bandido={    
saude:5,
forca:4,
golpe2:1,
facada:2,
tiro:4,
}
function babs_cansada ( ){   
let cansada = batgirl.casaço -= 1 
console.log( ` ${cansada } vc nuito cansada `  )
}

function bandido_aleatorio(){
let lista = [bandido.facada, bandido.tiro, bandido.golpe2 ];
 let dano = lista = [Math.floor(Math.random()* 3)];
 console.log(batgirl.saude-=dano)
}
function bandido_estatus(batgirlgolpe , bandidosaude){
 console.log(bandido.saude-batgirl, )
}
function batalha(saude , golpe ){
console.log(  saude = saude- golpe)
}
function estatos (saude , casaço ){
 console.log('estatos personagen ')   
console.log( saude ),console.log('vida')
console.log(casaço ),console.log('energia')
}

babs_cansada();
babs_cansada();
 babs_cansada();
estatos(batgirl.saude ,batgirl.casaço,console.log('vida e estamina batgirl'))
let missao = '0'
let primeira_missao = '1'
while (  primeira_missao <  missao ++) {//aq eu estava usando um for ao enves do while
console.log('derepente no radio da pulicia vc escuta atençao central temos um 10 14 na rua  brownsville numero 10  \n vc vai ate la 1 sim , 0 nao ')
primeira_missao = prompt()
if ( primeira_missao <= 0 )
console.log(' vc tem sertesa q nao vai vai para o local do crime a policia nao vai chegar a tenpo e pessao vao morrer ')}
if( primeira_missao = 2 )
console.log(' quando vc chega ao local vc ve um casal descutindo ele parece nervoso esta com uma faca na mao ela esta com\n  um olho roxo , o suspeito ja tem pasagem pela pulicia por feminicídio')
 console.log(' 1 chega com calma tentando alcamalos ou 0 ataca sem do nen piedade ')
 let casal = prompt('')
 if ( casal = 0 ){
 console.log(` vc acerta o primeiro soco ele ainda esta meio sonzo qual golpe  vc quer usar 1 ou 2 `), console.log(' sua energia atual é '),babs_cansada();
 let briga = prompt()
}else if (casal = 1 )
 console.log('vc conten a situacao ate a pulicia chegar ')
else if( briga = 2 || 1 )
  batalha(bandido.saude , batgirl.golpe ),console.log('vc  acerta mais dois socos ele cai e vc ajuda a garota a pulicia chega é vc vai enbora ')
  // repitir apartir da aq com o for 

  //repitir com while
 function proximo1 ( saude , golpe , casaço, gope2 ){
console.log('mais uma hora se pasa  agora sao 00 da noite é o radio taca  mais uma vez , vc vai te o local \n  1 sim 2 nao ')
let chamado_alternativo2 = prompt()
if ( chamado_alternativo2 == 1 )
console.log(` vc chega ao local é encontra  3 inimigos vc os enfrenta sua vida atual é`),bandido_aleatorio(), console.log(' sua energia atual é '),babs_cansada();
if ( chamado_alternativo2 = 2 )
uma_da_manha()
 }
 uma_da_manha
function uma_da_manha( ){
  if( chamado_alternativo2 = 2  )
 console.log('mais uma hora se pasa  agora sao 1 da manha da noite é o radio taca  mais uma vez , vc vai te o local \n  1 sim 2 nao ')
 let chamado_alternativo3 = prompt()
 if ( chamado_alternativo3 == 1 )
 console.log(` vc chega ao local é encontra  7 inimigos vc os enfrenta sua vida atual `),bandido_aleatorio() , console.log( 'vc sai com alguns ferrimentos '), console.log(' sua energia atual é '),babs_cansada();
}
console.log(`mais uma hora se passa  agora sao 11 da noite é o radio taca , vc vai te o local \n  1 sim 2 nao `)
let chamado2 = prompt()
  if ( chamado2 = 1 )
console.log( `sua energia atual é  vc encontra 5 inimigos e os enfrentas sua vida atual é ` ),bandido_aleatorio(), console.log(' sua energia atual é '),babs_cansada();
  if (chamado2 = 2 )
proximo1()
if ( batgirl.casaço = 4 )
console.log( 'vc  dismai é o alfre te resgata  ')


// terminar pergunta para repitir com o for 

//if - cançaso  