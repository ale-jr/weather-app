import React from 'react'
import axios, {AxiosRequestConfig, AxiosError} from 'axios'

import {resumeAxiosError} from './errorHandler'
import {IApiResponse,IHumanizedError} from './types'

const useApi = (errorHandler: typeof resumeAxiosError = resumeAxiosError) : [IApiResponse,(config: AxiosRequestConfig) => void] => {
    const [state,setState] = React.useState<IApiResponse>({loading:false})
    
    const sendRequest = (config: AxiosRequestConfig) => {
        setState((prevState)=>({...prevState,loading:true}))
        axios(config)
        .then(({data})=>{
            setState({
                data,
                loading: false
            })
        })
        .catch(error=>{
            setState({
                loading: false,
                axiosError: error,
                error: errorHandler(error)
            })
        })
    }

    return [state,sendRequest]
}

export default useApi


