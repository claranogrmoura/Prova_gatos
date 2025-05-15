const btn = document.getElementById('btn');

btn.addEventListener('click', Gato) 
function Gato() {
  fetch('https://catfact.ninja/fact')
    .then(resposta)
    .then(dados);
   .catch(erro);
}

function resposta(resp) {
  console.log("fatos sobre gatos");
  return resp.json();
}

function dados(d) {
  console.log(d.fact); 
 
}
function erro(Erro) {
  console.error("Ocorreu um erro ao buscar os dados:", Erro);
}
