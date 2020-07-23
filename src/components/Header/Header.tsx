
import React from 'react';
import styles from './Header.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import image from '../../images/image.png';

function Header() {

    return (
        <div className={styles.headercontainer} >
            <img className={styles.image} src={image} alt="COVID-19" />
            <ul className={styles.headerul}>
            <MenuItem >Home</MenuItem>
            <MenuItem href="https://github.com/jsunilkumar31" >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
            </ul>
        
        </div>
    )
}

export default Header;
