import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router";

// api
import api from '../../services/api_v1';

// Images
import iconSearch from "../../assets/ic_Search@2x.png";

// Libs
import classNames from "classnames";
import {parse} from "qs";

// Components
import Input from "../UI/Input";

// CSS
import styles from './Search.module.scss';

const Search = ({ className }) => {
    const [searchValue, setSearchValue] = useState('');
    let history = useHistory();
    let location = useLocation();
    const searchParamValue = parse(location.search, {ignoreQueryPrefix: true});

    useEffect(() => {
        setSearchValue(searchParamValue.search);
    }, [location])

    const searchInputHandler = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    const searchHandler = () => {
        history.push(`/items?search=${searchValue}`)
    }

    const keyPressHandler = (e) => {
        if (e.keyCode === 13) searchHandler()
    }

    return (
        <div className={classNames(styles.container, className)}>
            <Input
                value={searchValue}
                onChange={searchInputHandler}
                onKeyDown={keyPressHandler}
                placeholder="Nunca dejes de buscar" />
            <button
                onClick={searchHandler}
                className={styles.searchButton}>
                <img src={iconSearch} />
            </button>
        </div>
    );
};

export default Search;