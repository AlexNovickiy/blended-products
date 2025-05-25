import"./assets/styles-BK7AYJoX.js";function l(t,o){let r="";try{const e=localStorage.getItem(t);r=e?JSON.parse(e):o}catch(e){console.error("Error reading data localStorage:",e)}function a(e){try{r=typeof e=="function"?e(r):e,localStorage.setItem(t,JSON.stringify(r))}catch(s){console.error("Error set data to localStorage:",s)}}return[r,a]}const n=document.querySelector(".products"),[c,g]=l();function u({title:t,brand:o,category:r,price:a,images:e}){return`
  <li class="products__item" data-id="">
              <img class="products__image" src="${e[0]}" alt=""/>
              <p class="products__title">${t}</p>
              <p class="products__brand"><span class="products__brand--bold">Brand: ${o}</span></p>
              <p class="products__category">Category: ${r}</p>
              <p class="products__price">Price: $${a}</p>
            </li>`}function i(t){n.innerHTML="";let o="";Array.isArray(t)&&(o=t.map(r=>u(r)).join("")),n.insertAdjacentHTML("afterbegin",o)}function p(t){let o=0;return Array.isArray(t)&&t.forEach(r=>{o+=r.price}),o}function d(){const t=document.querySelector(".cart-summary__value[data-price]");t.textContent=p(c)}function _(){const t=document.querySelector(".cart-summary__value[data-count]");t.textContent=c.length}i(c);d();_();
//# sourceMappingURL=cart.js.map
