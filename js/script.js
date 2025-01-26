// const modal = document.querySelector('.backdrop'); 
// const closeModalBtn = document.querySelector('.modal-close-btn'); 

// // Добавляем событие клика для кнопки
// closeModalBtn
// closeModalBtn

// close
// addEventListener('click', () => {
//   modal.
  
// classList.remove('is-open'); // Убираем класс и скрываем окно
// });

const menuBtns = document.querySelectorAll('.modal-close-btn');
const menuEl = document.querySelector('.backdrop');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuEl.classList.toggle('is-open');
  });
});
