import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  Btn: {
    color: 'var(--white)',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    boxSizing: 'border-box',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    lineHeight: '19px',
    zIndex: '2',
    textDecoration: 'none',
    '&:focus': {
      outline: '0',
    },
  },
  BtnSmall: {
    padding: '10px 20px',
  },
  BtnMedium: {
    padding: '10px 35px',
  },
  BtnLarge: {
    padding: '10px 45px',
  },
  BtnSolid: {
    border: '1px solid var(--red)',
    backgroundColor: 'var(--red)',
    color: 'var(--white)',
  },
  BtnOutline: {
    border: '1px solid var(--red)',
    backgroundColor: 'transparent',
    color: 'var(--white)',
  },
  NavigationLinkBtn: {
    marginLeft: '30px',
  },
});

export default useStyles;
