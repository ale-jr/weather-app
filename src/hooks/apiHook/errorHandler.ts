import {AxiosError} from 'axios'
import {IHumanizedError} from './types'

export const resumeAxiosErrorBase = (humanize : (code : any) => string) =>  (error: AxiosError): IHumanizedError  => {
    const title = randomErrorTitle()
    if (error.response) {
        
        return {
            title,
            message: humanize(error.response.status)
        }
      } else if (error.request) {
            return {
                title: 'Você está conectado?',
                message: 'Não foi possível obter informações, verifique sua internet ;)'
            }
      } else {
        return {
            title,
            message: 'Ocorreu um erro ao obter dados'
        }
      }
}

export const randomErrorTitle = () => {
    const titles = [
        'Essa não!',
        'Todo mundo erra :/',
        'Ops!',
        'Eita!'
    ]
    const randomIndex =Math.floor(Math.random() * (titles.length)) 
    return titles[randomIndex]
}


export const humanizeStatusCodeError = (status: any) => {
    let humanizedStatusCodeError = ''
        switch(status){
            case 404:
                humanizedStatusCodeError = 'O recurso não foi encontrado'
            break
            case 401:
                humanizedStatusCodeError = 'Você não tem autorização para isso'
            break
            case 500:
                humanizedStatusCodeError = 'Ocorreu um erro interno'
            break
            default :
                humanizedStatusCodeError = 'Ocorreu um erro inesperado'
        }
        return humanizedStatusCodeError
}



export const resumeAxiosError = resumeAxiosErrorBase(humanizeStatusCodeError)
