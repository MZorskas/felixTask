import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  CreditCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    '& img': {
      width: '32px',
      height: '22px',
      borderRadius: '4px',
    },
    [theme.breakpoints.down('xs')]: {
      '& img': {
        width: '64px',
        height: '44px',
        borderRadius: '4px',
      },
    },
  },
}));

export default useStyles;
