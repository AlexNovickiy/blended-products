const BASE_URL = 'https://dummyjson.com';

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export async function fetchProducts({
  category = '',
  page = 1,
  limit = 12,
} = {}) {
  let url;
  if (category && category !== 'All') {
    url = `${BASE_URL}/products/category/${encodeURIComponent(
      category
    )}?limit=${limit}&skip=${(page - 1) * limit}`;
  } else {
    url = `${BASE_URL}/products?limit=${limit}&skip=${(page - 1) * limit}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}
