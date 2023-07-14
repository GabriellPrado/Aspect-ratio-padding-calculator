function calcularPadding() {
  const larguraInput = document.getElementById('larguraInput');
  const alturaInput = document.getElementById('alturaInput');
  const resultadoPadding = document.getElementById('resultadoPadding');

  const largura = parseFloat(larguraInput.value);
  const altura = parseFloat(alturaInput.value);

  if (isNaN(largura) || isNaN(altura)) {
    resultadoPadding.innerHTML = 'Insira valores válidos para largura e altura.';
  } else {
    const proporcao = (altura / largura) * 100;
    resultadoPadding.innerHTML = `position: relative;<br>width: 100%;<br>padding-bottom: ${proporcao}%;`;
  }
}
