import React from "react";

// Libs
import classNames from "classnames";

// CSS
import styles from './Button.module.scss';

const Button = ({ placeholder, children, className, ...res }) => {
    return (
        <button
            className={classNames(styles.content, className)}
            placeholder={placeholder}
            {...res}
        >
            {children}
        </button>
    );
};

export default Button;