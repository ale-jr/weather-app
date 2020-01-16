/*
O que este componente faz?
    Deixa o usuário digitar a cidade na qual ele quer pesquisar

Qual a responsabilidade dele?
  * Retornar a cidade após o usuário clicar no botão ou dar enter, assim `SelectLocation` pode prosseguir com a chamada da API
*/
import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import SearchIcon from '@material-ui/icons/Search'

import { useStyles } from './styles'

interface IProps {
  onSearch(search: string): void
  loading?: boolean
}

const SearchBox: React.FC<IProps> = ({ onSearch, loading }) => {
  const [search, setSearch] = React.useState('')
  const [error, setError] = React.useState('')
  const classes = useStyles()

  //Effect para limpar erros
  React.useEffect(() => {
    if (search && error)
      setError('')
  }, [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search)
      onSearch(search)
    else
      setError('Digite sua cidade')
  }



  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField label="Qual sua cidade?" value={search} onChange={handleChange} className={classes.textField} disabled={loading} error={error ? true : false} helperText={error} />
      <IconButton className={classes.button} type="submit" disabled={loading}>{loading ? <CircularProgress size={28} /> : <SearchIcon />}</IconButton>
    </form>
  )
}

export default SearchBox