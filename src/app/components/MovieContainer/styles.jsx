import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  MovieContainer: {
    minWidth: '600px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: theme.palette.primary.contrastText,
    border: 'solid 2px var(--red)',
    padding: '0',
    margin: 0,
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.primary.main,
      flexDirection: 'column',
      margin: 0,
      border: 'none',
      borderTop: 'solid 2px var(--red)',
      borderBottom: 'solid 2px var(--red)',
    },
  },
  ImgContainer: {
    height: '600px',
    '& img': {
      objectFit: 'cover',
      height: '100%',
      minWidth: '400px',
    },
    [theme.breakpoints.down('xs')]: {
      '& img': {
        objectFit: 'cover',
        width: '100%',
      },
    },
  },
  MovieInfo: {
    padding: '20px',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  Buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    '& button': {
      marginRight: '20px',
      zIndex: 0,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around',
      alignItems: 'center',
      '& button': {
        padding: '10px 30px',
        marginTop: '20px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      '& .makeStyles-Btn-9': {
        padding: '10px 30px',
        margin: 0,
      },
    },
  },
  Modal: {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--grey)',
    '& iframe': {
      width: '120vh',
      height: 'calc(120vh / 16 * 9)',
    },
  },
  Overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'var(--modal)',
  },
}));

export default useStyles;
