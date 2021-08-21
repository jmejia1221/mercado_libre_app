import React from "react";

// Libs
import classNames from "classnames";

// Components
import Search from "../Search";

// CSS
import styles from './Header.module.scss';
import Logo from "../Logo";

const Header = ({ children, className }) => {
    return (
        <header
            className={classNames(styles.container, className)}
        >
            <div className={styles.content}>
                <Logo />
                <Search className={styles.search} />
            </div>
        </header>
    );
};

export default Header;