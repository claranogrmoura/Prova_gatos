const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', fact2)

btn.addEventListener('click', Gato) 
function Gato() {
  fetch('https://catfact.ninja/fact')
    .then(resposta)
    .then(dados);
  
}

function resposta(resp) {
  console.log("fatos sobre gatos");
  return resp.json();
}

function dados(d) {
  console.log(d.fact); 
 
}
 function fact2(){
  fetch('main.php') .then(response => response.json()) .then(data => console.log(data))
  console.clear()
 }