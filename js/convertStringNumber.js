export const convertStringNumber = (str) => {
	const noSpaceStr = str.replace(/\s+/g, ''); //заменили все пробелы на пустую строку
	const num = parseFloat(noSpaceStr);

	if(!isNaN(num) && isFinite(num)) {
		return num;
	}else{
		return false;
	}
};