import {resumeAxiosErrorBase} from '../../hooks/apiHook/errorHandler'

//Essa função sobrescreve a função para exibir erros mais "humanizados" ao usuário, recebe o statuscode como parâmetro e retorna o erro como string
const humanizeStatusCodeError = (status: any) => {
    let humanizedStatusCodeError = ''
        switch(status){
            case 404:
                humanizedStatusCodeError = 'Cidade não encontrada'
            break
            case 401:
                humanizedStatusCodeError = 'Chave de acesso inválida'
            break
            case 500:
                humanizedStatusCodeError = 'Ocorreu um erro interno'
            break
            case 429:
                humanizedStatusCodeError = 'Estamos recebendo muitas requisições! tente novamente em breve'
            break
            default :
                humanizedStatusCodeError = 'Ocorreu um erro inesperado'
        }
        return humanizedStatusCodeError
}

//Retorna uma função com o erro humanizado além de outros erros gerais como conexão e erro ao definir a requisição
export default resumeAxiosErrorBase(humanizeStatusCodeError)
