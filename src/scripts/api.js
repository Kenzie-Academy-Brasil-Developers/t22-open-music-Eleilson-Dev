const fetchMusicData = async () => {
  const apiUrl = 'https://openmusic-fake-api.onrender.com/api/musics';

  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};

export default fetchMusicData;
