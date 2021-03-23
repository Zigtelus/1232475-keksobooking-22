import {createFetch, createPostRequest} from './create-fetch.js';
import {createPoints} from './map.js';
import {getCheckin} from './util.js';


const fetchDate = createFetch(
    (card) => {
        createPoints(card);
        getCheckin(card);
    },
    (err) => {
        // console.log(err);
    });
fetchDate();


function createSuccess() {
  const successFragment = document.querySelector('#success').content;

  const main = document.querySelector('main');
  const success = successFragment.querySelector('div');

  let element = success.cloneNode(success);
  let successMessage = element.querySelector('.success__message');

  main.appendChild(element);

  document.addEventListener('keydown', function() {
    if (event.code == 'Escape') {
      element.classList.add('hidden');
    }
});
}




document.querySelector('.ad-form').addEventListener('submit', (evt) => {
  evt.preventDefault();

  createPostRequest(
    new FormData(evt.target),
    () => createSuccess(),
    () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
  );
});
