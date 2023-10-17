export const fetchCharacterDetails = async (name = '', page = '', gender = '', status = '') => {
	const api = `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}&gender=${gender}&status=${status}`;
	const data = await fetch(api);
	const realData = await data.json();
	return realData;
};
