import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) => createStyles({
   root: {
       textAlign: 'center',
       color: '#414645'
   },
   capitalize: {
       textTransform: 'capitalize'
   },
   infoTitle: {
       textAlign: 'right',
       paddingRight: theme.spacing(1)
   },
   infoValue: {
    textAlign: 'left',
    paddingLeft: theme.spacing(1)
   },
   lightText: {
       color: '#979A99'
   }

})

export const useStyles = makeStyles(styles)


