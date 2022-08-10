const character = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 3,
	attack: 40,
	defence: 10,
	special: [
	  {
		 id: 8,
		 name: 'Двойной выстрел',
		 icon: 'http://...',
		 description: 'Двойной выстрел наносит двойной урон'
	  },
	  {
		 id: 9,
		 name: 'Нокаутирующий удар',
		 icon: 'http://...'
		 // <- обратите внимание, описание "засекречено"
	  }
	]
 }
 
 function getUserСharacteristic(obj) {
	const resultArr = [];
 
	const specialArr = obj.special;
 
	specialArr.forEach((item) => {
	  resultArr.push(item);
	  // console.log(item);
	  // const {description = 'Описание недоступно'} = item;
	  // console.log(item.description);
 
	});
 
	console.log(resultArr);
 
 
	return resultArr;
 }
 
 getUserСharacteristic(character);
 
 // Напишите функцию с аргументом-деструктором, которая извлекает массив с нужными полями (id, name, description, icon) из объекта, а если значения для поля description нет - устанавливает default'ное значение в 'Описание недоступно'. Функция должна возвращать извлечённый массив из объектов с четыремя полями.
 
 // [
 //   {
 //     id: 9,
 //     name: 'Нокаутирующий удар',
 //     icon: 'http://...',
 //     description: 'Описание недоступно'
 //   }
 // ]