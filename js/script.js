//16—22 сентября
// {
//   weekDate: '16—22 сентября', // неделя от

//   weekdays: {
//     date: 'Четверг - сентября', // день недели

//     technical: {
//       scene: 'Александр М.', // Микрофон трибуна:
//       audioVideo: { main: '=.', helper: '=' }, // Аудио и видео:
//       manager: '=', // Распоредитель:
//       microphone: '=', // Микрофоны:
//     },

//     treasures: {
//       chairman: '=', // Председатель:
//       prayer: '=', // Молитва:
//       speechTitle: '=', // СОКРОВИЩА название
//       speech: '=', // СОКРОВИЩА докладчик
//       pearl: '=', // Духовные жемчужины
//       reading: '=', // Чтение Библии
//     },

//     skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
//       {
//         title: '=', //
//         description: '=', //
//         name: '?', //
//       },
//       {
//         title: '=', //
//         description: '=', //
//         name: '?', //
//       },
//       {
//         title: '=', //
//         description: '=', //
//         name: '?', //
//       },
//     ],

//     live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
//       {
//         title: '=', //
//         description: '=', //
//         name: '=', //
//       },
//       {
//         title: '=', //
//         description: '=', //
//         name: '=', //
//       },
//       {
//         title: '=. Изучение Библии в собрании', //
//         description: '(30 мин.)', //
//         name: '=. / =', //
//       },
//     ],
//     finalWords: '=', // Заключительные слова
//     prayer: '=', // Молитва
//   },
//   dayOff: { // выходной день
//     date: 'Суббота = сентября', // дата

//     technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
//       scene: 'Александр М.', // Микрофон трибуна:
//       audioVideo: { main: '=', helper: '=' }, // Аудио и видео:
//       manager: '=.', // Распоредитель:
//       microphone: '=', // Микрофоны:
//     },

//     publicMeeting: { // Публичная речь
//       chairman: '=', // Председатель:
//       prayer: '=', // Молитва:
//       speech: '?', // Речь докладчик
//       speechTitle: '?', // Речь название
//     },

//     watchtower: { // Изучение "Сторожевой башни"
//       leading: 'Евгений Л.', // Ведущий:
//       reading: '=.', // Чтец:
//     },

//     prayer: '=', // Молитва:
//   },
// }

const store = [
  //2—8 сентября
  {
    weekDate: '2—8 сентября',// неделя от

    weekdays: {
      date: 'Четверг 5 сентября',//день недели

      technical: {
        scene: 'Александр М.',//Микрофон трибуна:
        audioVideo: { main: 'Василий М.', helper: 'Геворг Г.' },//Аудио и видео:
        manager: 'Алексей З.',//Распоредитель:
        microphone: 'Гастон Н.',//Микрофоны:
      },

      treasures: {
        chairman: 'Виталий В.',//Председатель:
        prayer: 'Виталий В.',//Молитва:
        speechTitle: '1. Пусть вами движет любовь к прославленному имени Бога',//СОКРОВИЩА название
        speech: 'СТРИМ',//СОКРОВИЩА докладчик
        pearl: 'Андрей П',// Духовные жемчужины
        reading: 'Роман С.',//Чтение Библии
      },

      skills: [//ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор',//
          description: '(1 мин.) ПРОПОВЕДЬ ПО ДОМАМ.',//
          name: 'СТРИМ',//
        },
        {
          title: '5. Начинайте разговор',
          description: '(3 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ.',
          name: 'СТРИМ',
        },
        {
          title: '6. Начинайте разговор',
          description: '(2 мин.) ПРОПОВЕДЬ В ОБЩЕСТВЕННЫХ МЕСТАХ.',
          name: 'СТРИМ',
        },
        {
          title: '7. Развивайте интерес',
          description: '(5 мин.) ПРОПОВЕДЬ ПО ДОМАМ. ',
          name: 'СТРИМ',
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
          name: 'Алексей З. / Андрей П.',
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
        manager: 'Артур Ф.', // Распоредитель:
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
  
      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Сочувствие. Как действовал Иисус', //
          description: '(7 мин.) Обсуждение.', //
          name: 'Алексей З.', //
        },
        {
          title: '5. Сочувствие. Берите пример с Иисуса',
          description: '(8 мин.) Обсуждение.',
          name: 'Андрей П.',
        },
      ],
  
      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '6. Местные потребности', //
          description: '(15 мин.)', //
          name: '-', //
        },
        {
          title: '7. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 15, абз. 8—12, рамка на с. 118',
          name: 'Виталий В. / Алексей З.',
        },
      ],
      finalWords: 'Василий М.', // Заключительные слова
      prayer: 'Алексей З.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 14 сентября', // дата
  
      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Гастон Н.', helper: 'Василий М.' }, // Аудио и видео:
        manager: 'Артур Ф.', // Распоредитель:
        microphone: 'Андрей П.', // Микрофоны:
      },
  
      publicMeeting: { // Публичная речь
        chairman: 'Алексей З.', // Председатель:
        prayer: 'Алексей З.', // Молитва:
        speech: 'СТРИМ', // Речь докладчик
        speechTitle: '?' // Речь название
      },
  
      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Виталий В.', // Чтец:
      },
  
      prayer: 'Виталий В.', // Молитва:
    },
  },
  
  //16—22 сентября
  {
    weekDate: '16—22 сентября', // неделя от
  
    weekdays: {
      date: 'Четверг 19 сентября', // день недели
  
      technical: {
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Виталий В.', helper: 'Андрей П.' }, // Аудио и видео:
        manager: 'Алексей З.', // Распоредитель:
        microphone: 'Гастон Н.', // Микрофоны:
      },
  
      treasures: {
        chairman: 'Артур Ф.', // Председатель:
        prayer: 'Артур Ф.', // Молитва:
        speechTitle: '1. Молитва помогает нам переносить трудности', // СОКРОВИЩА название
        speech: 'Алексей З.', // СОКРОВИЩА докладчик
        pearl: 'Евгений Л.', // Духовные жемчужины
        reading: 'Гастон Н.', // Чтение Библии
      },
  
      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор', //
          description: '(3 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ.', //
          name: 'Ксения С. / Изумруд М.', //
        },
        {
          title: '5. Развивайте интерес',
          description: '(4 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ.',
          name: 'Екатерина М. / Анабель Ф.',
        },
        {
          title: '6. Подготавливайте учеников',
          description: '(5 мин.) lff урок 15, пункт 5. Обсуди с изучающим, как пройдёт занятие на следующей неделе, когда ты будешь в отъезде.',
          name: 'Стас С. / Геворг Г.',
        },
      ],
  
      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '7. «Не сдавайся!»', //
          description: '(5 мин.) Обсуждение.', //
          name: 'Андрей П.', //
        },
        {
          title: '8. «Продолжайте предлагать изучение Библии»',
          description: '(10 мин.) Обсуждение.',
          name: 'Евгений Л.',
        },
        {
          title: '9. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 15, абз. 13, 14, рамка на с. 121',
          name: 'Василий М. / Виталий В.',
        },
      ],
      finalWords: 'Артур Ф.', // Заключительные слова
      prayer: 'Виталий В.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 21 сентября', // дата
  
      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Василий М.', helper: 'Геворг Г.' }, // Аудио и видео:
        manager: 'Алексей З.', // Распоредитель:
        microphone: 'Гастон Н.', // Микрофоны:
      },
  
      publicMeeting: { // Публичная речь
        chairman: 'Виталий В.', // Председатель:
        prayer: 'Виталий В.', // Молитва:
        speech: 'СТРИМ', // Речь докладчик
        speechTitle: '?' // Речь название
      },
  
      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Андрей П.', // Чтец:
      },
  
      prayer: 'Андрей П.', // Молитва:
    },
  }
  ,

  //23—29 сентября
  {
    weekDate: '23—29 сентября', // неделя от

    weekdays: {
      date: 'Четверг 26 сентября', // день недели

      technical: {
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Геворг Г.', helper: 'Василий М.' }, // Аудио и видео:
        manager: 'Виталий В.', // Распоредитель:
        microphone: 'Андрей П.', // Микрофоны:
      },

      treasures: {
        chairman: 'Евгений Л.', // Председатель:
        prayer: 'Евгений Л.', // Молитва:
        speechTitle: '1. Иегова — самый лучший правитель', // СОКРОВИЩА название
        speech: 'Виталий В.', // СОКРОВИЩА докладчик
        pearl: 'Алексей З.', // Духовные жемчужины
        reading: 'Андрей П.', // Чтение Библии
      },

      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор', //
          description: '(3 мин.) ПРОПОВЕДЬ В ОБЩЕСТВЕННЫХ МЕСТАХ', //
          name: 'Алёна З. / Александра М.', //
        },
        {
          title: '5. Развивайте интерес', //
          description: '(4 мин.) ПРОПОВЕДЬ ПО ДОМАМ', //
          name: 'Наталья З. /Патимат Л.', //
        },
        {
          title: '6. Объясняйте свои взгляды', //
          description: '(5 мин.) Речь на основе ijwbq 181. Тема: «О чём говорится в Библии?»', //
          name: 'Василий М.', //
        },
      ],

      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '7. Почему стоит жить по нормам Иеговы', //
          description: '(10 мин.). Обсуждение.', //
          name: 'Алексей З.', //
        },
        {
          title: '8. Местные потребности', //
          description: '(5 мин.)', //
          name: '-', //
        },
        {
          title: '9. Изучение Библии в собрании', //
          description: '(30 мин.) bt гл. 15, абз. 15—20', //
          name: 'Артур Ф. / Василий М.', //
        },
      ],
      finalWords: 'Евгений Л..', // Заключительные слова
      prayer: 'Василий М.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 28 сентября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Геворг Г.', helper: 'Виталий В.' }, // Аудио и видео:
        manager: 'Артур Ф.', // Распоредитель:
        microphone: 'Андрей П.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Василий М.', // Председатель:
        prayer: 'Василий М.', // Молитва:
        speech: 'Виталий В.', // Речь докладчик
        speechTitle: 'На каком ты счету у Бога?', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Алексей З.', // Чтец:
      },

      prayer: 'Алексей З.', // Молитва:
    },
  },

  //30 СЕНТЯБРЯ — 6 ОКТЯБРЯ
  {
    weekDate: '30 СЕНТЯБРЯ — 6 ОКТЯБРЯ', // неделя от

    weekdays: {
      date: 'Четверг 3 октября', // день недели

      technical: {
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Гастон Н.', helper: 'Виталий В.' }, // Аудио и видео:
        manager: 'Евгений Л.', // Распоредитель:
        microphone: 'Геворг Г.', // Микрофоны:
      },

      treasures: {
        chairman: 'Алексей З.', // Председатель:
        prayer: 'Алексей З.', // Молитва:
        speechTitle: '1. Чтобы обрести вечную жизнь, полагайтесь на Иегову', // СОКРОВИЩА название
        speech: 'Василий М.', // СОКРОВИЩА докладчик
        pearl: 'Виталий В.', // Духовные жемчужины
        reading: 'Геворг Г.', // Чтение Библии
      },

      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор', //
          description: '(3 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ', //
          name: 'Надежда К. / Валентина В.', //
        },
        {
          title: '5. Начинайте разговор', //
          description: '(4 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ', //
          name: 'Эмилия Л.  / Маргарита С.', //
        },
        {
          title: '6. Речь', //
          description: '(5 мин.) lmd Приложение А, пункт 5. Тема: «Вы сможете вечно жить на земле»', //
          name: 'Александр М.', //
        },
      ],

      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '7. «Цените огромное терпение Бога. Взгляд Иеговы на время»', //
          description: '(5 мин.). Обсуждение.', //
          name: 'Виталий В.', //
        },
        {
          title: '8. «Чего достигла наша организация» (сентябрь)', //
          description: '(10 мин.) Покажи ВИДЕО.', //
          name: 'Алексей З.', //
        },
        {
          title: '9. Изучение Библии в собрании', //
          description: '(30 мин.) bt гл. 16, абз. 1—5, рамка на с. 128', //
          name: 'Евгений Л. / Андрей П.', //
        },
      ],
      finalWords: 'Алексей З.', // Заключительные слова
      prayer: 'Андрей П.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 5 октября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Виталий В.', helper: 'Гастон Н.' }, // Аудио и видео:
        manager: 'Алексей З.', // Распоредитель:
        microphone: 'Геворг Г.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Артур Ф.', // Председатель:
        prayer: 'Артур Ф.', // Молитва:
        speech: 'СТРИМ', // Речь докладчик
        speechTitle: '?', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Василий М.', // Чтец:
      },

      prayer: 'Василий М.', // Молитва:
    },
  },

  // Новый объект для недели 7-13 октября
  {
    weekDate: '7—13 октября', // неделя от

    weekdays: {
      date: 'Четверг 10 октября', // день недели

      technical: {
        scene: 'Геворг Г.', // Микрофон трибуна:
        audioVideo: { main: 'Василий М.', helper: 'Роман Д.' }, // Аудио и видео:
        manager: 'Алексей З.', // Распорядитель:
        microphone: 'Андрей П.', // Микрофоны:
      },

      treasures: {
        chairman: 'Виталий В.', // Председатель:
        prayer: 'Виталий В.', // Молитва:
        speechTitle: '1. Служение Иегове — лучший выбор в жизни', // СОКРОВИЩА название
        speech: 'Александр Б.', // СОКРОВИЩА докладчик
        pearl: 'Василий М.', // Духовные жемчужины
        reading: 'Роман Д.', // Чтение Библии
      },

      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор',
          description: '(4 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ.',
          name: 'Асмик / Ксения С.',
        },
        {
          title: '5. Развивайте интерес',
          description: '(3 мин.) НЕФОРМАЛЬНОЕ СЛУЖЕНИЕ.',
          name: 'Мартина Ф. / Екатерина М.',
        },
        {
          title: '6. Подготавливайте учеников',
          description: '(5 мин.) Разговор с изучающим, который не растёт духовно.',
          name: 'Александр Б. / Василий М.',
        },
      ],

      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '7. Новые братья и сёстры тоже страдают от тревоги',
          description: '(15 мин.) Обсуждение.',
          name: 'Алексей З.',
        },
        {
          title: '8. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 12, абз. 6—9, рамка на с. 132',
          name: 'Артур Ф. / Роман С.',
        },
      ],
      finalWords: 'Виталий В.', // Заключительные слова
      prayer: 'Роман С.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 12 октября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Роман Д.', helper: 'Василий М.' }, // Аудио и видео:
        manager: 'Роман С.', // Распорядитель:
        microphone: 'Геворг Г.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Алексей З.', // Председатель:
        prayer: 'Алексей З.', // Молитва:
        speech: 'СТРИМ', // Речь докладчик
        speechTitle: '?', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Виталий В.', // Ведущий:
        reading: 'Андрей П.', // Чтец:
      },

      prayer: 'Андрей П.', // Молитва:
    },
  },

  // Новый объект для недели 14-20 октября
  {
    weekDate: '14—20 октября', // неделя от

    weekdays: {
      date: 'Четверг 17 октября', // день недели

      technical: {
        scene: 'Гастон Н.', // Микрофон трибуна:
        audioVideo: { main: 'Роман Д.', helper: 'Роман С.' }, // Аудио и видео:
        manager: 'Артур Ф.', // Распорядитель:
        microphone: 'Геворг Г.', // Микрофоны:
      },

      treasures: {
        chairman: 'Василий М.', // Председатель:
        prayer: 'Василий М.', // Молитва:
        speechTitle: '1. «Возвещайте радостную весть»', // СОКРОВИЩА название
        speech: 'Артур Ф.', // СОКРОВИЩА докладчик
        pearl: 'Андрей П.', // Духовные жемчужины
        reading: 'Стас С.', // Чтение Библии
      },

      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Приверженность делу. Как действовал Иисус',
          description: '(7 мин.) Обсуждение.',
          name: 'Алексей З.',
        },
        {
          title: '5. Приверженность делу. Берите пример с Иисуса',
          description: '(8 мин.) Обсуждение.',
          name: 'Александр Б.',
        },
      ],

      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '6. Местные потребности',
          description: '(15 мин.)',
          name: '-',
        },
        {
          title: '7. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 16, абз. 10—18',
          name: 'Виталий В. / Андрей П.',
        },
      ],
      finalWords: 'Василий М.', // Заключительные слова
      prayer: 'Андрей П.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 19 октября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Геворг Г.', // Микрофон трибуна:
        audioVideo: { main: 'Роман С.', helper: 'Роман Д.' }, // Аудио и видео:
        manager: 'Алексей З.', // Распорядитель:
        microphone: 'Гастон Н.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Артур Ф.', // Председатель:
        prayer: 'Артур Ф.', // Молитва:
        speech: 'Василий М.', // Речь докладчик
        speechTitle: 'Божья мудрость в мире, полагающемся на науку', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Виталий В.', // Чтец:
      },

      prayer: 'Виталий В.', // Молитва:
    },
  },

  // Новый объект для недели 21-27 октября
  {
    weekDate: '21—27 октября', // неделя от

    weekdays: {
      date: 'Четверг 24 октября', // день недели

      technical: {
        scene: 'Александр М.', // Микрофон трибуна:
        audioVideo: { main: 'Роман С.', helper: 'Андрей П.' }, // Аудио и видео:
        manager: 'Роман Д.', // Распорядитель:
        microphone: 'Гастон Н.', // Микрофоны:
      },

      treasures: {
        chairman: 'Артур Ф.', // Председатель:
        prayer: 'Артур Ф.', // Молитва:
        speechTitle: '1. Цените преданную любовь Иеговы', // СОКРОВИЩА название
        speech: 'Стас С.', // СОКРОВИЩА докладчик
        pearl: 'Алексей З.', // Духовные жемчужины
        reading: 'Роман С.', // Чтение Библии
      },

      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор',
          description: '(3 мин.) ПРОПОВЕДЬ ПО ДОМАМ.',
          name: 'Гризель А. / Наталья З.',
        },
        {
          title: '5. Развивайте интерес',
          description: '(5 мин.) ПРОПОВЕДЬ ПО ДОМАМ.',
          name: 'Изумруд М. / Дарья Ф.',
        },
        {
          title: '6. Объясняйте свои взгляды',
          description: '(4 мин.) Диалог на основе ijwbq 129.',
          name: 'Василий М. / Андрей П.',
        },
      ],

      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '7. «Я призван к тебе, а ты держишь меня»',
          description: '(15 мин.)',
          name: 'Виталий В.',
        },
        {
          title: '8. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 17, абз. 1–7',
          name: 'Евгений Л. / Василий М.',
        },
      ],
      finalWords: 'Артур Ф.', // Заключительные слова
      prayer: 'Василий М.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 26 октября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Роман Д.', // Микрофон трибуна:
        audioVideo: { main: 'Андрей П.', helper: 'Роман С.' }, // Аудио и видео:
        manager: 'Василий М.', // Распорядитель:
        microphone: 'Геворг Г.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Виталий В.', // Председатель:
        prayer: 'Виталий В.', // Молитва:
        speech: 'СТРИМ', // Речь докладчик
        speechTitle: '?', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Алексей З.', // Чтец:
      },

      prayer: 'Алексей З.', // Молитва:
    },
  },

  // Новый объект для недели 28 октября — 3 ноября
  {
    weekDate: '28 октября — 3 ноября', // неделя от

    weekdays: {
      date: 'Четверг 31 октября', // день недели

      technical: {
        scene: 'Роман С.', // Микрофон трибуна:
        audioVideo: { main: 'Андрей П.', helper: 'Геворг Г.' }, // Аудио и видео:
        manager: 'Василий М.', // Распорядитель:
        microphone: 'Роман Д.', // Микрофоны:
      },

      treasures: {
        chairman: 'Евгений Л.', // Председатель:
        prayer: 'Евгений Л.', // Молитва:
        speechTitle: '1. Иегова «помнит, что мы всего лишь пыль»', // СОКРОВИЩА название
        pearl: 'Артур Ф.', // Духовные жемчужины
        reading: 'Гастон Н.', // Чтение Библии
      },

      skills: [ // ОТТАЧИВАЕМ НАВЫКИ СЛУЖЕНИЯ
        {
          title: '4. Начинайте разговор',
          description: '(3 мин.) ПРОПОВЕДЬ В ОБЩЕСТВЕННЫХ МЕСТАХ.',
          name: 'Маргарита С. / Ракель А.',
        },
        {
          title: '5. Развивайте интерес',
          description: '(4 мин.) ПРОПОВЕДЬ ПО ДОМАМ.',
          name: 'Виктория Д. / Патимат Л.',
        },
        {
          title: '6. Речь',
          description: '(5 мин.) |md| Приложение A, пункт 6. Тема: «Муж должен любить свою жену, как самого себя»',
          name: 'Роман Д.',
        },
      ],

      live: [ // ХРИСТИАНСКАЯ ЖИЗНЬ
        {
          title: '7. Как понять, что нам по силам?',
          description: '(15 мин.) Обсуждение.',
          name: 'Александр Б.',
        },
        {
          title: '8. Изучение Библии в собрании',
          description: '(30 мин.) bt гл. 17, абз. 8–12, рамка на с. 137',
          name: 'Алексей З. / Роман С.',
        },
      ],
      finalWords: 'Евгений Л.', // Заключительные слова
      prayer: 'Роман С.', // Молитва
    },
    dayOff: { // выходной день
      date: 'Суббота 2 ноября', // дата

      technical: { // ТЕХНИЧЕСКАЯ СЛУЖБА
        scene: 'Гастон Н.', // Микрофон трибуна:
        audioVideo: { main: 'Геворг Г.', helper: 'Андрей П.' }, // Аудио и видео:
        manager: 'Роман Д.', // Распорядитель:
        microphone: 'Василий М.', // Микрофоны:
      },

      publicMeeting: { // Публичная речь
        chairman: 'Александр Б.', // Председатель:
        prayer: 'Александр Б.', // Молитва:
        speech: 'Валерий', // Речь докладчик
        speechTitle: 'У семейных проблем есть решения', // Речь название
      },

      watchtower: { // Изучение "Сторожевой башни"
        leading: 'Евгений Л.', // Ведущий:
        reading: 'Роман С.', // Чтец:
      },

      prayer: 'Валерий', // Молитва:
    },
  }


];


const main = document.querySelector('main');
let nameActive;
let weekActiv = 0

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
            <span>(4 мин.)</span>
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

        <h5 class="speak">ПУБЛИЧНАЯ РЕЧЬ</h5>
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
              Докладчик-
              <span class="name" name="${storeItemInfo.dayOff.publicMeeting.speech}">${storeItemInfo.dayOff.publicMeeting.speech}</span>
            </p>
            <p>
              Тема-
              <span class="name" name="${storeItemInfo.dayOff.publicMeeting.speechTitle}">${storeItemInfo.dayOff.publicMeeting.speechTitle}</span>
            </p>
          </div>
        </div>

        <h5 class="tower">СТОРОЖЕВАЯ БАШНЯ</h5>
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
  spanNameActive(nameActive);
}


const navButtonNext = document.querySelector('.nav-buttons .next');
const navButtonPrev = document.querySelector('.nav-buttons .prev');
function navButtonsChengeAhow() {  
  if (weekActiv > 0 && weekActiv < (store.length -1)) {
    navButtonPrev.classList.remove('button_none');
    navButtonNext.classList.remove('button_none');
  }else if(weekActiv == 0){
    navButtonPrev.classList.add('button_none');
  }else if (weekActiv < store.length){
    navButtonNext.classList.add('button_none');
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

if ((visitWeekNumber - firstWeekNumber) > -1 && (visitWeekNumber - firstWeekNumber) < store.length) {
  weekActiv = visitWeekNumber - firstWeekNumber
}
navButtonsChengeAhow()
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

// Добавляем обработчик событий для свайпа
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (event) => {
  touchStartX = event.changedTouches[0].screenX;
};

const handleTouchEnd = (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  if (touchStartX > touchEndX + 50) { // Свайп влево
    if (weekActiv < store.length - 1) {
      weekActiv++;
      main.classList.add('_hideLeft');
      render(weekActiv);
      navButtonsChengeAhow();
      window.scrollTo({ top: 0 });
      setTimeout(() => {
        main.classList.remove('_hideLeft');
      }, 600);
    }
  } else if (touchStartX < touchEndX - 50) { // Свайп вправо
    if (weekActiv > 0) {
      weekActiv--;
      main.classList.add('_hideRight');
      render(weekActiv);
      navButtonsChengeAhow();
      window.scrollTo({ top: 0 });
      setTimeout(() => {
        main.classList.remove('_hideRight');
      }, 600);
    }
  }
};

window.addEventListener('touchstart', handleTouchStart);
window.addEventListener('touchend', handleTouchEnd);


const nameListLi = document.querySelectorAll('.name-list li');
nameListLi.forEach(span => {
  span.onclick = function () {
    nameActive = span.innerText;
    spanNameActive(nameActive)

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
