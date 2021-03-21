import {createCard} from './create-card.js';
import {createFetch} from './create-fetch.js';
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
