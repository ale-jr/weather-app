import { WeatherInfo } from './types'

import { 
    faSun,
    faMoon,
    faCloudSun,
    faCloudMoon,
    faCloud,
    faCloudRain,
    faCloudSunRain,
    faCloudMoonRain,
    faBolt,
    faSnowflake,
    faSmog
 } from '@fortawesome/free-solid-svg-icons'


 //De Para dos icones
const iconCodes = {
    ['01d']: faSun,
    ['01n']: faMoon,
    ['02d']: faCloudSun,
    ['02n']: faCloudMoon,
    ['03d']: faCloud,
    ['03n']: faCloud,
    ['04d']: faCloud,
    ['04n']: faCloud,        
    ['09d']: faCloudRain,
    ['09n']: faCloudRain,
    ['10d']: faCloudSunRain,
    ['10n']: faCloudMoonRain,
    ['11d']: faBolt,
    ['11n']: faBolt,
    ['13d']: faSnowflake,
    ['13n']: faSnowflake,
    ['50d']: faSmog,
    ['50n']: faSmog
}

//Essa função é responsavel por organizar os dados da API afim de deixar os dados mais estruturados para o componente `Weather`
export default (data: any): WeatherInfo =>({
        city: data.name,
        country: data.sys.country,
        temp: {
            current: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max),
        },
        humidity: data.main.humidity,
        //Icon obtem o icone do objeto acima e retorna um SVG
        icon: (iconCodes as any)[data.weather[0].icon],
        main: data.weather[0].main,
        description: data.weather[0].description,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        timezone: data.timezone,
        timestamp: data.dt
    })