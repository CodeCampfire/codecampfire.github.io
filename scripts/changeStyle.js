// Функция переключения стилей
function switchStyle() {
    var styleSwitcher = document.getElementById('style-switcher');
    if (styleSwitcher.getAttribute('href') == 'style1.css') {
        styleSwitcher.setAttribute('href', 'style2.css');
        localStorage.setItem('chosen-style', 'style2.css');
    } else {
        styleSwitcher.setAttribute('href', 'style1.css');
        localStorage.setItem('chosen-style', 'style1.css');
    }
}

// Функция применения сохраненного стиля
function applySavedStyle() {
    var chosenStyle = localStorage.getItem('chosen-style');
    if (chosenStyle) {
        document.getElementById('style-switcher').setAttribute('href', chosenStyle);
    }
}

// Добавление обработчика клика к кнопке
document.getElementById('switch-style').addEventListener('click', switchStyle);

// Применение сохраненного стиля при загрузке страницы
window.onload = applySavedStyle;
