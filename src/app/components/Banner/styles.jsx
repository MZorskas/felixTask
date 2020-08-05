import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  BannerContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      width: '100%',
      minHeight: 300,
    },
    '& h2': {
      color: 'var(--white)',
      fontWeight: '600',
      padding: '20px 20px',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      textShadow: '-1px 8px 7px rgba(0, 0, 0, 0.39)',
    },
  },
  BannerOverlay: {
    position: 'absolute',
    textAlign: 'center',
  },
});

export default useStyles;
