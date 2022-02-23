const API_KEY = '74f8b1aa2aadff557ae09a875c561e04';

document.getElementById('search-button').addEventListener('click', function () {
    const searchValue = document.getElementById('search-field').value;
    document.getElementById('search-field').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayName(data))
    
})
const displayName = (name) => {
    console.log(name)
    const cityName = document.getElementById('city-name');
    cityName.innerText = name.name;
    
    const temp = document.getElementById('temp');
    temp.innerText = name.main.temp;
}