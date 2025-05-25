//Логіка сторінки Cart
import { fetchAllData, setTotalElements, setTotalPrice } from './js/helpers.js';
import { refs } from './js/refs.js';
import { renderNotFound, renderProducts } from './js/render-function.js';
import { CART_KEY, WISHLIST_KEY } from './js/constants.js';
import { useLocalStorage } from './js/storage.js';




export async function renderData() {
  const cartData = await fetchAllData(CART_KEY);
  const [wishlistData] = useLocalStorage(WISHLIST_KEY);

  if (Array.isArray(cartData) && cartData.length) {
    renderNotFound(false)
    renderProducts(cartData)
    setTotalPrice(cartData);
    setTotalElements(refs.headerCartSummary,cartData)
    setTotalElements(refs.wishlistHeaderSummary,wishlistData)
    setTotalElements(refs.cartSummary,cartData);
  } else {
    renderNotFound(true)
  }
}

renderData()