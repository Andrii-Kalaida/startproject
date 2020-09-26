function handlePhoneBox(block) {
  const button = block.getElementsByClassName('js-arrow')[0];
  const box = block.getElementsByClassName('js-list')[0];
  
  button.addEventListener('click', () => {
    box.classList.add('-show');
  });

  box.addEventListener('mouseleave', () => {
    box.classList.remove('-show');
  });
}

function initPhonesBox() {
  const blockComponents = [...document.getElementsByClassName('js-phones-box-component')];

  if (!blockComponents.length) {
    return;
  }

  blockComponents.forEach(block => {
    handlePhoneBox(block);
  })
}


// search
function handleSearch() {
  const search = document.getElementsByClassName('js-search')[0];
  const input = document.getElementsByClassName('js-search-input')[0];
  const activeClass = 'navigation__search--active';

  input.addEventListener('focus', () => {
    search.classList.add(activeClass);
  });

  input.addEventListener('blur', (e) => {
    if (!e.target.value) {
      search.classList.remove(activeClass);
    }
  });
}
//search end

window.addEventListener('load', () => {
  initPhonesBox();
  handleSearch();
})
