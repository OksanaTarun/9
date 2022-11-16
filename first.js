const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //при запуске дебаггера без указания точек остановки - останавливается на команде debugger, видим присвоенные значения переменным, посчитанную сумму
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //следующая точка остановки, посчитан бонус согласно условию
  return bonus;
};

module.exports = calculateBonus;
