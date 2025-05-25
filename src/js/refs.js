
export const refs = {
  // Список категорій
  categoriesList: document.querySelector('.categories'),
  // Список продуктів
  productsList: document.querySelector('.products'),
  // Повідомлення "не знайдено"
  notFound: document.querySelector('.not-found'),
  // Кнопка "Load More" (додається динамічно)
  get loadMoreBtn() {
    return document.querySelector('.load-more-btn');
  },
  // Інпут пошуку (якщо є)
  searchInput: document.querySelector('.search-form__input'), // виправлено селектор
  // Форма пошуку (якщо є)
  searchForm: document.querySelector('.search-form'),
  // Кнопка очищення пошуку (якщо є)
  searchClearBtn: document.querySelector('.search-form__btn-clear'),
  productsList: document.querySelector('.products'),
    modal: document.querySelector('.modal'),
    closeModalBtn: document.querySelector('.modal__close-btn'),
    modalProduct: document.querySelector('.modal-product'),
};

