import {types} from './util.js';

let centerCity = {
  lat: 35.685,
  lng: 139.7514,
}

const noticeAddress = document.querySelector('#address');
const noticeTitle = document.querySelector('#title');
const noticePrice = document.querySelector('#price');
const noticeType = document.querySelector('#type');

const noticeElementTimeAll = document.querySelectorAll('.ad-form__element--time select');
const noticeTimein = document.querySelector('#timein');
const noticeTimeinAll = document.querySelectorAll('#timein option');
const noticeTimeout = document.querySelector('#timeout');
const noticeTimeoutAll = document.querySelectorAll('#timeout option');

const noticeRoomNumber = document.querySelector('#room_number');
const noticeRoomNumberAll = document.querySelectorAll('#room_number option');
const noticeCapacity = document.querySelector('#capacity');
const noticeCapacityAll = document.querySelectorAll('#capacity option');

noticeAddress.value = centerCity.lat + ', ' + centerCity.lng;
noticeAddress.disabled = true;

noticeTitle.setAttribute('minlength', '30');
noticeTitle.setAttribute('maxlength', '100');
noticeTitle.required = true;

noticePrice.required = true;
noticePrice.setAttribute('maxlength', '1000000');

function findMinPrice() {
  const minPrices = ['0', '1000', '5000', '10000']
  for (let i = 0; i < types.length; i++){
    if (noticeType.value == types[i]) {
      noticePrice.setAttribute('min', minPrices[i])
      noticePrice.setAttribute('placeholder', minPrices[i]);
    }
  }
}
findMinPrice()

noticeType.addEventListener('click', function() {
  findMinPrice()
})


function findNoticeTimein(first, second, third) {
  for (let i = 0; i < noticeTimein.length; i++){
    if (second.value == third[i].value) {
      first[i].selected = true
    }
  }
}
findNoticeTimein(noticeTimeoutAll, noticeTimein, noticeTimeinAll)

for (let u = 0; u < noticeElementTimeAll.length; u++) {
  noticeElementTimeAll[u].addEventListener('click', function() {
    if (u === 0) {
      findNoticeTimein(noticeTimeoutAll, noticeTimein, noticeTimeinAll)
    } else {
      findNoticeTimein(noticeTimeinAll, noticeTimeout, noticeTimeoutAll)
    }
  })
}

function findNoticeCapacity() {
  for (let i = 0; i < noticeRoomNumber.length; i++) {
      if (
        noticeRoomNumber.value == noticeCapacityAll[i].textContent[4] &&
        noticeRoomNumber.value < 100
      ) {
        for (let j = 0; j < noticeRoomNumber.length; j++) {
          if (
            noticeCapacityAll[i].textContent[4] >= noticeCapacityAll[j].textContent[4]
          ) {
            noticeCapacityAll[j].disabled = false
            noticeCapacityAll[j].selected = true
          } else {
            noticeCapacityAll[j].disabled = true
          }
        }
      }

      if (noticeRoomNumber.value === '100') {
        noticeCapacityAll[i].disabled = true;
        noticeCapacityAll[noticeCapacityAll.length -1].disabled = false
        noticeCapacityAll[noticeCapacityAll.length -1].selected = true
      }

    }

}
findNoticeCapacity()

noticeRoomNumber.addEventListener('click', function() {
  findNoticeCapacity()
})




export {centerCity, noticeAddress};

