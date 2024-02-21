// esse script serve exclusivamente para filtrar os albuns com base no valor selecionado do range
// essa function recebe o valor do range como argumento do seu parametro
import addAlbumIntoList from './addAlbumIntoList.js';
import fetchMusicData from './api.js';

const filterAlbuns = async (value, genre) => {
  const loading = document.querySelector('.main__loading');
  const albunsList = document.querySelector('.albuns-list');

  try {
    const data = await fetchMusicData();
    const filteredAlbuns = data.filter((album) => {
      if (genre === 'Todos') {
        return Number(album.price) <= value;
      }

      return album.genre === genre && Number(album.price) <= value;
    });

    if (data) {
      loading.style.display = 'none';
      albunsList.style.display = 'flex';
    }

    addAlbumIntoList(filteredAlbuns);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

export default filterAlbuns;
