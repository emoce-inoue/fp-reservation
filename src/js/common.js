window.addEventListener('load', () => {
  const loadElms = document.querySelectorAll('.js-load');
  loadElms.forEach((loadElm) => {
    const classes = Array.from(loadElm.classList);

    if (classes[0] !== 'js-load' && !classes[0].startsWith('font-')) {
      loadElm.classList.add(`${classes[0]}--loaded`);
    }

    // 2番目のクラスも 'js-load' でない場合、かつ 'font-' で始まらない場合のみ '--loaded' を追加
    if (classes.length >= 2 && classes[1] !== 'js-load' && !classes[1].startsWith('font-')) {
      loadElm.classList.add(`${classes[1]}--loaded`);
    }
  });
});