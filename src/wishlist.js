//Логіка сторінки Wishlist
import { fetchAllData, setTotalElements, setTotalPrice } from './js/helpers.js';
import { refs } from './js/refs.js';
import { renderNotFound, renderProducts } from './js/render-function.js';
import { useLocalStorage } from './js/storage.js';
import { CART_KEY, WISHLIST_KEY } from './js/constants.js';





export async function renderData() {
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


renderData()