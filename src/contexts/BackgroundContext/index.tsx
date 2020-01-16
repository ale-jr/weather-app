/*
O que este context faz?
    Habilita a opção para alterar o plano de fundo utilizando imagens aleatórias ou definindo um src

Qual a responsabilidade dele?
  * Deixar as coisas bonitas e facilitar na hora de juntar tudo no layout
*/
import React from 'react'
import Fade from '@material-ui/core/Fade'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import {IBackgroundContext} from './types'
import {useStyles} from './styles'
import useApi from '../../hooks/apiHook'
export const BackgroundContext = React.createContext<IBackgroundContext>({
    setSrc: () => {},
    setRandom: () => {}
})


const BackgroundContextProvider : React.FC = ({children}) => {
    const [src,setSrc] = React.useState<string>()
    const [showImg,setShowImg] = React.useState(false)
    const classes = useStyles()
    const [request,setRequest] = useApi()

    //Define uma imagem aleátoria ao montar o componente
    React.useEffect(()=>{
        setRandom('Rain drops')
    },[])

    //Faz uma transição entre imagens quando há troca da mesma
    React.useEffect(()=>{
        setShowImg(false)
        setTimeout(()=>{setShowImg(true)},100)
    },[src])

    //Define o src quando uma imagem aleatóriaé obtida pela api
    React.useEffect(()=>{
        if(request.data){
            setSrc(request.data.urls.regular)
        }
    },[request])

    //Chama a API do Unsplash para obter uma imagem aleatória com os critérios em query (nao obrigatórios)
    const setRandom = (query: string | undefined = undefined) => {
        setShowImg(false)
        setRequest({
            url: window.env.unsplashEndpoint,
            method: 'GET',
            params: {
                client_id: window.env.unsplashKey,
                orientation: 'landscape',
                query: query
            }
        })
    }

    return <BackgroundContext.Provider value={{
        src,
        setSrc,
        setRandom
    }}>
    <div className={classes.root}>
    <Fade in={showImg} timeout={200}><img src={src} className={classes.img}/></Fade>
    {request.data && <div className={classes.credits} style={{color:request.data.color}}>Foto por <a href={request.data.links.self} style={{color:request.data.color}}>{request.data.user.name}</a> via <a href={request.data.links.self} style={{color:request.data.color}}>Unsplash</a></div>}
    <Container className={classes.container} maxWidth='sm'>
        <Paper className={classes.paper}>
        {children}
        </Paper>
    
    </Container>
    </div>
        
    </BackgroundContext.Provider>
}

export default BackgroundContextProvider