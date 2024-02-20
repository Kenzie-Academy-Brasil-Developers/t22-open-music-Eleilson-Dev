// esse script é responsavel por atulizar a lista de albuns com base no valor do input Range

import updateSlider from './updateSlider.js';
import filterAlbuns from './filterAlbuns.js';
import selectGenre from './selectGenre.js';

const slider = document.querySelector('#price-range');

export const updateAlbuns = () => {
  const value = parseFloat(slider.value);
  const rangeValue = Math.round(value);

  const currentGenre = selectGenre(rangeValue);

  filterAlbuns(rangeValue, currentGenre);
};

export const activeRange = () => {
  updateSlider(slider, slider.value);

  slider.addEventListener('change', updateAlbuns);
  slider.addEventListener('input', () => {
    updateSlider(slider, slider.value);
  });
};
