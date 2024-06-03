// ... (seu código JavaScript existente)

// Verifica se o modal de novidades já foi exibido
function verificarModalNovidadesExibido() {
    return document.cookie.split('; ').some(cookie => cookie.startsWith('modalNovidadesExibido='));
  }
  
  // Função para exibir o modal de novidades
  function mostrarModalNovidades() {
    if (!verificarModalNovidadesExibido()) {
      const novidadesModal = new bootstrap.Modal(document.getElementById('novidadesModal'));
      novidadesModal.show();
    }
  }
  
  // Função para lidar com o botão "Que legal!"
  function entendiNovidades() {
    document.cookie = "modalNovidadesExibido=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }
  
  // Função para lidar com o botão "Ver depois" (não faz nada)
  function verDepoisNovidades() {
    // Não é necessário fazer nada aqui, pois o cookie não será definido
  }
  
  // Exibir o modal ao carregar a página
  document.addEventListener('DOMContentLoaded', mostrarModalNovidades);


  function calcularNota() {
    const acertos = parseFloat(document.getElementById('acertos').value);
    const questoes = parseFloat(document.getElementById('questoes').value);
  
    if (acertos >= 0 && questoes > 0) {
      const nota = (acertos / questoes) * 10;
      document.getElementById('resultadoCalculo').textContent = `Nota: ${nota.toFixed(2)}`;
    } else {
      document.getElementById('resultadoCalculo').textContent = "Valores inválidos";
    }
  }