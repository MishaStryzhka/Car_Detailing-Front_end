(() => {
  function setupLanguageToggle(version) {
    const refs = {
      openListBtn: document.querySelector(`[data-language-toggle="${version}"]`),
      list: document.querySelector(`[data-language-list="${version}"]`),
      arrow: document.querySelector(`[data-arrow="${version}"]`),
    };

    if (refs.openListBtn && refs.list && refs.arrow) {
      refs.openListBtn.addEventListener('click', () => {
        toggleMenu(refs);
      });
    } else {
      console.error(`Елементи не знайдені для версії: ${version}`, refs);
    }
  }

  function toggleMenu(refs) {
    refs.list.classList.toggle('hidden');
    refs.arrow.classList.toggle('rotate');
  }

  // Налаштування для десктопної та мобільної версій
  setupLanguageToggle('desktop');
  setupLanguageToggle('burger');
})();
