function calcularPadding() {
    const larguraInput = document.getElementById('larguraInput');
    const alturaInput = document.getElementById('alturaInput');
    const resultadoPadding = document.getElementById('resultadoPadding');
  
    const largura = parseFloat(larguraInput.value);
    const altura = parseFloat(alturaInput.value);
  
    if (isNaN(largura) || isNaN(altura)) {
      resultadoPadding.textContent = 'Insira valores válidos para largura e altura.';
    } else {
      const proporcao = (altura / largura) * 100;
      resultadoPadding.textContent = `position: relative;<br>padding-bottom: ${proporcao}%;`;
    }
}
