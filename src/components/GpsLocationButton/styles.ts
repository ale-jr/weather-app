import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) => createStyles({
    right:{
        textAlign: 'right'
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
      },
})

export const useStyles = makeStyles(styles)


