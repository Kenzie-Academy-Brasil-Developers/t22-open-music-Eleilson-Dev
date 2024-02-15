const createCard = ({ title, genre, band, price, img }) => {
  return `
    <li class="album-card">
      <img
        src="${img}"
        alt="Capa do álbum ${title}"
      />
      <article>
        <header class="card-header">
          <h3 class="card-header-title">${title}</h3>
          <div class="card-header-content">
            <span class="card-header-artista">${band}</span>
            <span class="card-header-album-gender">${genre}</span>
          </div>
        </header>
        <footer class="card-footer">
          <div class="card-footer-content">
            <span>R$ ${price}</span>
            <button type="button">Comprar</button>
          </div>
        </footer>
      </article>
    </li>
  `;
};

export default createCard;
