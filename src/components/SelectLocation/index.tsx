/*
O que este componente faz?
    Define os dados de clima, seja por localização ou seja pelo nome da cidade

Qual a responsabilidade dele?
  * Juntar os callbacks do form de cidade, bem como o status da localização do usuário (apenas se o usuário permitir)
  * Fazer a requisião para o OpenWeatherMap afim de retornar os dados para o componente App (lifting the state!)
*/
import React from 'react'
import Typed from 'react-typed'
import Typography from '@material-ui/core/Typography'
import SearchBox from '../SearchBox'
import { useStyles } from './styles'
import useApi from '../../hooks/apiHook'
import GpsButton from '../GpsLocationButton'
import resumeAxiosError from './errorHandler'
import weatherAdapter from './weatherAdapter'
import { ThemeContext } from '../../contexts/BackgroundContext'
import { IProps } from './types'

//Definições gerais para requisitar dados no OpenWeatherMap
const apiDefaultParameters = {
    appid: window.env.openWeatherMapKey,
    lang: 'pt_br',
    units: 'metric',
}

const SelectLocation: React.FC<IProps> = ({ onWeatherSet }) => {
    const classes = useStyles()
    const [request, setRequest] = useApi(resumeAxiosError)
    const { setRandom } = React.useContext(ThemeContext)

    React.useEffect(() => {
        if (request.data) {
            const weather = weatherAdapter(request.data)
            onWeatherSet(weather)
            setRandom(weather.main)
        }
    }, [request])

    //Calback de busca
    const onSearch = (city: string) => {
        setRequest({
            method: 'GET',
            url: window.env.openWeatherMapEndpoint,
            params: {
                ...apiDefaultParameters,
                q: city
            }
        })
    }
    //Calback de localização
    const onLocationAcquired = (positon: Position) => {
        setRequest({
            method: 'GET',
            url: window.env.openWeatherMapEndpoint,
            params: {
                ...apiDefaultParameters,
                lat: positon.coords.latitude,
                lon: positon.coords.longitude
            }
        })
    }

    return <div>
        <Typography variant="h4">Será que <Typed
            strings={[
                'vai chover?',
                'vai fazer sol?',
                'preciso do casaco?',
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
        /></Typography>
        <SearchBox onSearch={onSearch} loading={request.loading} />
        {request.error && <Typography variant="caption"><strong>{request.error.title}</strong> {request.error.message}</Typography>}
        <GpsButton onLocationAcquired={onLocationAcquired} />
    </div>
}

export default SelectLocation