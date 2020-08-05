import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

// Context
import { UserContext } from '../../context/UserContext';

// Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.tertiary,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, token, error, loading } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(() => {
    alert('You can login using username: tester password: netflix');
  }, []);

  useEffect(() => {
    if (token) {
      history.replace(
        location.state ? location.state.referrer.pathname : '/content'
      );
    }
  }, [token]);

  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            autoFocus
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {loading ? 'Loading...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
