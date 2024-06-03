
function carregarDados() {
  const cookies = document.cookie.split('; ');
  const dados = {};

  for (const cookie of cookies) {
    const [nome, valor] = cookie.split('=');
    dados[nome] = valor;
  }

  for (const campoId in dados) {
    const elemento = document.getElementById(campoId);
    if (elemento) {
      elemento.value = dados[campoId];
    }
  }
}

function salvarDados() {
  const campos = ['mediaIBC', 'nota1Anatomia', 'nota1Histologia', 'nota2Anatomia', 'nota2Histologia', 'cognitiva1', 'cognitiva2', 'formativa'];

  for (const campoId of campos) {
    const elemento = document.getElementById(campoId);
    if (elemento) {
      console.log(`Salvando cookie: ${campoId}=${elemento.value}`); // Adicione esta linha
      document.cookie = `${campoId}=${elemento.value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`; 
    }
  }
}

// Carregar dados ao iniciar
window.onload = carregarDados;

// Salvar dados ao alterar os campos de entrada (oninput)
const camposInput = document.querySelectorAll('input[type="number"]');
camposInput.forEach(campo => {
  campo.addEventListener('input', salvarDados);
});

const clearButtons = document.querySelectorAll('.btn-clear');

clearButtons.forEach(button => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling; // Obtém o input anterior ao botão
    input.value = ''; // Limpa o valor do input
  });
});
