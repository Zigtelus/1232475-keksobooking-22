import {getFeatures, getPhotos, getDescription, createOffers} from './data.js';
import {createCard} from './create-card.js';
import {createFetch} from './create-fetch.js';

const fetchAnimals = createFetch(
    (animals) => {
        console.log('start');
        console.log(animals);
        console.log('finish');
    },
    (err) => {
        console.log(err);
    });

fetchAnimals();
