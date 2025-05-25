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