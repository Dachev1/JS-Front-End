function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const locationInputElement = document.getElementById('location');
    const submitInputElement = document.getElementById('submit');

    const weatherSymbols = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': ' &#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176',   // °

    }

    submitInputElement.addEventListener('click', (e) => {
        const searchedLocationName = locationInputElement.value;

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                const findLocation = data.find(location => location.name === searchedLocationName);

                if (findLocation) {
                    const urlTodayWeather = `http://localhost:3030/jsonstore/forecaster/today/${findLocation.code}`;
                    const urlUpcomingWeather = `http://localhost:3030/jsonstore/forecaster/upcoming/${findLocation.code}`;

                    const forecastElement = document.getElementById('forecast');
                    forecastElement.style.display = 'block';

                    fetch(urlTodayWeather)
                        .then(response => response.json())
                        .then(data => {
                            const currentWeatherConditions = document.getElementById('current');

                            let divElement = document.createElement('div')
                            divElement.className = 'forecasts'
                            divElement.innerHTML = `
                            <span class="condition symbol">${weatherSymbols[data.forecast.condition]}</span>
                            <span class="condition">
                                <span class="forecast-data">${data.name}</span>
                                <span class="forecast-data">${data.forecast.low}${weatherSymbols['Degrees']}/${data.forecast.high}${weatherSymbols['Degrees']}</span>
                                <span class="forecast-data">${data.forecast.condition}</span>
                            </span>
                            `
                            currentWeatherConditions.appendChild(divElement);
                        })

                    fetch(urlUpcomingWeather)
                        .then(response => response.json())
                        .then(data => {
                            let upcomingWeatherConditions = document.getElementById('upcoming')

                            let divElement = document.createElement('div')
                            divElement.className = 'forecast-info'
                            for (let dayForecast of data.forecast) {
                                let newSpan = document.createElement('span')
                                newSpan.className = 'upcoming'
                                newSpan.innerHTML = `
                                <span class="symbol">${weatherSymbols[dayForecast.condition]}</span>
                                <span class="forecast-data">${dayForecast.low}${weatherSymbols['Degrees']}/${dayForecast.high}${weatherSymbols['Degrees']}</span>
                                <span class="forecast-data">${dayForecast.condition}</span>
                                `
                                divElement.appendChild(newSpan)
                            }

                            upcomingWeatherConditions.appendChild(divElement)
                        })
                }
            })
    })
}

attachEvents();
