// елементи  меню
const drinksHeader = document.getElementById('drinks-header');
const drinksList = document.getElementById('drinks-list');
const mainDishesHeader = document.getElementById('main-dishes-header');
const mainDishesList = document.getElementById('main-dishes-list');
const snacksHeader = document.querySelector('#snacks-header');
const snacksList = document.getElementsByClassName('hidden')[2];
const categoryHeaders = document.querySelectorAll('.category-header');


categoryHeaders.forEach(header => {
    
    header.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#a73e3e'; 
    });


    header.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#b84c4c'; 
    });
});

// розкриття/скриття
function toggleCategory(header, list) {
    header.addEventListener('click', function() {
        list.classList.toggle('hidden');
    });
}
toggleCategory(drinksHeader, drinksList);
toggleCategory(mainDishesHeader, mainDishesList);
toggleCategory(snacksHeader, snacksList);


function addHoverEffectToItems(list) {
  const menuItems = list.getElementsByTagName('li'); 
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#d4a0a0'; 
    });

    menuItems[i].addEventListener('mouseout', function() {
      this.style.backgroundColor = ''; 
    });
  }
}
addHoverEffectToItems(drinksList); 
addHoverEffectToItems(mainDishesList);
addHoverEffectToItems(snacksList);

//  поле зворотного зв'язку
const feedbackTextarea = document.getElementById('feedback');
const feedbackStatus = document.getElementById('feedback-status');

feedbackTextarea.addEventListener('input', function() {
    if (feedbackTextarea.value.length > 0) {
        feedbackStatus.textContent = "Дякуємо за ваші побажання!";
    } else {
        feedbackStatus.textContent = "";
    }
});


const submitButton = document.querySelector('#submit-button'); //  querySelector

submitButton.addEventListener('click', function() {
    alert('Дякуємо за ваші побажання!');

    // Очищення 
    feedbackTextarea.value = '';
    
    // Очищення повідомлення 
    feedbackStatus.textContent = '';
});

// Додаємо onclick подію для submitButton
submitButton.onclick = function() {
    alert('Ви натиснули на кнопку!');
};
