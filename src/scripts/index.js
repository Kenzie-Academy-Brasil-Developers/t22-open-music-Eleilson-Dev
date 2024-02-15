// script global
import { albumList } from './albumsDatabase.js';
import changeTheme from './changeTheme.js';
import selectGender from './selectGender.js';
import activeRange from './inputRange.js';
import createCard from './createCard.js';

const addAlbumIntoList = (albumList) => {
  const albunsListHTML = document.querySelector('.albuns-list');
  albunsListHTML.innerHTML = '';

  albumList.forEach((element) => {
    albunsListHTML.innerHTML += createCard(element);
  });
};

const routine = () => {
  changeTheme();
  selectGender();
  activeRange();
  addAlbumIntoList(albumList);
};

routine();
