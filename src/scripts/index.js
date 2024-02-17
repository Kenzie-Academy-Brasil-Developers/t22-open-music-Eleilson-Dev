// script global
// esse script serve importar e executar o encadeamento das functions

import changeTheme from './theme.js';
import selectGender from './selectGender.js';
import { updateAlbuns, activeRange } from './inputRange.js';

const routine = () => {
  changeTheme();
  selectGender();
  updateAlbuns();
  activeRange();
};

routine();
