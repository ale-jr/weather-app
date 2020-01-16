import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) => createStyles({
    form: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginTop: theme.spacing(2)
    },
    textField: {
        flexGrow: 1
    }
})

export const useStyles = makeStyles(styles)


