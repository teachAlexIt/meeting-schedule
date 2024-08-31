const store = [
  //2—8 сентября
  {
    weekDate: '2—8 сентября',// неделя от

    weekdays: {
      date: 'Четверг 5 сентября',//день недели

      technical: {
        scene: 'Александр М.',//Микрофон трибуна:
        audioVideo: { main: 'Василий М.', helper: 'Геворг Г.' },//Аудио и видео:
        manager: 'Евгений Л.',//Распоредитель:
        microphone: 'Гастон Н.',//Микрофоны:
      },

      treasures: {
        chairman: 'Виталий В.',//Председатель:
        prayer: 'Виталий В.',//Молитва:
        speechTitle: '1. Пусть вами движет любовь к прославленному имени Бога',//СОКРОВИЩА название
        speech: 'Артур Ф.',//СОКРОВИЩА докладчик
        pearl: 'Андрей П',// Духовные жемчужины
        reading: 'Магомед М.',//Чтение Библии
      },

      skills: [//ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор',//
          description: '(1 мин.) ПРОПОВЕДЬ ПО ДОМАМ.',//
          name: 'Стрим',//
        },
        {
          title: '5. Начинайте разговор',
          description: '(3 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ.',
          name: 'Стрим',
        },
        {
          title: '6. Начинайте разговор',
          description: '(2 мин.) ПРОПОВЕДЬ В ОБЩЕСТВЕННЫХ МЕСТАХ.',
          name: 'Стрим',
        },
        {
          title: '7. Развивайте интерес',
          description: '(5 мин.) ПРОПОВЕДЬ ПО ДОМАМ. ',
          name: 'Стрим',
        },
      ],

      live: [//ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '8. «Они будут свято чтить моё имя»',//
          description: '(15 мин.). Обсуждение.',//
          name: 'Василий М.',//
        },
        {
          title: '9. Изучение Библии в собрании',
          description: '(30 мин.)',
          name: 'A. Зиганшин / Андрей П.',
        },
      ],
      finalWords: 'Виталий В.',//Заключительные слова
      prayer: 'Гастон Н.',//Молитва
    },
    dayOff: {//выходной день
      date: 'Суббота 7 сентября',//дата

      technical: {//ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.',//Микрофон трибуна:
        audioVideo: { main: 'Андрей П.', helper: 'Гастон Н.' },//Аудио и видео:
        manager: 'Виталий В.',//Распоредитель:
        microphone: 'Геворг Г.',//Микрофоны:
      },

      publicMeeting: {//Публичная речь
        chairman: 'Артур Ф.',//Председатель:
        prayer: 'Артур Ф.',//Молитва:
        speech: 'Алексей З.',//Речь докладчик
        speechTitle: 'Велекодушно прошайте друг друга'//Речь название
      },

      watchtower: {//Изучение "Сторожевой башни"
        leading: 'Евгений Л.',//Ведущий:
        reading: 'Василий М.',//Чтец:
      },

      prayer: 'Алексей З.',//Молитва:
    },
  },
  //9—15 сентября
  {
    weekDate: '9—15 сентября', // неделя от

    weekdays: {
      date: 'Четверг 12 сентября', // день недели

      technical: {
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Алексей З.', helper: 'Гастон Н.' }, // Аудио и видео:
        manager: 'Артур Ф.', // Распорядитель:
        microphone: 'Геворг Г.', // Микрофоны:
      },

      treasures: {
        chairman: 'Василий М.', // Председатель:
        prayer: 'Василий М.', // Молитва:
        speechTitle: '1. Цените свои задания в служении Иегове', // СОКРОВИЩА название
        speech: 'Евгений Л.', // СОКРОВИЩА докладчик
        pearl: 'Артур Ф.', // Духовные жемчужины
        reading: 'Александр М.', // Чтение Библии
      },

      skills: [
        {
          title: '4. Сочувствие. Как действовал Иисус', // Название
          description: '(7 мин.) Обсуждение.', // Описание
          name: 'Алексей З.', // Имя
        },
        {
          title: '5. Сочувствие. Берите пример с Иисуса',
          description: '(8 мин.) Обсуждение.',
          name: 'Андрей П.',
        },
      ],

      live: [
        {
          title: '6. Местные потребности', // Название
          description: '(15 мин.)', // Описание
          name: '?', // Имя
        },
        {
          title: '7. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 15, абз. 8—12, рамка на с. 118',
          name: 'Виталий В. / Алексей З.', // Имя
        },
      ],
      finalWords: 'Василий М.', // Заключительные слова
      prayer: 'Алексей З.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 14 сентября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Василий М.', helper: 'Геворг Г.' }, // Аудио и видео:
        manager: 'Артур Ф.', // Распорядитель:
        microphone: 'Гастон Н.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Алексей З.', // Председатель:
        prayer: 'Алексей З.', // Молитва:
        speech: '?', // Речь докладчик
        speechTitle: '?', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Андрей П.', // Чтец:
      },
      prayer: 'Андрей П.', // Молитва:
    },
  },
  //16—22 сентября



];


const main = document.querySelector('main');

function render(weekNumber) {
  main.innerHTML = '';

  const storeItemInfo = store[weekNumber];

  const section = document.createElement('section');
  section.className = 'week';

  section.innerHTML = `
    <h3>${storeItemInfo.weekDate}</h3>
    <div class="days">
      <div class="day">
        <div class="day__title">
          <h4>${storeItemInfo.weekdays.date}</h4>
          <h4>Наша христианская жизнь и служение</h4>
        </div>

        <h5 class="technical">ТЕХНИЧЕСКАЯ СЛУЖБА</h5>
        <div class="item">
          <h6>Микрофон трибуна:</h6>
          <span class="name" name="${storeItemInfo.weekdays.technical.scene}">${storeItemInfo.weekdays.technical.scene}</span>
        </div>
        <div class="item_two">
          <h6>Аудио и видео:</h6>
          <div>
            <p>
              Отв. -
              <span class="name" name="${storeItemInfo.weekdays.technical.audioVideo.main}">${storeItemInfo.weekdays.technical.audioVideo.main}</span>
            </p>
            <p>
              Пом. -
              <span class="name" name="${storeItemInfo.weekdays.technical.audioVideo.helper}">${storeItemInfo.weekdays.technical.audioVideo.helper}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <h6>Распоредитель:</h6>
          <span class="name" name="${storeItemInfo.weekdays.technical.manager}">${storeItemInfo.weekdays.technical.manager}</span>
        </div>
        <div class="item">
          <h6>Микрофоны:</h6>
          <span class="name" name="${storeItemInfo.weekdays.technical.microphone}">${storeItemInfo.weekdays.technical.microphone}</span>
        </div>

        <h5 class="treasures">СОКРОВИЩА ИЗ СЛОВА БОГА</h5>
        <div class="item">
          <h6>Председатель:</h6>
          <span class="name" name="${storeItemInfo.weekdays.treasures.chairman}">${storeItemInfo.weekdays.treasures.chairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.weekdays.treasures.prayer}">${storeItemInfo.weekdays.treasures.prayer}</span>
        </div>
        <ul class="treasures-list">
          <li>
            <h6>${storeItemInfo.weekdays.treasures.speechTitle}</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdays.treasures.speech}">${storeItemInfo.weekdays.treasures.speech}</span>
          </li>
          <li>
            <h6>2. Духовные жемчужины</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdays.treasures.pearl}">${storeItemInfo.weekdays.treasures.pearl}</span>
          </li>
          <li>
            <h6>3. Чтение Библии</h6>
            <span>(10 мин.)</span>
            <span class="name" name="${storeItemInfo.weekdays.treasures.reading}">${storeItemInfo.weekdays.treasures.reading}</span>
          </li>
        </ul>

        <h5 class="skills">ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ</h5>
        <div class="skills-list">
          <ul>
            ${storeItemInfo.weekdays.skills.map(skillItem => {
    return `
                  <li>
                    <h6>${skillItem.title}</h6>
                    <span>${skillItem.description}</span>
                    <span class="name" name="${skillItem.name}">${skillItem.name}</span>
                  </li>
                `;
  }).join('')}
          </ul>
        </div>

        <h5 class="live">ХРИСТИАНСКАЯ ЖИЗНЬ</h5>
        <div class="live-list">
          <ul>
            ${storeItemInfo.weekdays.live.map(liveItem => {
    return `
                  <li>
                    <h6>${liveItem.title}</h6>
                    <span>${liveItem.description}</span>
                    <span class="name" name="${liveItem.name}">${liveItem.name}</span>
                  </li>
                `;
  }).join('')}
          </ul>
        </div>
        <div class="item">
          <h6>Заключительные слова (3 мин.)</h6>
          <span class="name" name="${storeItemInfo.weekdays.finalWords}">${storeItemInfo.weekdays.finalWords}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.weekdays.prayer}">${storeItemInfo.weekdays.prayer}</span>
        </div>
      </div>

      <div class="day">
        <div class="day__title">
          <h4>${storeItemInfo.dayOff.date}</h4>
          <h4>Речь и Сторожевая башня</h4>
        </div>

        <h5 class="technical">ТЕХНИЧЕСКАЯ СЛУЖБА</h5>
        <div class="item">
          <h6>Микрофон трибуна:</h6>
          <span class="name" name="${storeItemInfo.dayOff.technical.scene}">${storeItemInfo.dayOff.technical.scene}</span>
        </div>
        <div class="item_two">
          <h6>Аудио и видео:</h6>
          <div>
            <p>
              Отв. -
              <span class="name" name="${storeItemInfo.dayOff.technical.audioVideo.main}">${storeItemInfo.dayOff.technical.audioVideo.main}</span>
            </p>
            <p>
              Пом. -
              <span class="name" name="${storeItemInfo.dayOff.technical.audioVideo.helper}">${storeItemInfo.dayOff.technical.audioVideo.helper}</span>
            </p>
          </div>
        </div>
        <div class="item">
          <h6>Распоредитель:</h6>
          <span class="name" name="${storeItemInfo.dayOff.technical.manager}">${storeItemInfo.dayOff.technical.manager}</span>
        </div>
        <div class="item">
          <h6>Микрофоны:</h6>
          <span class="name" name="${storeItemInfo.dayOff.technical.microphone}">${storeItemInfo.dayOff.technical.microphone}</span>
        </div>

        <h5 class="speak">Публичная речь</h5>
        <div class="item">
          <h6>Председатель:</h6>
          <span class="name" name="${storeItemInfo.dayOff.publicMeeting.chairman}">${storeItemInfo.dayOff.publicMeeting.chairman}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.dayOff.publicMeeting.prayer}">${storeItemInfo.dayOff.publicMeeting.prayer}</span>
        </div>
        <div class="item_two">
          <h6>Речь:</h6>
          <div>
            <p>
              Докладчик. -
              <span class="name" name="${storeItemInfo.dayOff.publicMeeting.speech}">${storeItemInfo.dayOff.publicMeeting.speech}</span>
            </p>
            <p>
              Тема. -
              <span class="name" name="${storeItemInfo.dayOff.publicMeeting.speechTitle}">${storeItemInfo.dayOff.publicMeeting.speechTitle}</span>
            </p>
          </div>
        </div>

        <h5 class="tower">Изучение "Сторожевой башни"</h5>
        <div class="item">
          <h6>Ведущий:</h6>
          <span class="name" name="${storeItemInfo.dayOff.watchtower.leading}">${storeItemInfo.dayOff.watchtower.leading}</span>
        </div>
        <div class="item">
          <h6>Чтец:</h6>
          <span class="name" name="${storeItemInfo.dayOff.watchtower.reading}">${storeItemInfo.dayOff.watchtower.reading}</span>
        </div>
        <div class="item">
          <h6>Молитва:</h6>
          <span class="name" name="${storeItemInfo.dayOff.prayer}">${storeItemInfo.dayOff.prayer}</span>
        </div>
      </div>
    </div>
  `;
  main.appendChild(section);
}


const navButtonNext = document.querySelector('.nav-buttons .next');
const navButtonPrev = document.querySelector('.nav-buttons .prev');
function navButtonsChengeAhow() {
  if (weekActiv > 0) {
    navButtonPrev.classList.remove('button_none');
  }
  if (weekActiv == (store.length - 1)) {
    navButtonNext.classList.add('button_none');
  }
  if (weekActiv == 0) {
    navButtonPrev.classList.add('button_none');
  }
  if (weekActiv < (store.length - 1)) {
    navButtonNext.classList.remove('button_none');
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
const firstWeekNumber = 36;//Номер первой недели месяца, изменять каждый месяц
let weekActiv = 0
if ((visitWeekNumber - firstWeekNumber) > -1 && (visitWeekNumber - firstWeekNumber) < store.length) {
  weekActiv = visitWeekNumber - firstWeekNumber
  navButtonsChengeAhow()
}
render(weekActiv);


navButtonNext.onclick = function () {
  weekActiv++;
  main.classList.add('_hideLeft');
  navButtonPrev.classList.add('_hideLeft');
  navButtonNext.classList.add('_hideRight');
  setTimeout(() => {
    render(weekActiv);
    navButtonsChengeAhow()
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => {
      navButtonPrev.classList.remove('_hideLeft');
      navButtonNext.classList.remove('_hideRight');
    }, 500);
    main.classList.remove('_hideLeft');
  }, 600);

}

navButtonPrev.onclick = function () {
  weekActiv--;
  main.classList.add('_hideRight');
  navButtonPrev.classList.add('_hideLeft');
  navButtonNext.classList.add('_hideRight');
  setTimeout(() => {
    render(weekActiv);
    navButtonsChengeAhow()
    window.scrollTo({
      top: 0,
    });
    setTimeout(() => {
      navButtonPrev.classList.remove('_hideLeft');
      navButtonNext.classList.remove('_hideRight');
    }, 500);
    main.classList.remove('_hideRight');
  }, 600);
}

const nameListLi = document.querySelectorAll('.name-list li');
nameListLi.forEach(span => {
  span.onclick = function(){
    const name = span.innerText;
  const spanNameList = document.querySelectorAll(`span[name="${name}"]`);

  const spanWithName = document.querySelectorAll('span[name]');
  spanWithName.forEach(span => {
    span.classList.remove('name_active')
  })

  spanNameList.forEach(span => {
    span.classList.add('name_active')
  });

  document.querySelector('.name-list').classList.add('display_none');
  }
})
