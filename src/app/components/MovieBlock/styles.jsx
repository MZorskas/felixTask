import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: theme.palette.primary.light,
    border: '1px solid var(--red)',
    '& button': {
      marginTop: 'auto',
    },
    '& .MuiCardContent-root': {
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'flex-start',
    },
    '& a': {
      color: theme.palette.primary.contrastText,
      fontSize: '24px',
      lineHeight: '28px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    '& p': {
      color: theme.palette.primary.contrastText,
      width: '227px',
      margin: '10px 0px',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical',
    },
  },
  media: {
    height: 230,
    objectFit: 'cover',
    objectPosition: '0 15%',
  },
}));

export default useStyles;
