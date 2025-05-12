const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  fetch('https://catfact.ninja/fact')
    .then(resposta)
    .then(dados);
});

function resposta(resp) {
  console.log("fatos sobre gatos");
  return resp.json();
}

function dados(d) {
  console.log(d.fact); 
  // Agora imprime corretamente o fato do gato
}/////const btn = document.getElementById('btn');

//btn.addEventListener('click', function () {
  //fetch('https://catfact.ninja/fact')
    //.then(resposta)
    //.then(dados);
//});

//function resposta(resp) {
  //console.log("fatos sobre gatos");
  //return resp.json();
//}

//function dados(d) {
  //console.log(d.fact);
//}
//const btn = document.getElementById('btn'); 
//btn.addEventListener('click', function(){

//fetch('https://catfact.ninja/fact') 
//.then(resposta{
//    console.log("fatos sobre gatos");
//});
//function resposta(resp){
  //  return resposta.json();
//})
//.then(dados){
  //  function dados(d){

    //}
//}
//};


///////////////btn.addEventListener('click', function () {
 ////////// fetch('https://catfact.ninja/fact')////////////
  ///////////.then(function (resposta) {
    //////////return resposta.json();
  /////////})
///////  .then(function (dados) {
    ///console.log(dados.fact); // apenas exibe no console
  //})
  //.catch(function () {
    //console.log('Erro ao carregar o fato 😿');
  //});
//});////////////////////