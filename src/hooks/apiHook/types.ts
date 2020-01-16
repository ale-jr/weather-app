import {AxiosError} from 'axios'

export interface IApiResponse {
    loading: boolean
    data?: any
    axiosError?: AxiosError,
    error?: {
        title: string,
        message: string
    } 
}

export interface IHumanizedError {
    title: string
    message: string
}