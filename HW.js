const country = document.querySelector('.country')
const capital = document.querySelector('.capital')
const button = document.querySelector('.button')
const input = document.querySelector('.input')
const temperature = document.querySelector('.weather')
const title = document.querySelector('.title')

function weather(arg) {
    if (!!arg){
        fetch(`http://api.weatherapi.com/v1/current.json?key=d731edca6e0e48a9ae341843233103&q=${arg}`)
            .then(res => res.json())
            .then((data) => {
                country.innerText = `Country: ${data.location.country}`
                capital.innerText = `Region: ${data.location.region}`
                temperature.innerText = `Temperature: ${data.current.temp_c}`
                title.innerText = `Feels like:${data.current.feelslike_c}`
            })
        input.innerText = ''
    }
}

button.addEventListener('click', () => {
    if(!!input.value){
        weather(input.value)
    }
})

input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        weather(e.target.value)
    }
})