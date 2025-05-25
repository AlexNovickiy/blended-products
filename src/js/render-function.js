import { refs } from './refs.js';

export function renderCategories(categories, activeCategory) {
  refs.categoriesList.innerHTML = categories
    .map(
      cat =>
        `<li class="categories__item">
          <button class="categories__btn${
            cat === activeCategory ? ' categories__btn--active' : ''
          }" type="button">${cat}</button>
        </li>`
    )
    .join('');
}

export function renderProducts(products) {
  refs.productsList.innerHTML = products
    .map(
      prod =>
        `<li class="products__item" data-id="${prod.id}">
          <img class="products__image" src="${prod.thumbnail}" alt="${prod.title}"/>
          <p class="products__title">${prod.title}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${prod.brand}</p>
          <p class="products__category">Category: ${prod.category}</p>
          <p class="products__price">Price: $${prod.price}</p>
        </li>`
    )
    .join('');
}

export function appendProducts(products) {
  refs.productsList.insertAdjacentHTML(
    'beforeend',
    products
      .map(
        prod =>
          `<li class="products__item" data-id="${prod.id}">
            <img class="products__image" src="${prod.thumbnail}" alt="${prod.title}"/>
            <p class="products__title">${prod.title}</p>
            <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${prod.brand}</p>
            <p class="products__category">Category: ${prod.category}</p>
            <p class="products__price">Price: $${prod.price}</p>
          </li>`
      )
      .join('')
  );
}

export function renderNotFound(show) {
  if (show) refs.notFound.classList.add('not-found--visible');
  else refs.notFound.classList.remove('not-found--visible');
}

export function renderModal( {title, tags, description,
    shippingInformation,
     returnPolicy,
      price,
       images}){
const markup = `<img class="modal-product__img" src="${images[0]}" alt="${tags[0]}" />
<div class="modal-product__content">
  <p class="modal-product__title">${title}</p>
  <ul class="modal-product__tags">${tags}</ul>
  <p class="modal-product__description">${description}</p>
  <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
  <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
  <p class="modal-product__price">Price: ${price}</p>
  <button class="modal-product__buy-btn" type="button">Buy</button>
</div>`

refs.modalProduct.insertAdjacentHTML('beforeend', markup);
}
