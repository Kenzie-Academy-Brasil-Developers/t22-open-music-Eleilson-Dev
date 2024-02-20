// script global
// esse script serve importar e executar o encadeamento das functions

import changeTheme from './theme.js';
import { updateAlbuns, activeRange } from './inputRange.js';

const routine = () => {
  changeTheme();
  updateAlbuns();
  activeRange();
};

routine();
