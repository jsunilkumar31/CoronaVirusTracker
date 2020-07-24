
import React from 'react';
import styles from './Header.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import image from '../../images/image.png';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'Home',
    'Profile',
    'My account',
    'Logout',
  ];
  
  const ITEM_HEIGHT = 48;
function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <div className={styles.headercontainer} >
            <img className={styles.image} src={image} alt="COVID-19" />
            <ul className={styles.headerul}>
            <MenuItem >Home</MenuItem>
            <MenuItem href="https://github.com/jsunilkumar31" >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
            </ul>
        <ul className={styles.headerUlMobile}>
            <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
        >
            <MoreVertIcon color="action" style={{ fontSize: 40 }} />
        </IconButton>
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
            },
            }}
        >
            {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
            </MenuItem>
            ))}
        </Menu>
        </ul>
        </div>
    )
}

export default Header;
