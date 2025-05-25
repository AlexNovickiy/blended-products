import iziToast from 'izitoast';
import { fetchCategories, fetchProducts } from './products-api.js';
import {
  renderCategories,
  renderProducts,
  appendProducts,
  renderNotFound,
} from './render-function.js';
import { refs } from './refs.js';
import { PRODUCTS_PER_PAGE } from './constants.js';

let currentCategory = 'All';
let currentPage = 1;
let totalProducts = 0;

export async function onHomeLoad() {
  try {
    let categories = await fetchCategories();
    categories = ['All', ...categories];
    renderCategories(categories, currentCategory);
    refs.categoriesList.addEventListener('click', onCategoryClick);
    loadProducts();
  } catch (e) {
    iziToast.error({ message: 'Не вдалося завантажити категорії' });
  }
}

async function loadProducts(reset = true) {
  try {
    if (reset) {
      currentPage = 1;
      refs.productsList.innerHTML = '';
    }
    const { products, total } = await fetchProducts({
      category: currentCategory,
      page: currentPage,
      limit: PRODUCTS_PER_PAGE,
    });
    totalProducts = total;

    if (reset) renderProducts(products);
    else appendProducts(products);

    renderNotFound(!products.length);

    if (refs.loadMoreBtn) {
      refs.loadMoreBtn.style.display =
        currentPage * PRODUCTS_PER_PAGE < totalProducts ? '' : 'none';
      refs.loadMoreBtn.onclick = onLoadMoreClick;
    } else if (currentPage * PRODUCTS_PER_PAGE < totalProducts) {
      const btn = document.createElement('button');
      btn.textContent = 'Load More';
      btn.className = 'load-more-btn';
      refs.productsList.after(btn);
      btn.onclick = onLoadMoreClick;
    }
  } catch (e) {
    iziToast.error({ message: 'Не вдалося завантажити продукти' });
  }
}

function onCategoryClick(e) {
  if (!e.target.classList.contains('categories__btn')) return;
  currentCategory = e.target.textContent;
  renderCategories(
    [...refs.categoriesList.querySelectorAll('.categories__btn')].map(
      btn => btn.textContent
    ),
    currentCategory
  );
  loadProducts(true);
}

function onLoadMoreClick() {
  currentPage += 1;
  loadProducts(false);
}
