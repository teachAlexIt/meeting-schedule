let store = [];

import { fetchDishesList } from "./getData.js";

// Вызываем функцию fetchDishesList и обрабатываем возвращаемый Promise
fetchDishesList()
  .then(dishesList => {
    // Когда Promise разрешается, мы получаем массив dishesList
    // Выводим массив объектов блюд в консоль для проверки
    store = dishesList;
    console.log(store);
    render(store);
    setTimeout(() => {
      document.querySelector('.loader').classList.add('loader_hide');
    }, 1000);
  })
  .catch(error => {
    // Если Promise отклоняется, выводим ошибку в консоль
    console.error('Ошибка при получении списка блюд:', error);
  });
//   return `
//   <li>
//     <h6>${skillItem.title}</h6>
//     <span>${skillItem.description}</span>
//     <span class="name" name="${skillItem.name}">${skillItem.name}</span>
//   </li>
// `;


function skillsListHTML(storeItemInfo) {
  const skillsNumbers = ['weekdaySkillsTitle1', 'weekdaySkillsTitle2', 'weekdaySkillsTitle3', 'weekdaySkillsTitle4'];
  return skillsNumbers.map((item, index) => { // Возвращаем значение
    if (item in storeItemInfo) {
      if (storeItemInfo[item] !== '') {
        const keyTitle = `weekdaySkillsTitle${index + 1}`;
        const keyDescription = `weekdaySkillsDescription${index + 1}`;
        const keyName = `weekdaySkillsName${index + 1}`;
        return `
          <li>
            <h6>${storeItemInfo[keyTitle]}</h6>
            <span>${storeItemInfo[keyDescription]}</span>
            <span class="name" name="${storeItemInfo[keyName]}">${storeItemInfo[keyName]}</span>
          </li>
        `;
      }
    }
    return ''; // Если ключ отсутствует, вернём пустую строку
  }).join(''); // Соединяем элементы массива в строку
}


function liveListHTML(storeItemInfo) {
  const liveNumbers = ['weekdayLiveTitle1', 'weekdayLiveTitle2', 'weekdayLiveTitle3'];
  return liveNumbers.map((item, index) => { // Возвращаем значение
    if (item in storeItemInfo) {
      if (storeItemInfo[item] !== ''){
      const keyTitle = `weekdayLiveTitle${index + 1}`;
      const keyDescription = `weekdayLiveDescription${index + 1}`;
      const keyName = `weekdayLiveName${index + 1}`;
      return `
        <li>
          <h6>${storeItemInfo[keyTitle]}</h6>
          <span>${storeItemInfo[keyDescription]}</span>
          <span class="name" name="${storeItemInfo[keyName]}">${storeItemInfo[keyName]}</span>
        </li>
      `;
      }
    }
    return ''; // Если ключ отсутствует, вернём пустую строку
  }).join(''); // Соединяем элементы массива в строку
}

function formatDateToDayAndMonth(dateString) {
  try {
    const date = new Date(dateString);
    
    // Опции для форматирования
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
  
    // Локализация в нужном языке (русский)
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  } catch (error) {
    console.error('Ошибка при форматировании даты:', error);
    return dateString; // Возвращаем исходную строку, если дата некорректна
  }
}


function render(store) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  for (let i = 1; i < store.length - 1; i++) {
    const storeItemInfo = store[i];
    const section = document.createElement('section');
    section.className = 'swiper-slide week';

    section.innerHTML = `
    <h3>${storeItemInfo.weekDate}</h3>
    <div class="days">
      <div class="day">
        <div class="day__title">
          <h4>${formatDateToDayAndMonth(storeItemInfo.weekdayDate)}</h4>
          <h4>Наша христианская жизнь и служение</h4>
        </div>

        <h5 class="technical">ТЕХНИЧЕСКАЯ СЛУЖБА</h5>
        <div class="item">
          <h6>Микрофон трибуна:</h6>
          <span class="name" name="${storeItemInfo.weekdayScene}">${storeItemInfo.weekdayScene}</span>
        </div>
        <div class="item_two">
          <h6>Аудио и видео:</h6>
          <div>
            <p>
              Отв. -
              <span class="name" name="${storeItemInfo.weekdayAudioVideoMain}">${storeItemInfo.weekdayAudioVideoMain}</span>
            </p>
            <p>
              Пом. -
              <span class="name" name="${storeItemInfo.weekdayAudioVideoHelper}">${storeItemInfo.weekdayAudioVideoHelper}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <h6>Распоредитель:</h6>
          <span class="name" name="${storeItemInfo.weekdayManager}">${storeItemInfo.weekdayManager}</span>
        </div>
        <div class="item">
          <h6>Микрофоны:</h6>
          <span class="name" name="${storeItemInfo.weekdayMicrophone}">${storeItemInfo.weekdayMicrophone}</span>
        </div>

        <h5 class="treasures">СОКРОВИЩА ИЗ СЛОВА БОГА</h5>
        <div class="item">
          <h6>Председатель:</h6>
          <span class="name" name="${storeItemInfo.weekdayChairman}">${storeItemInfo.weekdayChairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.weekdayPayer1}">${storeItemInfo.weekdayPayer1}</span>
        </div>
        <ul class="treasures-list">
          <li>
            <h6>${storeItemInfo.weekdaySpeechTitle}</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdaySpeechName}">${storeItemInfo.weekdaySpeechName}</span>
          </li>
          <li>
            <h6>2. Духовные жемчужины</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdayPearl}">${storeItemInfo.weekdayPearl}</span>
          </li>
          <li>
            <h6>3. Чтение Библии</h6>
            <span>(4 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdayReadingBible}">${storeItemInfo.weekdayReadingBible}</span>
          </li>
        </ul>

        <h5 class="skills">ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ</h5>
        <div class="skills-list">
          <ul>
           ${skillsListHTML(storeItemInfo)}
          </ul>
        </div>

        <h5 class="live">ХРИСТИАНСКАЯ ЖИЗНЬ</h5>
        <div class="live-list">
          <ul>
            ${liveListHTML(storeItemInfo)}
            <li>
              <h6>${storeItemInfo.weekdayLiveTitle4}</h6>
              <span>${storeItemInfo.weekdayLiveDescription4}</span>
              <span class="name" name="${storeItemInfo.weekdayLiveName4} / ${storeItemInfo.weekdayLiveReadingName4}">${storeItemInfo.weekdayLiveName4} / ${storeItemInfo.weekdayLiveReadingName4}</span>
            </li>
          </ul>
        </div>
        <div class="item">
          <h6>Заключительные слова (3 мин.)</h6>
          <span class="name" name="${storeItemInfo.weekdayChairman}">${storeItemInfo.weekdayChairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.weekdayPayer2}">${storeItemInfo.weekdayPayer2}</span>
        </div>
      </div>

      <div class="day">
        <div class="day__title">
          <h4>${formatDateToDayAndMonth(storeItemInfo.dayOffDate)}</h4>
          <h4>Речь и Сторожевая башня</h4>
        </div>

        <h5 class="technical">ТЕХНИЧЕСКАЯ СЛУЖБА</h5>
        <div class="item">
          <h6>Микрофон трибуна:</h6>
          <span class="name" name="${storeItemInfo.dayOffScene}">${storeItemInfo.dayOffScene}</span>
        </div>
        <div class="item_two">
          <h6>Аудио и видео:</h6>
          <div>
            <p>
              Отв. -
              <span class="name" name="${storeItemInfo.dayOffAudioVideoMain}">${storeItemInfo.dayOffAudioVideoMain}</span>
            </p>
            <p>
              Пом. -
              <span class="name" name="${storeItemInfo.dayOffAudioVideoHelper}">${storeItemInfo.dayOffAudioVideoHelper}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <h6>Распоредитель:</h6>
          <span class="name" name="${storeItemInfo.dayOffManager}">${storeItemInfo.dayOffManager}</span>
        </div>
        <div class="item">
          <h6>Микрофоны:</h6>
          <span class="name" name="${storeItemInfo.dayOffMicrophone}">${storeItemInfo.dayOffMicrophone}</span>
        </div>

        <h5 class="speak">ПУБЛИЧНАЯ РЕЧЬ</h5>
        <div class="item">
          <h6>Председатель:</h6>
          <span class="name" name="${storeItemInfo.dayOffChairman}">${storeItemInfo.dayOffChairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.dayOffPayer1}">${storeItemInfo.dayOffPayer1}</span>
        </div>
        <div class="item_two">
          <h6>Речь:</h6>
          <div>
            <p>
              Докладчик-
              <span class="name" name="${storeItemInfo.dayOffSpeechName}">${storeItemInfo.dayOffSpeechName}</span>
            </p>
            <p>
              Тема-
              <span class="name" name="${storeItemInfo.dayOffSpeechTitle}">${storeItemInfo.dayOffSpeechTitle}</span>
            </p>
          </div>
        </div>

        <h5 class="tower">СТОРОЖЕВАЯ БАШНЯ</h5>
        <div class="item">
          <h6>Ведущий:</h6>
          <span class="name" name="${storeItemInfo.dayOffLeadingName}">${storeItemInfo.dayOffLeadingName}</span>
        </div>
        <div class="item">
          <h6>Чтец:</h6>
          <span class="name" name="${storeItemInfo.dayOffReadingName}">${storeItemInfo.dayOffReadingName}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.dayOffPayer2}">${storeItemInfo.dayOffPayer2}</span>
        </div>
      </div>
    </div>
  `;
    swiperWrapper.appendChild(section);
  }
}





function getWeekNumber(date) {
  // Копируем дату, чтобы избежать изменения оригинального объекта
  const dateCopy = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Определяем, что неделя начинается с понедельника
  const dayOfWeek = dateCopy.getUTCDay() || 7;
  dateCopy.setUTCDate(dateCopy.getUTCDate() + 4 - dayOfWeek);
  const startOfYear = new Date(Date.UTC(dateCopy.getUTCFullYear(), 0, 1));
  // Вычисляем номер недели
  const weekNumber = Math.ceil((((dateCopy - startOfYear) / 86400000) + 1) / 7);
  return weekNumber;
}
const visitWeekNumber = getWeekNumber(new Date());
const firstWeekNumber = 48;//Номер первой недели месяца, изменять каждый месяц

const nameListLi = document.querySelectorAll('.name-list li');
nameListLi.forEach(span => {
  span.onclick = function () {
    spanNameActive(span.innerText)

    document.querySelector('.name-list').classList.add('display_none');
  }
})

function spanNameActive(name) {
  setTimeout(() => {
    const spanWithName = document.querySelectorAll('span[name]');
    spanWithName.forEach(span => {
      span.classList.remove('name_active');
      if (span.innerText.includes(name)) {
        span.classList.add('name_active')
      }
    })
  }, 500);

}



const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  initialSlide: visitWeekNumber - firstWeekNumber, // Открыть слайд нужной недели
  slidesPerView: 1,
  spaceBetween: 40,
});
