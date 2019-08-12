"use strict";
const credits = 23580;
const pricePerDroid = 3000;
let message;

const quantity = prompt("Введите количество дроидов");

  if (quantity === null ) {
message='Отменено пользователем!';
  } else {
      let totalPrice = Number(quantity) * pricePerDroid;

      if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';
      } 
      
      else { 
          let money = credits - totalPrice; 
          message = `Вы купили ${quantity} дроидов, на счету осталось ${money} кредитов.`;

      }
       
  }

  alert(message);
