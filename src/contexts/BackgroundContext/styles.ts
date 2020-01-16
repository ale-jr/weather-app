import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) => createStyles({
    root: {
        display: 'inline-block',
        overflow: 'hiden',
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    img: {
        pointerEvents: 'none',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#2B303A',
        zIndex: -1
    },
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    paper: {
        width: '100%',
        padding: theme.spacing(2)
    },
    credits:{
        pointerEvents: 'none',
        position: 'fixed',
        right: theme.spacing(2),
        bottom: theme.spacing(2),
        zIndex: 0
    }
})

export const useStyles = makeStyles(styles)


