(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const o={categoriesList:document.querySelector(".categories"),productsList:document.querySelector(".products"),notFound:document.querySelector(".not-found"),get loadMoreBtn(){return document.querySelector(".load-more-btn")},searchInput:document.querySelector(".search-form__input"),searchForm:document.querySelector(".search-form"),searchClearBtn:document.querySelector(".search-form__btn-clear"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),cartSummary:document.querySelector(".cart-summary__value[data-count]"),headerCartSummary:document.querySelector(".nav__count[data-cart-count]"),wishlistHeaderSummary:document.querySelector(".nav__count[data-wishlist-count]")};function i(s,e){o.categoriesList.innerHTML=s.map(c=>`<li class="categories__item">
          <button class="categories__btn${c===e?" categories__btn--active":""}" type="button">${c}</button>
        </li>`).join("")}function u(s){o.productsList.innerHTML=s.map(e=>`<li class="products__item" data-id="${e.id}">
          <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
          <p class="products__title">${e.title}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${e.brand}</p>
          <p class="products__category">Category: ${e.category}</p>
          <p class="products__price">Price: $${e.price}</p>
        </li>`).join("")}function l(s){o.productsList.insertAdjacentHTML("beforeend",s.map(e=>`<li class="products__item" data-id="${e.id}">
            <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
            <p class="products__title">${e.title}</p>
            <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${e.brand}</p>
            <p class="products__category">Category: ${e.category}</p>
            <p class="products__price">Price: $${e.price}</p>
          </li>`).join(""))}function d(s){s?o.notFound.classList.add("not-found--visible"):o.notFound.classList.remove("not-found--visible")}const p=12,m="cart-data",_="wishlist-key";export{m as C,p as P,_ as W,u as a,o as b,i as c,l as d,d as r};
//# sourceMappingURL=constants-D-vNJdzF.js.map
