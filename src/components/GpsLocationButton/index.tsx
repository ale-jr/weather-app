/*
O que este componente faz?
    Da ao usuário a opção de selecionar a cdade pela localização ao invés de digitar na caixa de texto

Qual a responsabilidade dele?
  * Perguntar ao usuário se ele quer utilizar sua localização
  * Retornar a latitute e logitude do usuário como callback para `Select Location` chamar a API
*/
import React from 'react'
import Button from '@material-ui/core/Button'
import LocationIcon from '@material-ui/icons/GpsFixed'
import LocationErrorIcon from '@material-ui/icons/GpsOff'

import {useStyles} from './styles'

interface IProps {
    onLocationAcquired(position:Position): void
}


const GpsLocation : React.FC<IProps> = ({onLocationAcquired}) => {
    const classes = useStyles()
    const [locationError,setLocationError] = React.useState()

    const onLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(onLocationAcquired,setLocationError)
        }
    }
    if(!navigator.geolocation) return <></>

    return <div className={classes.right}>
    <Button size='small' onClick={onLocationClick} disabled={locationError ? true : false}>
    {locationError ? 
        <><LocationErrorIcon className={classes.extendedIcon}/> Localização desativada</>:
        <><LocationIcon className={classes.extendedIcon}/> Usar localização</>
    }
    </Button>
    </div>
}

export default GpsLocation