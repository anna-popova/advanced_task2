// export default function getUserСharacteristic(objProperty) {
// 	const resultArr = [];

// 	objProperty.forEach((item) => {
// 		item.description = item.description ? item.description : 'Описание недоступно';

// 		resultArr.push(item);
// 	});

// 	return resultArr;
// }

export default function getUserСharacteristic(object) {
  const resultArr = [];

  object.special.forEach((item) => {
    const {
 id, name, icon, description = 'Описание недоступно',
} = item;
    // console.log(id, name, icon, description);

    const obj = {};
    obj.id = id;
    obj.name = name;
    obj.icon = icon;
    obj.description = description;
    // console.log(obj);

    resultArr.push(obj);
  });

  return resultArr;
}
