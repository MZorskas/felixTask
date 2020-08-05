import React, { useContext, useState } from 'react';
import useStyles from './styles.jsx';
import { Link, useHistory, useLocation } from 'react-router-dom';

// Context
import { UserContext } from '../../context/UserContext';

// Components
import Button from '../Button';

// Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { ThemeContext } from '../../context/ThemeContext';

function Header() {
  // Context
  const { logout, token } = useContext(UserContext);
  const { changeCurrentTheme } = useContext(ThemeContext);
  const history = useHistory();
  const location = useLocation();

  // Material ui
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    logout(token);
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (URL) => {
    if (URL) {
      setAnchorEl(null);
      history.push(URL);
    } else {
      setAnchorEl(null);
    }
  };

  const handleChangeCurrentTheme = (URL) => {
    setAnchorEl(null);
    changeCurrentTheme();
  };

  console.log(location.pathname);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <nav className={classes.Navbar}>
          <Link to="/" className={classes.Logo}>
            FELIX
          </Link>
          <div className={classes.NavLinks}>
            {isMobile ? (
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.MenuButton}
                  color="primary"
                  onClick={handleMenu}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  className={classes.Menu}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => handleMenuClick(null)}
                >
                  <MenuItem onClick={handleChangeCurrentTheme}>
                    Change theme
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/favorites')}>
                    Favorites
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/content')}>
                    Content
                  </MenuItem>
                  {token ? (
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  ) : (
                    <MenuItem onClick={() => handleMenuClick('/content')}>
                      Sign In
                    </MenuItem>
                  )}
                </Menu>
              </Toolbar>
            ) : (
              <>
                <Button
                  navigationLink
                  onClick={changeCurrentTheme}
                  buttonStyle="solid"
                  buttonSize="small"
                >
                  ChangeTheme
                </Button>
                {location.pathname != '/favorites' && (
                  <Button
                    navigationLink
                    to="/favorites"
                    buttonStyle="solid"
                    buttonSize="small"
                  >
                    Favorites
                  </Button>
                )}
                {token && location.pathname != '/content' && (
                  <Button
                    navigationLink
                    to="/content"
                    buttonStyle="solid"
                    buttonSize="small"
                  >
                    Content
                  </Button>
                )}
                {!token ? (
                  <Button
                    to="/login"
                    navigationLink
                    buttonStyle="solid"
                    buttonSize="small"
                  >
                    Sign In
                  </Button>
                ) : (
                  <Button
                    navigationLink
                    buttonStyle="solid"
                    buttonSize="small"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </>
            )}
          </div>
        </nav>
      </AppBar>
    </div>
  );
}

export default Header;
