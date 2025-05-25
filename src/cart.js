//Логіка сторінки Cart
import { fetchAllData, setTotalElements, setTotalPrice } from './js/helpers.js';
import { refs } from './js/refs.js';
import { renderNotFound, renderProducts } from './js/render-function.js';



const data = await fetchAllData('cart-data');

export function renderData(products) {
  if (Array.isArray(products) && products.length) {
    renderNotFound(false)
    renderProducts(products)
    setTotalPrice(products);
    setTotalElements(refs.cartSummary,products);
  } else {
    renderNotFound(true)
  }
}


renderData(data)