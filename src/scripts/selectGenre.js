// esse script faz a selecao do gerenero musical com base na preferencia do usuario

const genresHTML = document.querySelectorAll('.genre-Select');
// selectedBtn => Mantém uma referência ao botão atualmente selecionado
let selectedBtn = document.querySelector('.selected');

const selectGenre = (rangeValue) => {
  genresHTML.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (selectedBtn) {
        selectedBtn.classList.remove('selected');
      }
      btn.classList.add('selected');

      // Atualiza a referência ao botão selecionado
      selectedBtn = btn;
    });
  });

  return selectedBtn.value;
};

export default selectGenre;
