// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={faac80e76b01a96478dcdf62b8524853}

// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     });

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const searchTemperature = () => {
    const city = document.getElementById("city-name").value
    const api_key = 'faac80e76b01a96478dcdf62b8524853';
// const city = 'Dhaka'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
 fetch (url)
 .then (res => res.json())
 .then (data => displayTemperature(data))
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    //icon setter
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}
