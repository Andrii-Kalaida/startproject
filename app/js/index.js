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

initPhonesBox();