export interface IProps {
    onWeatherSet(wheather:any): void
}

//Entre a resposta da API e o que vai para o componente, temos um adapter (ver em ./weatherAdapter.ts) para deixar tudo mais organizado, esse é o tipo que foi definido
export interface WeatherInfo {
    city: string
    country: string
    temp: {
        current: number
        feels_like: number
        min: number
        max: number
    }
    humidity: number
    //Icone está como any pois não há tipo definido para o SVG do FontAwesome (lib de icones), então tome muito cuidado ao mexer por aqui
    icon: any
    main: string
    description: string
    //sunrise é um unix timestamp em segundos
    sunrise: number
    //sunset é um unix timestamp em segundos
    sunset: number
    //timezone definida em segundos
    timezone : number
    //timestamp é um unix em segundos, é retornada pela API na hora que a requisiçã foi retornada
    timestamp: number
}