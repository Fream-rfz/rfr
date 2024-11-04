// Функция для вычисления результата
function calculate() {
  // Получаем значения из полей ввода
  const number1 = parseFloat(document.getElementById('number1').value); // Первое число
  const number2 = parseFloat(document.getElementById('number2').value); // Второе число
  const operation = document.getElementById('operation').value; // Операция

  let result; // Переменная для хранения результата

  
  switch (operation) {
      case '+': 
          result = number1 + number2
          break;
      case '-': 
          result = number1 - number2
          break;
      case '*': 
          result = number1 * number2; 
          break;
      case '/': 
          if (number2 === 0) {
              alert("Ошибка: Деление на ноль!");
              return; 
          }
          result = number1 / number2; 
          break;
      default: 
          alert("Неправильная операция!"); 
          return; 
  }


  document.getElementById('result').innerText = "Результат: " + result
}
