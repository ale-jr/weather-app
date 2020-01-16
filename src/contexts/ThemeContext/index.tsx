/*
O que este context faz?
    Habilita a opção do usuário trocar os temas

Qual a responsabilidade dele?
  * Deixar as coisas bonitas
*/
import React, { Children } from 'react'
import {Theme} from '@material-ui/core/styles'

import {IContextTheme} from './types'
import defaultTheme from '../../theme/default'
import {ThemeProvider} from '@material-ui/core/styles'

export const ThemeContext = React.createContext<IContextTheme>({
    theme: defaultTheme,
    setTheme: () => {}
})

const ThemeContextProvider : React.FC = ({children}) => {
    const [theme,setTheme] = React.useState<Theme>(defaultTheme)

    return <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
    </ThemeContext.Provider>
}

export default ThemeContextProvider