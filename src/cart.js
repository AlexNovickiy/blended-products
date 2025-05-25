//Логіка сторінки Cart
import { useLocalStorage } from './js/storage.js';

const menu = document.querySelector('.products');




const [products,setProducts] = useLocalStorage();

function cardMarkup({title,brand,category,price,images}) {
  return `
  <li class="products__item" data-id="">
              <img class="products__image" src="${images[0]}" alt=""/>
              <p class="products__title">${title}</p>
              <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
              <p class="products__category">Category: ${category}</p>
              <p class="products__price">Price: $${price}</p>
            </li>`
}


function createMarkup(items) {
  menu.innerHTML = '';
  let markup = '';
  if (Array.isArray(items)) {
    markup = items.map(product => cardMarkup(product)).join('');
  }
  menu.insertAdjacentHTML('afterbegin', markup);
}

function getTotalPrice(items) {
  let total = 0;
  if (Array.isArray(items)) {
    items.forEach(product => {
      total+= product.price;
    })
  }
  return total;
}

function setTotalPrice() {
  const priceEl = document.querySelector('.cart-summary__value[data-price]');
  priceEl.textContent = getTotalPrice(products)
}
function setTotalElements() {
  const totalEl = document.querySelector('.cart-summary__value[data-count]');
  totalEl.textContent = products.length
}



createMarkup(products)
setTotalPrice();
setTotalElements()

