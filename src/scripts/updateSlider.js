// esse script serve pra atualizar dinamicamente a barra de preenchimento do input Range
const output = document.querySelector('#value');
const updateSlider = (slider, value) => {
  const rangeValue = Math.round(parseFloat(value));
  const numPercent = (value / slider.max) * 100;

  output.innerHTML = `R$ ${rangeValue}`;

  const color = `
    linear-gradient(
      90deg,
      rgb(136, 0, 255) ${numPercent}%,
      rgb(177, 177, 207) ${numPercent}%,
      rgb(177, 177, 207) 100%
    )
  `;

  slider.style.background = color;
};

export default updateSlider;
