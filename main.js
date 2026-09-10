// let selectedDate = '';
// let selectedTime = '';
// let selectedFood = '';
// let selectedFoodEmoji = '';


// const buttons = document.querySelectorAll('.buttons__item');
// const steps = [
//   document.getElementById('step-0'),
//   document.getElementById('step-1'),
//   document.getElementById('step-2'),
//   document.getElementById('step-3'),
//   document.getElementById('step-4'),
//   document.getElementById('step-5'),
//   document.getElementById('step-6')
// ];

// const dateForm = document.querySelector('.step__form')
// const submitButton = document.getElementById('submit-button');
// const dateInput = document.getElementById('date');
// const timeInput = document.getElementById('time');
// const presetButtons = document.querySelectorAll('.date-preset-btn');

// buttons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     // Если кнопка находится ВНУТРИ формы, не переключаем шаги по клику,
//     // так как отправка формы обработается отдельно через событие 'submit'
//     if (button.closest('.step__form')) return;

//     const currentActive = steps.find(step => step && step.classList.contains('active'));
//     if (!currentActive) return;

//     const currentIndex = steps.indexOf(currentActive);

//     // Скрываем текущий шаг
//     currentActive.classList.remove('active');

//     // Переходим на следующий шаг
//     const nextIndex = (currentIndex + 1) % steps.length;
//     steps[nextIndex].classList.add('active');
//   });
// })

// const newTitle = document.getElementById('step-new-title');

// presetButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const selectedDate = button.getAttribute('data-date');
    
//     // Автоматически подставляем дату в поле
//     if (dateInput) {
//       dateInput.value = selectedDate; 
//     }

//     newTitle.textContent = 'А теперь выбери время:';

//     // Переходим на шаг 4 (где остается ввести только время)
//     // Либо сразу на шаг 5 (если время вводить не обязательно)
//     goToStep(4); 
//   });
// });

// if (dateForm) {
//   dateForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Предотвращаем перезагрузку страницы

//     // Проверяем, заполнены ли инпуты
//     if (dateInput.value.trim() === '' || timeInput.value.trim() === '') {
//       alert('Пожалуйста, заполните дату и время!');
//       return;
//     }
    
//     selectedDate = dateInput.value;
//     selectedTime = timeInput.value;

//     // Находим текущий активный шаг (step-4)
//     const currentActive = steps.find(step => step && step.classList.contains('active'));
    
//     if (currentActive) {
//       currentActive.classList.remove('active');
      
//       // Переходим на следующий шаг после формы (step-5)
//       const step5Index = 5;
//       steps[step5Index].classList.add('active');
//     }
//   });
// }

const noButton = document.getElementById('no-button');
const myImg = document.querySelector('.my-img');
noButton.addEventListener('mouseover', () => {
  noButton.classList.add('active');
  myImg.classList.remove('active');
});

myImg.addEventListener('mouseout', () => {
  noButton.classList.remove('active');
  myImg.classList.add('active');
});




function createHearts() { const container = document.createElement('div'); container.classList.add('hearts-background'); document.body.appendChild(container);
const hearts = ['💖', '💕', '💗', '❤️', '🌸'];
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');

  // Случайное сердечко из списка
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  // Случайный размер, позиция по горизонтали и скорость
  const startLeft = Math.random() * 100;
  const duration = Math.random() * 5 + 5; // от 5 до 10 секунд
  const size = Math.random() * 40 + 40; // от 40px до 80px

  heart.style.left = `${startLeft}vw`;
  heart.style.animationDuration = `${duration}s`;

  heart.style.fontSize = `${size}px`;

  container.appendChild(heart);

  // Удаляем элемент после завершения анимации
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
  }, 1000);
}
window.addEventListener('DOMContentLoaded', createHearts);



// const foodButtons = document.querySelectorAll('.food__btn');

// foodButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Получаем название еды (из второго span)
//     const foodName = button.querySelector('#food-name')?.innerText || button.innerText;
//     const foodEmoji = button.querySelector('#food')?.innerText || '';
//     selectedFood = foodName.toLowerCase();
//     selectedFoodEmoji = foodEmoji;

//   });
// });


// const finalMessaje = document.querySelector('#final-message');
// const finalMessageEm = document.querySelector('#final-message-emoji')


// finalMessageEm.textContent = `${selectedFoodEmoji}`
// finalMessaje.textContent = `${selectedDate} в ${selectedTime} мы с тобой идём есть ${selectedFood}`





let selectedDate = '';
let selectedTime = '';
let selectedFood = '';
let selectedFoodEmoji = '';

const buttons = document.querySelectorAll('.buttons__item');
const steps = [
  document.getElementById('step-0'),
  document.getElementById('step-1'),
  document.getElementById('step-2'),
  document.getElementById('step-3'),
  document.getElementById('step-4'),
  document.getElementById('step-5'),
  document.getElementById('step-6'),
  document.getElementById('step-7')
];

const dateForm = document.querySelector('.step__form');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const presetButtons = document.querySelectorAll('.date-preset-btn');
const newTitle = document.getElementById('step-new-title');

// Вспомогательная функция переключения на нужный шаг
function goToStep(targetIndex) {
  steps.forEach(step => step && step.classList.remove('active'));
  if (steps[targetIndex]) {
    steps[targetIndex].classList.add('active');
  }
}

// 1. Клики по общим кнопкам (кроме формы)
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.closest('.step__form')) return;

    const currentActive = steps.find(step => step && step.classList.contains('active'));
    if (!currentActive) return;

    const currentIndex = steps.indexOf(currentActive);
    const nextIndex = (currentIndex + 1) % steps.length;
    goToStep(nextIndex);
  });
});

// 2. Быстрые даты (было const selectedDate — ИСПРАВЛЕНО)
presetButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Присваиваем значения в глобальную переменную!
    selectedDate = button.getAttribute('data-date') || button.innerText;
    
    if (dateInput) {
      dateInput.value = selectedDate; 
    }

    if (newTitle) {
      newTitle.textContent = 'А теперь выбери время:';
    }

    goToStep(4); 
  });
});

// 3. Отправка формы (Дата и Время)
if (dateForm) {
  dateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (dateInput.value.trim() === '' || timeInput.value.trim() === '') {
      alert('Пожалуйста, заполните дату и время!');
      return;
    }
    
    selectedDate = dateInput.value;
    selectedTime = timeInput.value;

    goToStep(5);
  });
}

// 4. Выбор еды и формирование ФИНАЛЬНОГО ТЕКСТА
const foodButtons = document.querySelectorAll('.food__btn');
const finalMessage = document.querySelector('#final-message');
const finalMessageEm = document.querySelector('#final-message-emoji');

foodButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Получаем эмодзи и текст
    const foodName = button.querySelector('#food-name')?.innerText || button.innerText;
    const foodEmoji = button.querySelector('#food')?.innerText || '';
    
    selectedFood = foodName.toLowerCase().trim();
    selectedFoodEmoji = foodEmoji;

    // Форматируем дату (из 2026-09-15 в 15.09.2026, если нужно)
    let formattedDate = selectedDate;
    if (selectedDate.includes('-')) {
      const parts = selectedDate.split('-');
      formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    }

    // ПОДСТАВЛЯЕМ ТЕКСТ В МОМЕНТ КЛИКА
    if (finalMessageEm) {
      finalMessageEm.textContent = selectedFoodEmoji;
    }
    
    if (finalMessage) {
      finalMessage.textContent = `${formattedDate} в ${selectedTime} мы с тобой идём есть ${selectedFood}! ❤️`;
    }

    // Переходим на 6-й шаг
    goToStep(6);
  });
});












function sendTelegramNotification(date, time, food) {
  const token = '8670788847:AAHNtO-2yeUo5iV-VkQas_yxZ4IH_2t92TI';
  const chatId = '8750863740';

  const text = `💖 <b>Ура! Приглашение принято!</b>\n\n` +
               `📅 <b>Дата:</b> ${date}\n` +
               `⏰ <b>Время:</b> ${time}\n` +
               `🍕 <b>Еда:</b> ${food}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML'
    })
  })
  .then(res => res.json())
  .then(data => console.log('Telegram sent:', data))
  .catch(err => console.error('Telegram error:', err));
}



foodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const foodName = button.querySelector('#food-name')?.innerText || button.innerText;
    const foodEmoji = button.querySelector('#food')?.innerText || '';
    
    selectedFood = foodName.toLowerCase().trim();
    selectedFoodEmoji = foodEmoji;

    let formattedDate = selectedDate;
    if (selectedDate.includes('-')) {
      const parts = selectedDate.split('-');
      formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
    }

    if (finalMessageEm) finalMessageEm.textContent = selectedFoodEmoji;
    if (finalMessage) {
      finalMessage.textContent = `${formattedDate} в ${selectedTime} мы с тобой идём есть ${selectedFood}! ❤️`;
    }

    // ОТПРАВЛЯЕМ УВЕДОМЛЕНИЕ В ВАШ ТЕЛЕГРАМ
    sendTelegramNotification(formattedDate, selectedTime, selectedFood);

    goToStep(6);
  });
});