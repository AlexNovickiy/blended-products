//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { refs } from "./refs";
import {getProductById} from './products-api';
import { renderModal } from "./render-function";

refs.productsList.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

async function toggleModal(event){
    if(event.target.nodeName === 'LI' ){
        return;
    }
   
   
const product = await getProductById(event.target.parentNode.dataset.id);
renderModal(product);
refs.modal.classList.add('is-open');
}