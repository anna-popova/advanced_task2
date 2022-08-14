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
 
 function getUserСharacteristic(objProperty) {
	const resultArr = [];
 
	const specialArr = objProperty;
  // console.log(specialArr);
 
	specialArr.forEach((item) => {
    // console.log(item);
	  // resultArr.push(item);

    //здесь я деструктурирую объекты из массива и назначаю дефолтное значение для description
	  const {id, name, icon, description = 'Описание недоступно'} = item;
    //? вопрос, как теперь эти переменные собрать обратно в массив объектов
	  console.log(id, name, icon, description);
 
	});
 
	console.log(resultArr);
 
 
	return resultArr;
 }
 
 getUserСharacteristic(character.special);
 
 // Напишите функцию с аргументом-деструктором, которая извлекает массив с нужными полями (id, name, description, icon) из объекта, а если значения для поля description нет - устанавливает default'ное значение в 'Описание недоступно'. Функция должна возвращать извлечённый массив из объектов с четыремя полями.
 
 // [
 //   {
 //     id: 9,
 //     name: 'Нокаутирующий удар',
 //     icon: 'http://...',
 //     description: 'Описание недоступно'
 //   }
 // ]