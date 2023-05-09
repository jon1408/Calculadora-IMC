const calcular = document.getElementById('calcular');

// Função para calcular o IMC
function calcularIMC() {
  const nome = document.getElementById('nome').value;
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const resultado = document.getElementById('resultado');

  // Verificar se os campos estão vazios ou não contêm valores válidos
  if (!nome || isNaN(altura) || isNaN(peso)) {
    resultado.textContent = 'Por favor, preencha todos os campos com valores válidos.';
    return;
  }

  // Calcular o valor do IMC
  const valorIMC = (peso / (altura * altura)).toFixed(1);

  // Determinar a classificação do IMC usando o operador switch
  let classificacao;
  switch (true) {
    case valorIMC <= 18.5:
      classificacao = 'abaixo do peso';
      break;
    case valorIMC <= 24.9:
      classificacao = 'no peso ideal. Parábens!!!';
      break;
    case valorIMC <= 29.9:
      classificacao = 'levemente acima do peso';
      break;
    case valorIMC <= 34.9:
      classificacao = 'com obesidade grau I, é melhor procurar ajuda médica.';
      break;
    case valorIMC <= 39.9:
      classificacao = 'com obesidade grau II (severa), é melhor procurar ajuda médica.';
      break;
    default:
      classificacao = 'com obesidade grau III (mórbida), é melhor procurar ajuda médica.';
  }

  // Exibir o resultado para o usuário
  resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
}

// Adicionar um evento de clique ao botão calcular
calcular.addEventListener('click', calcularIMC);
