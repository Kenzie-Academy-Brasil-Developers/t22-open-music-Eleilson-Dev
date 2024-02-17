// esse script e resposavel por adiconar os albuns na lista com base no parametro de albuns ja filtrados
import createCard from './createCard.js';

const addAlbumIntoList = (albumList) => {
  const albunsListHTML = document.querySelector('.albuns-list');
  albunsListHTML.innerHTML = '';

  albumList.forEach((element) => {
    albunsListHTML.innerHTML += createCard(element);
  });
};

export default addAlbumIntoList;
