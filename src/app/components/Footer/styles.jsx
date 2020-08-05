import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  CardList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  Footer: {
    width: '100%',
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
    boxSizing: 'border-box',
    padding: '0px 20px',

    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '100%',
      color: theme.palette.primary.main,
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: '0px 0px',
    },
  },
}));

export default useStyles;
