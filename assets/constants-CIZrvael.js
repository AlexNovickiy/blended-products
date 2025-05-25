(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const s={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),notFound:document.querySelector(".not-found"),get loadMoreBtn(){return document.querySelector(".load-more-btn")},searchInput:document.querySelector(".search-form__input"),searchForm:document.querySelector(".search-form"),searchClearBtn:document.querySelector(".search-form__btn-clear"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),cartSummary:document.querySelector(".cart-summary__value[data-count]"),headerCartSummary:document.querySelector(".nav__count[data-cart-count]"),wishlistHeaderSummary:document.querySelector(".nav__count[data-wishlist-count]")};function u(o,t){s.categoriesList.innerHTML=o.map(c=>`<li class="categories__item">
          <button class="categories__btn${c===t?" categories__btn--active":""}" type="button">${c}</button>
        </li>`).join("")}function l(o){s.productsList.innerHTML=o.map(t=>`<li class="products__item" data-id="${t.id}">
          <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
          <p class="products__title">${t.title}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${t.brand}</p>
          <p class="products__category">Category: ${t.category}</p>
          <p class="products__price">Price: $${t.price}</p>
        </li>`).join("")}function d(o){s.productsList.insertAdjacentHTML("beforeend",o.map(t=>`<li class="products__item" data-id="${t.id}">
            <img class="products__image" src="${t.thumbnail}" alt="${t.title}"/>
            <p class="products__title">${t.title}</p>
            <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${t.brand}</p>
            <p class="products__category">Category: ${t.category}</p>
            <p class="products__price">Price: $${t.price}</p>
          </li>`).join(""))}function p(o){o?s.notFound.classList.add("not-found--visible"):s.notFound.classList.remove("not-found--visible")}function _({title:o,tags:t,description:c,shippingInformation:n,returnPolicy:e,price:r,images:a}){const i=`<img class="modal-product__img" src="${a[0]}" alt="${t[0]}" />
<div class="modal-product__content">
  <p class="modal-product__title">${o}</p>
  <ul class="modal-product__tags">${t}</ul>
  <p class="modal-product__description">${c}</p>
  <p class="modal-product__shipping-information">Shipping: ${n}</p>
  <p class="modal-product__return-policy">Return Policy: ${e}</p>
  <p class="modal-product__price">Price: ${r}</p>
  <button class="modal-product__buy-btn" type="button">Buy</button>
</div>`;s.modalProduct.insertAdjacentHTML("beforeend",i)}const m=12,f="cart-data",y="wishlist-key";export{f as C,m as P,y as W,p as a,l as b,u as c,d,_ as e,s as r};
//# sourceMappingURL=constants-CIZrvael.js.map
