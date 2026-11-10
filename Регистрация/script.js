
    function checkForm() {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const resultDiv = document.getElementById('result');

        resultDiv.textContent = "";
        resultDiv.className = "";

        if (login.length < 4) {
            resultDiv.textContent = "Ошибка. Логин короткий.";
            resultDiv.className = "error";
            return;
        }
        if (login.includes(" ")) {
            resultDiv.textContent = "Ошибка. Логин с пробелами.";
            resultDiv.className = "error";
            return; 
        }
        if (password.length < 8) {
            resultDiv.textContent = "Ошибка. Пароль короткий.";
            resultDiv.className = "error";
            return; 
        }
        if (!email.includes("@gmail.com") && !email.includes("@mail.ru") && !email.includes("@yandex.ru")) {
            resultDiv.textContent = "Ошибка. Почта некорректная.";
            resultDiv.className = "error";
            return; 
        }

        resultDiv.textContent = "Приятного аппетита!";
        resultDiv.className = "success";

        setTimeout(function() {
            window.location.href = "https://vkusnoitochka.ru/";
        }, 2000); 
    }
    