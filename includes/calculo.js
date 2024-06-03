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