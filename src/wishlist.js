//Логіка сторінки Wishlist
import {
  fetchAllData,
  filterProducts, renderFilteredData,
  setTotalElements,
  setTotalPrice,
} from './js/helpers.js';
import { refs } from './js/refs.js';
import { renderNotFound, renderProducts } from './js/render-function.js';
import { useLocalStorage } from './js/storage.js';
import { CART_KEY, WISHLIST_KEY } from './js/constants.js';


refs.searchForm.addEventListener('submit',handleSubmitSearchForm);
refs.searchClearBtn.addEventListener('click',handleClearData)

async function handleClearData() {
  const cartData = await fetchAllData(CART_KEY);
  refs.searchInput.value = '';
  renderFilteredData(cartData)
}


async function renderData() {
  const wishlistData = await fetchAllData(WISHLIST_KEY);
  const [cartData] = useLocalStorage(CART_KEY)
  if (Array.isArray(wishlistData) && wishlistData.length) {
    renderNotFound(false)
    renderProducts(wishlistData)

    setTotalElements(refs.headerCartSummary,cartData)
    setTotalElements(refs.wishlistHeaderSummary,wishlistData)
  } else {
    renderNotFound(true)
  }
}

async function handleSubmitSearchForm(e) {
  e.preventDefault()
  const cartData = await fetchAllData(WISHLIST_KEY);
  const searchValue = e.target.elements.searchValue.value;
  if (searchValue.trim()) {
    const filteredProducts = filterProducts(cartData,searchValue);
    renderFilteredData(filteredProducts)
  }
}


renderData()

