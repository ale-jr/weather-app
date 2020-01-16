/*
O que este componente faz?
  Exibe os dados de clima

Qual a responsabilidade dele?
  Apenas exibir e fazer algumas manipulações para horários e datas (é levado em conta o timezone do local a ser exibido :D)
*/
import React from 'react'
import { WeatherInfo } from '../SelectLocation/types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStyles } from './styles'
import { dateString, onlyTime } from './dateUtils'

interface IProps {
  weather?: WeatherInfo,
  goBack(): void
}

const Weather: React.FC<IProps> = ({ goBack, weather }) => {
  const classes = useStyles()

  if (!weather) return null

  return <div className={classes.root}>
    <Typography variant='h4'>{weather.city}, {weather.country}</Typography>
    <Typography variant='h6' className={classes.lightText}>{dateString(weather.timestamp, weather.timezone)}</Typography>
    <FontAwesomeIcon icon={(weather.icon as any)} size="8x" />
    <Grid container
      direction="row"
      justify="center"
      alignItems="flex-end"
      spacing={3}>
      <Grid sm={4} item>
        <Typography variant='h4' >{weather.temp.min}ºC</Typography>
        <Typography variant='overline' >Mínima</Typography>
      </Grid>
      <Grid sm={4} item>
        <Typography variant='h2' >{weather.temp.current}ºC</Typography>
        <Typography variant='overline' >Sesanção de {weather.temp.feels_like}ºC</Typography>
      </Grid>
      <Grid sm={4} item>
        <Typography variant='h4' >{weather.temp.max}ºC</Typography>
        <Typography variant='overline' >Máxima</Typography>
      </Grid>
    </Grid>
    <Typography variant='h5' className={classes.capitalize}>{weather.description}</Typography>
    <hr />
    <Grid container>
      <Grid xs={6} lg={6} item className={classes.infoTitle}>Umidade:</Grid>
      <Grid xs={6} lg={6} item className={classes.infoValue}>{weather.humidity}%</Grid>
      <Grid xs={6} lg={6} item className={classes.infoTitle}>Nascer do sol:</Grid>
      <Grid xs={6} lg={6} item className={classes.infoValue}>{onlyTime(weather.sunrise, weather.timezone)}</Grid>
      <Grid xs={6} lg={6} item className={classes.infoTitle}>Por do sol:</Grid>
      <Grid xs={6} lg={6} item className={classes.infoValue}>{onlyTime(weather.sunset, weather.timezone)}</Grid>
    </Grid>
    <Button onClick={goBack}>Pesquisar outra cidade</Button>
  </div>

}

export default Weather