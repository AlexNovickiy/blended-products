//Логіка сторінки Cart
import {
  fetchAllData, filterProducts, renderFilteredData,
  setTotalElements,
  setTotalPrice,
} from './js/helpers.js';
import { refs } from './js/refs.js';
import { renderNotFound, renderProducts } from './js/render-function.js';
import { CART_KEY, WISHLIST_KEY } from './js/constants.js';
import { useLocalStorage } from './js/storage.js';

refs.searchForm.addEventListener('submit', handleSubmitSearchForm);
refs.searchClearBtn.addEventListener('click', handleClearData);

async function handleClearData() {
  const cartData = await fetchAllData(CART_KEY);
  refs.searchInput.value = '';
  renderFilteredData(cartData);
}

async function renderData() {
  const cartData = await fetchAllData(CART_KEY);
  const [wishlistData] = useLocalStorage(WISHLIST_KEY);

  if (Array.isArray(cartData) && cartData.length) {
    renderNotFound(false);
    renderProducts(cartData);
    setTotalPrice(cartData);
    setTotalElements(refs.headerCartSummary, cartData);
    setTotalElements(refs.wishlistHeaderSummary, wishlistData);
    setTotalElements(refs.cartSummary, cartData);
  } else {
    renderNotFound(true);
  }
}

async function handleSubmitSearchForm(e) {
  e.preventDefault();
  const cartData = await fetchAllData(CART_KEY);
  const searchValue = e.target.elements.searchValue.value;
  if (searchValue.trim()) {
    const filteredProducts = filterProducts(cartData, searchValue);
    renderFilteredData(filteredProducts);
  }
}

renderData();


