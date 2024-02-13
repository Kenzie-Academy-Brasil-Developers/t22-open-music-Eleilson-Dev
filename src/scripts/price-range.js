const slider = document.querySelector('#price-range');
const output = document.querySelector('#value');

const updateSlider = () => {
  const value = parseFloat(slider.value);
  const displayValue = Math.round(value);

  const x = (value / slider.max) * 100;

  const color = `
    linear-gradient(
      90deg,
      rgb(136, 0, 255) ${x}%,
      rgb(177, 177, 207) ${x}%,
      rgb(177, 177, 207) 100%
    )
  `;

  output.innerHTML = `R$ ${displayValue}`;

  slider.style.background = color;
};

updateSlider();

const activeRange = () => {
  slider.addEventListener('input', updateSlider);
};

export default activeRange;
