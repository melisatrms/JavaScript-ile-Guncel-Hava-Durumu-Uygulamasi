const url= 'https://api.openweathermap.org/data/2.5/'
const key= '710a44f0b779e450566db333bd198eaf'

const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(cityBar.value)
}
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let sicaklik = document.querySelector('.sicaklik')
    sicaklik.innerText = `${Math.round(result.main.temp)}°C`

     let durum = document.querySelector('.durum')
     durum.innerText = result.weather[0].description.toUpperCase()

     let minmax = document.querySelector('.minmax')
     minmax.innerText = `${Math.round(result.main.temp)}°C / ${Math.round(result.main.temp)}°C`

   
}

const cityBar = document.getElementById('cityBar')
cityBar.addEventListener('keypress',setQuery)