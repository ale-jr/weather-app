/*
O que este componente faz?
    Junta tudo :D

Qual a responsabilidade dele?
  * Gerenciar contexts e passar o estado de weather quando houver resposta da API, alé disso, temos algumas transições por aqui também
*/
import React from 'react'
import Grow from '@material-ui/core/Grow'
import ThemeProvider from './contexts/ThemeContext'
import BackgroundProvider from './contexts/BackgroundContext'
import SelectLocation from './components/SelectLocation'
import Weather from './components/Weather'

import { WeatherInfo } from './components/SelectLocation/types'
const App: React.FC = () => {

  const [weather, setWeather] = React.useState<WeatherInfo>()
  const resetWeather = () => setWeather(undefined)
  return (
    <ThemeProvider>
      <BackgroundProvider>
        <Grow in={weather ? false : true} unmountOnExit mountOnEnter>
          <div><SelectLocation onWeatherSet={setWeather} /></div>
        </Grow>
        <Grow in={weather ? true : false} unmountOnExit mountOnEnter>
          <div><Weather weather={weather} goBack={resetWeather} /></div>
        </Grow>
      </BackgroundProvider>
    </ThemeProvider>
  )
}

export default App
