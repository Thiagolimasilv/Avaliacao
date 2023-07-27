// Obtém os elementos do DOM
const btnAvaliar = document.getElementById('btnAvaliar');
const resultado = document.getElementById('resultado');

// Adiciona um ouvinte de evento para o botão
btnAvaliar.addEventListener('click', function() {
  // Obtém o nome e a idade do usuário
  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);

  // Verifica se a idade é um número válido
  if (!isNaN(idade)) {
    let faseVida;

    // Define a fase de vida com base na idade
    if (idade <= 11) {
      faseVida = 'Criança';
    } else if (idade <= 20) {
      faseVida = 'Adolescente';
    } else if (idade <= 65) {
      faseVida = 'Adulto';
    } else {
      faseVida = 'Idoso';
    }

    // Exibe o resultado na página
    resultado.textContent = `${nome} você é ${faseVida}.`;
  } else {
    resultado.textContent = 'Por favor, digite uma idade válida.';
  }
});