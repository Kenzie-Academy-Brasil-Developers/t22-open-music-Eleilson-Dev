// esse script serve pra atualizar dinamicamente a barra de preenchimento do input Range
const updateSlider = (slider, value) => {
  const numPercent = (value / slider.max) * 100;

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
