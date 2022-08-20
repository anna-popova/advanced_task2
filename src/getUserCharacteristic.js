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
		description: 'Двойной выстрел наносит двойной урон',
		},
		{
		id: 9,
		name: 'Нокаутирующий удар',
		icon: 'http://...',
		// <- обратите внимание, описание "засекречено"
		},
	],
};

function getUserСharacteristic({
 id, name, icon, description = 'Описание недоступно',
}) {
	const resultArr = [];

	character.special.forEach((item) => {
		item.description = item.description ? item.description : 'Описание недоступно';

		resultArr.push(item);
	});

	return resultArr;
}

console.log(getUserСharacteristic(character.special));
