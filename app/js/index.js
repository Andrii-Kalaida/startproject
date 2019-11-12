document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementsByClassName('js-menu')[0];
  const navigation = document.getElementsByClassName('js-navigation')[0];

  button.addEventListener('click', () => {
    button.classList.toggle('-active');
    navigation.classList.toggle('-mobile-active');
  });
});