//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

import { refs } from "./refs";

refs.productsList.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(){
    modal.classList.toggle('is-open');
}