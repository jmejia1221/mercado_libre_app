import React from "react";

// Libs
import classNames from "classnames";

// Components
import Search from "../Search";

// CSS
import styles from './Header.module.scss';
import Logo from "../Logo";

const Header = ({ searchHandler, className }) => {
    return (
        <header
            className={classNames(styles.container, className)}
        >
            <div className={styles.content}>
                <Logo />
                <Search
                    searchHandler={searchHandler}
                    className={styles.search} />
            </div>
        </header>
    );
};

export default Header;