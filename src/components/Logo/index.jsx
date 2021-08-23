import React from "react";
import {useHistory} from "react-router";

// Image
import logo from "../../assets/Logo_ML@2x.png";

// CSS
import styles from './Logo.module.scss';

const Logo = () => {
    let history = useHistory();
    const goHome = () => {
        history.push('/')
    }
    return (
        <img className={styles.content} onClick={goHome} width="50px" height="36px" src={logo} />
    );
};

export default Logo;