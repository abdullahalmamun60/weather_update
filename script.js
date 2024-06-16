// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={faac80e76b01a96478dcdf62b8524853}
const api_key = 'faac80e76b01a96478dcdf62b8524853' ;
const city = 'Dhaka'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });

