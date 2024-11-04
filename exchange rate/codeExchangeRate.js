// элементы HTML
const baseCurrency = document.getElementById('base-currency')
const targetCurrency = document.getElementById('target-currency')
const rateResult = document.getElementById('rate-result')
const getRateButton = document.getElementById('get-rate')

// Функция для получения и отображения курса валют
async function getExchangeRate() {
    // Получаем выбранные валюты
    const base = baseCurrency.value
    const target = targetCurrency.value

    try {
        // подключение к курсу валют
        const response = await fetch(`https://v6.exchangerate-api.com/v6/7e81505eac262bf440a8ac6f/pair/${base}/${target}`);

        // успешно или нет 
        if (!response.ok) throw new Error("Не удалось получить данные о курсе.")

        // Парсим данные
        const data = await response.json()
        // Извлекаем курс обмена
        const rate = data.conversion_rate

        // Отображаем курс обмен
        rateResult.innerText = `Курс обмена: 1 ${base} = ${rate} ${target}`;
    } catch (error) {
        // Если произошла ошибка
        rateResult.innerText = "Ошибка получения данных."
        console.error(error)
    }
}

// обработчик события на кнопку
getRateButton.addEventListener('click', getExchangeRate)