export default function getUserСharacteristic(objProperty) {
	const resultArr = [];

	objProperty.forEach((item) => {
		item.description = item.description ? item.description : 'Описание недоступно';

		resultArr.push(item);
	});

	return resultArr;
}
