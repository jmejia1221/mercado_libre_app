import React, {useEffect, useState} from "react";
import {useLocation} from "react-router";

// Api
import api from "../../../services/api_v1";
// libs
import {isEmpty} from "lodash";
// Components
import Header from "../../../components/Header";
import ProductDetails from "../../../components/modules/Products/Details";
import Breadcrumb from "../../../components/UI/Breadcrumb";

const ProductPageDetail = () => {
    const [product, setProduct] = useState({});
    let location = useLocation()
    const idFromRoute = location.pathname.split('/')[2];

    useEffect(() => {
        api.get(`/items/${idFromRoute}`).then((response) => {
            const data = response.data;
            setProduct({...data});
        })
            .catch((err) => {
                console.log(err)
            })
    }, [location])

    return (
        <>
            <Header />
            { !isEmpty(product) && (
                <>
                    <Breadcrumb categories={product.categories} />
                    <ProductDetails product={product} />
                </>
            ) }
        </>
    );
};

export default ProductPageDetail;