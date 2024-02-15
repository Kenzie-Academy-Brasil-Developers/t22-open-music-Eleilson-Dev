const genresHTML = document.querySelectorAll('.gender-Select');
// selectedBtn => Mantém uma referência ao botão atualmente selecionado
let selectedBtn = document.querySelector('.selected');

const selectGender = () => {
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
};

export default selectGender;
