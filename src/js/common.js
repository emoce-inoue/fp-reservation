window.addEventListener('load', () => {
  const loadElms = document.querySelectorAll('.js-load');
  loadElms.forEach((loadElm) => {
    const classes = Array.from(loadElm.classList);

    const targetClass = classes.find((className) => className !== 'js-load');

    if (targetClass) {
      loadElm.classList.add(`${targetClass}--loaded`);
    }
  });
});
