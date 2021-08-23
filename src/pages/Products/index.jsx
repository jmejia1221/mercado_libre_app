import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";
// libs
import { parse } from "qs";
import {isEmpty} from "lodash";

// api
import api from "../../services/api_v1";

// components
import Products from "../../components/modules/Products";
import Header from "../../components/Header";

// CSS
import styles from './Products.module.scss';

const ProductsPage = () => {
    const [products, setProducts] = useState({});
    let location = useLocation()
    const searchValue = parse(location.search, {ignoreQueryPrefix: true});

    useEffect(() => {
        api.get('/items', {
            params: {
                search: searchValue.search
            }
        }).then((response) => {
            const data = response.data;
            setProducts({...data});
        })
        .catch((err) => {
            console.log(err)
        })
    }, [location])

    return (
        <div>
            <Header />
            <h2 className={styles.searchTitle}>{searchValue.search}</h2>
            { !isEmpty(products) && (<Products items={products.items} />) }
        </div>
    );
};

export default ProductsPage;