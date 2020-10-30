import React from 'react';
import './Header.css';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackButton from '@material-ui/icons/ArrowBackIos'
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackButton className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
            
            <Link to="/">
                <img
                    className="header__logo"
                    alt="Tinder Logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                />
            </Link>
            <Link to="/chats">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;