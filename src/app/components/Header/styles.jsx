import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Header: {
    flexGrow: 1,
  },
  MenuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  Menu: {
    color: theme.palette.primary.main,
    '& .MuiMenu-list': {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.light,
      border: '1px solid var(--red)',
      borderRadius: '4px',
    },
  },
  Logo: {
    display: 'inline-block',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: 'var(--red)',
    margin: '0',
    padding: '0',
    fontSize: '40px',
    lineHeight: '100%',
  },
  Navbar: {
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '70px',
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    padding: '0px 20px',
  },
  NavLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
