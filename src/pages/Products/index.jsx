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
import Spinner from "../../components/UI/Spinner";

// CSS
import styles from './Products.module.scss';

const ProductsPage = () => {
    const [products, setProducts] = useState({});
    let location = useLocation()
    const searchValue = parse(location.search, {ignoreQueryPrefix: true});

    let renderSpinner = null;
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

    if (!products?.items?.length && searchValue.search) renderSpinner = <Spinner />

    return (
        <div>
            <Header />
            <h2 className={styles.searchTitle}>{searchValue.search}</h2>
            { renderSpinner }
            { (products?.items?.length) ?
                (
                    <Products items={products.items} />
                ) : null }
            { ( !renderSpinner && !products?.items.length) ? (
                    <p className={styles.noSearch}>
                    Es posible que no hayas introducido ninguna busqueda todavia,
                    agrega una en la barra de busqueda...
                    </p>
                ) : null }
        </div>
    );
};

export default ProductsPage;