
// Функції для роботи з бекендом
export async function getProductById(id){
    const url = `${BASE_URL}/${id}`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Продукт з ID=${id} не знайдено`);  
        }
        return await response.json();
    }catch (error){
        iziToast.error({
            message: `Продукт з ID=${id} не знайдено`,
            position: 'topRight',
            timeout: 2000,
            backgroundColor: '#ffa000',
          });
          throw error;
    }
}

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

