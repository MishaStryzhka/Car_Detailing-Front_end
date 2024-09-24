document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  const lastSegment = currentPath.split('/').pop();

  const languageLinks = document.querySelectorAll('.wrap-languages a');
  const languageMenuLinks = document.querySelectorAll('.language-list a');

  languageLinks.forEach(link => {
    const baseHref = link.getAttribute('href');
    if (currentPath === baseHref + lastSegment) {
      link.classList.add('active');
      return;
    }

    link.setAttribute('href', baseHref + lastSegment);
  });

  languageMenuLinks.forEach(link => {
    const baseHref = link.getAttribute('href');
    if (currentPath === baseHref + lastSegment) {
      link.classList.add('active');
      return;
    }

    link.setAttribute('href', baseHref + lastSegment);
  });
});
