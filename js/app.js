const API_KEY = '74f8b1aa2aadff557ae09a875c561e04';

document.getElementById('search-button').addEventListener('click', function () {
    const searchValue = document.getElementById('search-field').value;
    document.getElementById('search-field').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayName(data))
    
})
const setInnerText = (id, insideText) => {
    const inputValue = document.getElementById(id);
    inputValue.innerText = insideText;
}
const displayName = (name) => {
    
    // const cityName = document.getElementById('city-name');
    // cityName.innerText = name.name;
    setInnerText('city-name', name.name)
    
    // const temp = document.getElementById('temp');
    // temp.innerText = name.main.temp;
    setInnerText('temp',name.main.temp)

    // const clouds = document.getElementById('clouds');
    // clouds.innerText = name.weather[0].main;
    setInnerText('clouds',name.weather[0].main)
    

    // cloud icon
    const url2 = `http://openweathermap.org/img/wn/${name.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById('cloud-img');
    iconImg.setAttribute('src', url2);
    

}