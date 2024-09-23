(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    listlink: document.querySelector('.site-nav-burger-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.listlink.addEventListener('click', handleClickMenulink);
  document.addEventListener('click', handleClickOutside);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function handleClickMenulink(event) {
    if (event.target.tagName === 'A') {
      toggleMenu();
    }
  }

  function handleClickOutside(event) {
    const isClickInside =
      refs.menu.contains(event.target) || refs.openMenuBtn.contains(event.target);

    if (!isClickInside && !refs.menu.classList.contains('is-hidden')) {
      toggleMenu();
    }
  }
})();
