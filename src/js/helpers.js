import { useLocalStorage } from './storage.js';

export async function fetchDataById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch id: ${id}`);
  }
  return await response.json();
}

export async function fetchAllData(key) {
  const [products] = useLocalStorage(key)
  try {
    const requests = products.map(id => fetchDataById(id));
    return await Promise.all(requests);
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function getTotalPrice(items) {
  let total = 0;
  if (Array.isArray(items)) {
    items.forEach(product => {
      total += product.price;
    });
  }
  return total;
}

export function setTotalPrice(data) {
  const priceEl = document.querySelector('.cart-summary__value[data-price]');
  priceEl.textContent = '$' + getTotalPrice(data);
}

export function setTotalElements(element,data) {
  element.textContent = data.length;
}

