// esse script serve exclusivamente para filtrar os albuns com base no valor selecionado do range
// essa function recebe o valor do range como argumento do seu parametro
import { albumList } from './albumsDatabase.js';

const filterAlbuns = (value) => {
  return albumList.filter((album) => {
    return Number(album.price) <= value;
  });
};

export default filterAlbuns;
