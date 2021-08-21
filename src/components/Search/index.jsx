import React from "react";

// Image
import iconSearch from "../../assets/ic_Search@2x.png";

// Libs
import classNames from "classnames";

// Components
import Input from "../UI/Input";

// CSS
import styles from './Search.module.scss';

const Search = ({ className }) => {
    return (
        <div className={classNames(styles.container, className)}>
            <Input placeholder="Nunca dejes de buscar" />
            <button className={styles.searchButton}>
                <img src={iconSearch} />
            </button>
        </div>
    );
};

export default Search;