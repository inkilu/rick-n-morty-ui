export const apiCall = async () =>{
    const api = `https://rickandmortyapi.com/api/character/?count=30`
    const data = await fetch(api);
    const realData = await data.json();
    return (realData.results);
}