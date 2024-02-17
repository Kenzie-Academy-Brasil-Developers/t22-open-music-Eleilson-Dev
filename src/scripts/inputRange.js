// esse script é responsavel por atulizar a lista de albuns com base no valor do input Range

import updateSlider from './updateSlider.js';
import filterAlbuns from './filterAlbuns.js';
import addAlbumIntoList from './addAlbumIntoList.js';

const slider = document.querySelector('#price-range');
const output = document.querySelector('#value');

export const updateAlbuns = () => {
  const value = parseFloat(slider.value);
  const rangeValue = Math.round(value);

  output.innerHTML = `R$ ${rangeValue}`;

  const albunsFiltered = filterAlbuns(rangeValue);

  updateSlider(slider, value);
  addAlbumIntoList(albunsFiltered);
};

export const activeRange = () => {
  slider.addEventListener('input', updateAlbuns);
};
