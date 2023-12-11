function redirToLogin(){
    window.location.href = "login.html"
}
function redirToMain(){
    window.location.href = "index.html"
}
function redirToRegistration(){
    window.location.href = "registration.html"
}
function request(){
    location.href = "#main-footer"
}
function aboutUs(){
    location.href = "#first-main-h1"
}
function commandWork(){
    location.href = "#fourth-main-div"
}
function goToTg(){
    window.location.href="https://t.me/sashasiukh";
}
function goToFb(){
    window.location.href="https://www.facebook.com/?locale=uk_UA";
}
function goToInst(){
    window.location.href="https://instagram.com/sasha_siukh04?igshid=OGQ5ZDc2ODk2ZA==";
}
function redirToDashBoard(){
    window.location.href = "dashboard.html"
}

// Дата та час
var date = new Vue({
    el: '#dash-header-time-div',
    data: {
        date: '',
        time: ''
    },
    methods: {
        getCurrentTime: function() {
            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();

            // Форматуємо час, щоб забезпечити відображення двоцифрових чисел
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            // Повертаємо форматований час
            return hours + ":" + minutes + ":" + seconds;
        },

        getCurrentDate: function(){
            var currentDate = new Date();
            var date = currentDate.getDate();
            var month = currentDate.getMonth() + 1;
            var years = currentDate.getFullYear();

            return date + "." + month + "." + years;
        }
    },
    mounted: function() {
        // Оновлюємо значення кожну секунду
        setInterval(() => {
            this.time = this.getCurrentTime();
            this.date = this.getCurrentDate();
        }, 1000);
    }
});

// ---------------------------------------calendar
new Vue({
    el: '#dash-calendar',
    data: {
        currentMonth: '',
        weeks: [],
        daysOfWeek: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        selectedDate: null,
        currentDate: new Date(),
    },
    mounted() {
        this.updateCalendar();
    },
    methods: {
        updateCalendar() {
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            this.currentMonth = new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' });

            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

            let dayCount = 1;
            this.weeks = [];

            for (let i = 0; i < 6; i++) {
                const week = [];

                for (let j = 0; j < 7; j++) {
                    if ((i === 0 && j < firstDayOfMonth) || dayCount > lastDayOfMonth) {
                        week.push({ day: '' });
                    } else {
                        week.push({ day: dayCount, date: new Date(year, month, dayCount) });
                        dayCount++;
                    }
                }

                this.weeks.push(week);
            }
        },
        prevMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.updateCalendar();
        },
        nextMonth() {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.updateCalendar();
        }
    },
});





// Функція для збереження даних реєстрації
function saveRegistrationData(name, email, password) {
    const registrationData = {
        name: name,
        email: email,
        password: password
    };
    localStorage.setItem('registrationData', JSON.stringify(registrationData));
}

// Функція для отримання збережених даних реєстрації
function getSavedRegistrationData() {
    const savedData = localStorage.getItem('registrationData');
    return savedData ? JSON.parse(savedData) : null;
}

// Функція для заповнення форми даними, якщо вони були збережені
function fillRegistrationForm() {
    const savedData = getSavedRegistrationData();
    if (savedData) {
        document.getElementById('registration-input-name').value = savedData.name;
        document.getElementById('registration-input-email').value = savedData.email;
        document.getElementById('registration-input-password').value = savedData.password;
    }
}

// Виклик функції для заповнення форми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fillRegistrationForm);

// Функція для реєстрації
function register() {
    const name = document.getElementById('registration-input-name').value;
    const email = document.getElementById('registration-input-email').value;
    const password = document.getElementById('registration-input-password').value;

    // Збереження даних реєстрації
    saveRegistrationData(name, email, password);

    // Ваш код для реєстрації користувача на сервері або локально
    console.log('Registered:', name, email, password);
}

// Функція для збереження даних входу
function saveLoginData(email, password) {
    const loginData = {
        email: email,
        password: password
    };
    localStorage.setItem('loginData', JSON.stringify(loginData));
}

// Функція для отримання збережених даних входу
function getSavedLoginData() {
    const savedData = localStorage.getItem('loginData');
    return savedData ? JSON.parse(savedData) : null;
}

// Функція для перевірки, чи користувач ще не зареєстрований
function isUserRegistered(email, password) {
    const savedData = getSavedRegistrationData();
    return savedData && savedData.email === email && savedData.password === password;
}

// Функція для входу
function login() {
    const email = document.getElementById('login-input-email').value;
    const password = document.getElementById('login-input-password').value;

    // Перевірка, чи користувач ще не зареєстрований
    if (isUserRegistered(email, password)) {
        // Збереження даних входу
        saveLoginData(email, password);

        // Ваш код для входу користувача на сервері або локально
        console.log('Logged in:', email, password);
    } else {
        console.log('Invalid credentials. Please register first.');
    }
}

// Функція для заповнення форми даними входу, якщо вони були збережені
function fillLoginForm() {
    const savedData = getSavedLoginData();
    if (savedData) {
        document.getElementById('login-input-email').value = savedData.email;
        document.getElementById('login-input-password').value = savedData.password;
    }
}

// Виклик функції для заповнення форми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', fillLoginForm);




function showModalAddTask(){
    var element = document.getElementById('modal-add-task');
     element.style.display = 'flex';
}


function showModalNote(){
    var element = document.getElementById('modal-window-note');
    element.style.display = 'flex';

}
function closeModalNote(){
    var element = document.getElementById('modal-window-note');
    element.style.display = 'none';
}

var selectedColor = ''; // Глобальна змінна для збереження вибраного кольору

// Завантажити замітки з localStorage при завантаженні сторінки
window.onload = function() {
    for (var i = 1; i <= 5; i++) {
        var textElement = document.getElementById('notes-text-' + i);
        var containElement = document.getElementById('container-notes-' + i);

        var savedText = localStorage.getItem('noteText-' + i);
        var savedColor = localStorage.getItem('noteColor-' + i);

        if (savedText && savedColor) {
            textElement.innerHTML = savedText;
            containElement.style.backgroundColor = savedColor;
            containElement.style.display = 'flex';
        }
    }
};

function getColorNote(color) {
    selectedColor = color;
}

function createNote() {
    var textValue = document.getElementById('note-textarea').value;

    for (var i = 1; i <= 5; i++) {
        var textElement = document.getElementById('notes-text-' + i);
        var containElement = document.getElementById('container-notes-' + i);

        if (textValue !== '' && textElement.innerHTML === '') {
            textElement.innerHTML = textValue;
            containElement.style.backgroundColor = selectedColor;
            containElement.style.display = 'flex';

            // Зберегти замітку в localStorage
            localStorage.setItem('noteText-' + i, textValue);
            localStorage.setItem('noteColor-' + i, selectedColor);

            break;  // Вийти з циклу, якщо знайдено вільний контейнер
        }
    }

    var textArea = document.getElementById('note-textarea');
    textArea.value = '';
}

function closeNote(index) {
    var contain = document.getElementById('container-notes-' + index);
    contain.style.display = 'none';
    var text = document.getElementById('notes-text-' + index);
    text.innerHTML = '';

    // Очистити замітку з localStorage при закритті
    localStorage.removeItem('noteText-' + index);
    localStorage.removeItem('noteColor-' + index);
}

