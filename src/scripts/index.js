// script global
import { albumList } from './albumsDatabase.js';
import changeTheme from './changeTheme.js';
import activeRange from './inputRange.js';
import createCard from './createCard.js';

const addAlbumIntoList = (albumList) => {
  const albunsListHTML = document.querySelector('.albuns-list');
  albunsListHTML.innerHTML = '';

  albumList.forEach(async (element) => {
    albunsListHTML.innerHTML += createCard(element);
  });
};

const routine = () => {
  changeTheme();
  activeRange();
  addAlbumIntoList(albumList);
};

routine();
